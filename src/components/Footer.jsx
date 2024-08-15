import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-full h-full p-3'>
        <div className='text-center'>
        <h1 className='text-xl text-violet-700 font-bold font-poppins'>Follow us on  </h1>
        </div>
         <div className='flex gap-4 text-white p-3 items-center justify-center'>
        <div className='bg-violet-700 rounded-full px-[8px] py-[2px]'>
        <i className="fa-brands fa-instagram cursor-pointer text-xl"></i>
        </div>
        <div className='bg-violet-700 rounded-full px-[8px] py-[2px]'> 
        <i className="fa-brands fa-facebook cursor-pointer text-xl"></i>
        </div>
        <div className='bg-violet-700 rounded-full px-[8px] py-[2px]'>
        <i className="fa-brands fa-twitter cursor-pointer text-xl"></i>
        </div>
        <div className='bg-violet-700 rounded-full px-[8px] py-[2px]'>
        <i className="fa-brands fa-github cursor-pointer text-xl"></i>
        </div>
        </div>
    </div>
  )
}

export default Footer