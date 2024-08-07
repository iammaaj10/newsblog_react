import React from 'react'

const Blog = () => {
  return (
    <div className='p-3 mt-10 ' >
        <h1 className='text-2xl items-start font-poppins font-semibold text-black  '>Latest world news</h1>
        <div className='flex justify-between '>
        <p className='text-md font-semibold text-gray-400 '>Dont miss the daily news</p>
        <div className='flex gap-3'>
        <button className='text-white font-bold bg-orange-700 rounded-md p-2 '>World</button>
        <button className='text-white font-bold bg-orange-700 rounded-md p-2 '>Technology</button>
        <button className='text-white font-bold bg-orange-700 rounded-md p-2 '>Business</button>
        <button className='text-white font-bold bg-orange-700 rounded-md p-2 '>Sports</button>
        </div>
        
        </div>
        
    </div>
  )
}

export default Blog