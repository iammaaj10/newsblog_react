import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Blog from '../components/Blog'
const Home = () => {
  return (
    <div>
       <Navbar />
       <Slider autoSlide={true} autoSlideInterval={3000} />
       <Blog/>
        
    </div>
  )
}

export default Home