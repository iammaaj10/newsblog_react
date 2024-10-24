import React from 'react';
import Avatar from "react-avatar";
import Profile from "../assets/profile.jpg"; 
import { CiImageOn } from "react-icons/ci";


const CreatePost = () => {
    return (
        <div className='w-[100%]'>
            <div className='mt-3'>
                <div className='flex items-center justify-between'>
                    <div className='text-center hover:bg-gray-200 w-full px-4 py-3 cursor-pointer hover:rounded-lg'>
                        <h1 className='font-bold text-gray-400 text-lg'>News For You</h1>
                    </div>
                    <div  className='text-center hover:bg-gray-200 w-full px-4 py-3 cursor-pointer hover:rounded-lg'>
                        <h1 className='font-bold text-gray-400 text-lg'>Following</h1>
                    </div>
                </div>
                <div >
                <div className='flex items-center p-4'>
                    <div>
                        <Avatar src={Profile} size="40" round={true} />
                    </div>
                    <input 
                        type="text" 
                        className="outline-none ml-2 w-full border-none  px-2 py-1 text-lg " 
                        placeholder="What's on your mind?" 
                    />
                    
                    
                </div>
                <div className='p-4 flex text-center justify-between border-b border-gray-300 '>
                    <div >
                    <CiImageOn  size={30}/>

                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-2 rounded-full w-24">
                        Post
                    </button>

                </div>
                </div>
               
            </div>
        </div>
    );
}

export default CreatePost;
