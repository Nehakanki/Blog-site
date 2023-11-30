import React from 'react'
import { useLocation, useNavigation } from 'react-router-dom'




const CategoryPage = () => {
  const navigation =useNavigation();
  const location =useLocation();

  return (
    <div>
      <Header/>
      <div>
        {/* Back karne ke liye -1 */}
        <button onClick={()=>navigation(-1)}>Back</button>
        <h2>
            Blog Tagged <span>#{tag}</span>
        </h2>
      </div>
       
      <Blogs/>
      <Pagination/>
      

    </div>
  )
}

export default CategoryPage
