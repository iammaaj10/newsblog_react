import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiBookmark } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";



const PremiumNav = () => {
  return (
    <div className='w-[20%]'>
        <div>
        <h2 className="text-2xl text-blue-400 font-bold">
                News<span className="text-3xl text-red-500 font-bold">B</span>logs
            </h2>
        </div>
        <div >
        <div className='flex items-center gap-2 p-2 my-3 hover:bg-gray-300 hover:cursor-pointer rounded-md' >
        <AiFillHome />
        <p className='text-lg font-semibold'>Home</p>
        </div>
        <div className='flex items-center gap-2 p-2 my-3 hover:bg-gray-300 hover:cursor-pointer rounded-md'>
        <FaHashtag />
        <p className='text-lg font-semibold'>Explore</p>
        </div>
        <div className='flex items-center gap-2 p-2 my-3 hover:bg-gray-300 hover:cursor-pointer rounded-md'>
        <IoIosNotificationsOutline size={20} />

        <p className='text-lg font-semibold'>Notification</p>
        </div>
        <div className='flex items-center gap-2 p-2 my-3 hover:bg-gray-300 hover:cursor-pointer rounded-md'>
        <CgProfile />

        <p className='text-lg font-semibold'>Profile</p>
        </div>
        <div className='flex items-center gap-2 p-2 my-3 hover:bg-gray-300 hover:cursor-pointer rounded-md'>
        <CiBookmark />

        <p className='text-lg font-semibold'>Bookmarks</p>
        </div>
        <div className='flex items-center gap-2 p-2 my-3 hover:bg-gray-300 hover:cursor-pointer rounded-md'>
        <IoMdLogOut />
        <p className='text-lg font-semibold'>Logout</p>
        </div>

        <button className='py-2 px-2 font-bold text-lg text-white bg-blue-500 hover:scale-105 transition rounded-full w-full'>Post</button>
        </div>
        
    </div>
  )
}

export default PremiumNav