import React from 'react'
import Header from '../Components/Header'
import Pagination from '../Components/Pagination'
import Blogs from '../Components/Blogs'
import { useLocation, useNavigation } from 'react-router-dom'

const TagPage = () => {
    const navigation =useNavigation();
    const location =useLocation();
    // tag ka name using location
    const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header/>
      <div>
        {/* Back karne ke liye -1 */}
        <button onClick={()=>navigation(-1)}>Back</button>
        <h2>
            Blogs On <span>{category}</span>
        </h2>
      </div>
       
      <Blogs/>
      <Pagination/>
      

    </div>
  )
}

export default TagPage
