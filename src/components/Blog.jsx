import React, { useState } from 'react';
import { buttons } from '../assets/info';
const Blog = ({selected, setSelected}) => {
  
  return (
    <div className='p-3 mt-10'>
      <h1 className='text-2xl items-start font-poppins font-semibold text-black'>Latest world news</h1>
      <div className='flex justify-between p-2'>
        <p className='text-md font-semibold text-gray-400'>Don't miss the daily news</p>
        <div className='flex gap-3'>
          {
            buttons.map((button, index) => (
              <button 
                key={index} 
                className='p-3 bg-orange-600 border border-orange-400 rounded-2xl m-2 hover:bg-gray-400 text-white font-bold hover:text-black hover:border-gray-400' 
              >
                {button}
              </button>
            ))
          }
        </div>
      </div>
    </div>
  );
}



export default Blog;
