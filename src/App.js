
import './App.css';
import Header from './Components/Header';
import Blogs from './Components/Blogs';
import Pagination from './Components/Pagination';
import { useContext, useEffect } from 'react';
import { AppContext } from './Context/AppContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';





function App() {


  const {fetchBlogPosts} = useContext(AppContext);

  const[useSearchParams, setSearchParams]= useSearchParams();//2 output
  //access the obj(current parameter) and change it
  const location = useLocation();

  useEffect(()=>{
  //some changes of url fetching
  //acquire the data of all components over here

  const page= setSearchParams.get('page') ?? 1; //if page is there set page else set 1
  if(location.pathname.includes('tags')){
    //means path is included
    const tag= location.pathname.split("/").at(-1).replaceAll("-"," ");
    fetchBlogPosts(Number(page), tag);

  }
  else if(location.pathname.includes("categories")){
    const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
    fetchBlogPosts(Number(page),null, category);
  }


  else{
    fetchBlogPosts(Number(page));
  }

  }, [location.pathname, location.search]); //when to render ?? ans-->whenever the path name is changed or page ka no.

  
  return (

    <div>

       {/* <Header/>
      <Blogs/>
      <Pagination/> */}
      <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/blog/:blogID" element={<BlogPage/>}/>
    <Route path="/tags/:tag" element={<TagPage/>}/>
     <Route path="/categories/:category" element={<CategoryPage/>}/>

   </Routes>
    </div>
   
          
   
      
      
    
  );
}

export default App;
