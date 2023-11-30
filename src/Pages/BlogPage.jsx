import React, { useContext, useState } from 'react'
import Header from '../Components/Header'
import Pagination from '../Components/Pagination'
import Blogs from '../Components/Blogs'
import {useNavigation, useLocation } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { baseUrl } from '../baseUrl'

const BlogPage = () => {

  //current blog
  const [blog, setBlog] =useState(null);
  const [relatedblogs, setRelatedBlogs]= useState([]) //starting empty list
  const location =useLocation();
  const navigation =useNavigation();

  const {loading , setLoading} = useContext(AppContext);
  const blogId= location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true)
    let url= `${baseUrl}?blogId=${blogId}`;
    try{
      const res= await fetch(url);
      const data= await res.json();
      
      setBlog(data.blog);
      setRelatedBlogs(data.relatedblogs);
    }
  }
  return (
    <div>
     <div>
     <button onClick={()=>navigation(-1)}>Back</button>
     
     </div>


      
    </div>
  )
}

export default BlogPage
