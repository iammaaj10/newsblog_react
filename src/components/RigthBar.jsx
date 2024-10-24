import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';
import Profile from "../assets/profile.jpg"; 
const RigthBar = () => {
  return (
    <div className='w-[20%]'>
        <div className='flex items-center bg-gray-200 rounded-full outline-none px-2'>
        <CiSearch  size="20px"/>
            <input type="text" placeholder='Search' className='outline-none bg-transparent p-2'/>
        </div>
        <div className='p-4 bg-gray-200 rounded-xl outline-none w-full my-4'>
            <h1 className='text-lg font-bold font-poppins'>Follow to Explore More</h1>
            <div className='flex items-center justify-between my-3'>
                <div className='flex'>
                    <div>
                <Avatar src={Profile} size="40" round={true} />

                    </div>
                    <div className='ml-2'>
                        <h1 className='font-semibold'>Maaj</h1>
                        <p>@iammaaaj10</p>
                    </div>
                    <div>
                        <button className='bg-black text-white font-semibold py-1 px-4 rounded-full'>Follow</button>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between my-3'>
                <div className='flex'>
                    <div>
                <Avatar src={Profile} size="40" round={true} />

                    </div>
                    <div className='ml-2'>
                        <h1 className='font-semibold'>Maaj</h1>
                        <p>@iammaaaj10</p>
                    </div>
                    <div>
                        <button className='bg-black text-white font-semibold py-1 px-4 rounded-full'>Follow</button>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between my-3'>
                <div className='flex'>
                    <div>
                <Avatar src={Profile} size="40" round={true} />

                    </div>
                    <div className='ml-2'>
                        <h1 className='font-semibold'>Maaj</h1>
                        <p>@iammaaaj10</p>
                    </div>
                    <div>
                        <button className='bg-black text-white font-semibold py-1 px-4 rounded-full'>Follow</button>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between my-3'>
                <div className='flex'>
                    <div>
                <Avatar src={Profile} size="40" round={true} />

                    </div>
                    <div className='ml-2'>
                        <h1 className='font-semibold'>Maaj</h1>
                        <p>@iammaaaj10</p>
                    </div>
                    <div>
                        <button className='bg-black text-white font-semibold py-1 px-4 rounded-full'>Follow</button>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between my-3'>
                <div className='flex'>
                    <div>
                <Avatar src={Profile} size="40" round={true} />

                    </div>
                    <div className='ml-2'>
                        <h1 className='font-semibold'>Maaj</h1>
                        <p>@iammaaaj10</p>
                    </div>
                    <div>
                        <button className='bg-black text-white font-semibold py-1 px-4 rounded-full'>Follow</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RigthBar