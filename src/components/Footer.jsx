import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-full h-full p-3'>
        <div className='text-center'>
        <h1 className='text-xl text-violet-700 font-bold font-poppins'>Follow us on  </h1>
        </div>
         <div className='flex gap-4 text-white p-3 items-center justify-center '>
        <div className='bg-violet-700 rounded-full px-[8px] py-[2px] transition-transform transform hover:scale-125 hover:bg-gray-200  hover:text-black'>
        <i className="fa-brands fa-instagram cursor-pointer text-xl"></i>
        </div>
        <div className='bg-violet-700 rounded-full px-[8px] py-[2px] transition-transform transform hover:scale-125 hover:bg-gray-200 hover:text-black'> 
        <i className="fa-brands fa-facebook cursor-pointer text-xl"></i>
        </div>
        <div className='bg-violet-700 rounded-full px-[8px] py-[2px] transition-transform transform hover:scale-125 hover:bg-gray-200 hover:text-black'>
        <i className="fa-brands fa-twitter cursor-pointer text-xl"></i>
        </div>
        <div className='bg-violet-700 rounded-full px-[8px] py-[2px] transition-transform transform hover:scale-125 hover:bg-gray-200 hover:text-black'>
        <i className="fa-brands fa-github cursor-pointer text-xl"></i>
        </div>

        </div>

<div className='flex gap-20'>
  <div className='max-w-xl'>
    <h1 className='text-violet-700 font-bold font-poppins text-xl mb-2 '>About Us</h1>
    <p className='text-violet-700 text-md font-poppins'>
      NewsBlogs company started in 2024 with the ambition to provide the news and upload your blogs on our platform. Let's create a beautiful community and make your optimistic thoughts and put them on our platform...
    </p>
  </div>

  <div className='max-w-xl'>
    <h1 className='text-violet-700 font-bold font-poppins text-xl mb-2'>Contact Us</h1>
    <div className="flex flex-col gap-3">
      <i className="fa-solid fa-phone text-violet-700 font-md"> 9130304068</i>
      <i className="fa-solid fa-envelope text-violet-700 font-md"> newblogs@.ac.in</i>
    </div>
    
    <div className="flex mt-4">
  <input
    type="email"
    placeholder="Enter the Email"
    className="p-2 border border-violet-700 rounded-l-2xl focus:outline-none focus:ring-2 focus:ring-violet-500"
  />
  <button className="bg-violet-700 text-white font-semibold font-poppins p-2 rounded-r-2xl hover:bg-gray-500 hover:text-black">
    Send
  </button>
</div>
 </div>
 <div>
    <h1></h1>
 </div>
 </div>
   
    </div>
  )
}

export default Footer