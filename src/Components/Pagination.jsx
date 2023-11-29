import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {
    const{page, totalPages, handlePageChange} = useContext(AppContext)
  return (
    <div className='w-full fixed bottom-0 flex flex-row text-center  border-solid border-2 border-indigo-600 p-4 font-extrabold text-xl bg-cyan-900 text-slate-300 font-mono px-20 '>
       <div className='flex flex-row gap-8 w-1/2 '>
       {
            page >1 && //conditon
            (<button  onClick={()=> handlePageChange(page-1)} className=' border-solid border-2 border-cyan-900 hover:border-slate-300  p-1.5  rounded-lg'>Previous</button>)
        }
        {
            page <totalPages &&
            (<button onClick={()=> handlePageChange(page+1) } className='  border-solid border-2 border-cyan-900 hover:border-slate-300  p-1.5  rounded-lg' >Next </button>)
        }
       </div>

        <p>
            Page {page} of {totalPages}
        </p>
      
    </div>
  )
}

export default Pagination
