import React from 'react'
import CreatePost from './CreatePost'
import BlogPost from './BlogPost'

const Post = () => {
  return (
    <div className='w-[55%] ' >
        <div>
        <CreatePost/>
        <BlogPost/>
        </div>
        
    </div>
  )
}

export default Post