import React from 'react'
import PDetails from '../components/PDetails'
import Content from '../components/Content'
import PremiumNav from '../components/PremiumNav'
import Post from '../components/Post'
import RigthBar from '../components/RigthBar'

const Premium = () => {
  return (
    <div className=''>
      <PDetails/>
     <div className='flex justify-between w-[80%] mx-auto'>
      <PremiumNav/>
      <Post/>
      <RigthBar/>
     </div>
    </div>
  )
}

export default Premium