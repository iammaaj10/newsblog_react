import React from 'react'
import Avatar from 'react-avatar';
import Profile from "../assets/profile.jpg";
import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";


const BlogPost = () => {
    return (
        <div className='p-2 border-b border-gray-300'>
            <div className='flex gap-2'>

                <Avatar src={Profile} size="40" round={true} />
                <div className='w-full'>
                    <div className='flex items-center gap-2 '>
                        <h1 className='font-bold text-lg '>Maaj</h1>
                        <p className='text-sm text-md'>@iammaaaj10    . 1m</p>
                    </div>
                    <div>
                        <p>Hello News Frek lets connect together and share your opnions to the world be free to express your thoughts on our platform </p>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-1 '>
                            <div className='p-2 hover:bg-green-300 rounded-full pointer-cursor'>
                                <FaRegCommentAlt size={15} />

                            </div>
                            <p>0</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className='p-2 hover:bg-red-300 rounded-full pointer-cursor'>
                            
                            <AiOutlineLike size={18} />

                            </div>
                            <p>0</p>

                        </div>
                        <div className='flex items-center gap-1'>
                            <div className='p-2 hover:bg-yellow-300 rounded-full pointer-cursor'>
                            
                            <CiBookmark size={18} />

                            </div>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost