//Context Creation

import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

 export const AppContext = createContext(); //step 1 Done


 export default  function AppContextProvider({children}){
    //data pass as provider (passed to all children)
    const[loading, setLoading]= useState(false);
    const[posts, setPosts]= useState([]);
    const[page, setPage]=useState(1);
    const[totalPages, setTotalPages]= useState(null);

    //data filling 

    async function fetchBlogPosts(page=1){
        setLoading(true);//loading ghumega
        let url= `${baseUrl}?page=${page}`;

        try{
                const result= await fetch(url);
                const data= await result.json();
                console.log(data);
                setPage(data.page);
                setPosts(data.posts);
                setTotalPages(data.totalPages);
        }
        catch(error){
            console.log("error in fetching")
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }


    
// For previous Or next Button 
    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);

    }





    // data (context) to our consumers
    const value= {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };


    return <AppContext.Provider value={value}>
        {children} 
        {/* children ko yeh sari values provide kar deni hai */}
    </AppContext.Provider>



}




