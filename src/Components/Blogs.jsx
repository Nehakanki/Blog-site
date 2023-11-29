import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from '../Spinner';

const Blogs = () => {
    const {posts, loading} = useContext(AppContext);
    console.log(posts);
    
  return (
    <div className='flex flex-col margin items-center justify-center min-h-screen bg-slate-100'>
      {
      loading ? (<Spinner/>):(  
        posts.length === 0 ? (<div>No Post Found</div>)
        
        :(posts.map((post)=>
            <div key={post.id} className='w-1/2 text-justify my-4 shadow-inner rounded-md p-2'>
                <p className='font-bold'>{post.title}</p>
                <p>
                    By <span>{post.author}</span> on <span>{post.category}</span>
                </p>
                <p>Posted On {post.data}</p>
                <p>{post.content}</p>
                <div className='text-blue-600'>{post.tags.map((tag , index)=>{
                    return <span key={index}>{`#${tag}`}</span>
                })}</div>
                
    </div>
        ))
      )
}
    </div>
  )
}

export default Blogs
