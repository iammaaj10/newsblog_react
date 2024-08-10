import React from 'react'
import Slider from '../components/Slider'
import Blog from '../components/Blog'
import NewsSection from '../components/NewsSection'
import MainNews from '../components/MainNews'
const Home = () => {
  return (
    <div>
       
       <Slider autoSlide={true} autoSlideInterval={3000} />
       <Blog/>
       <MainNews/>
        
    </div>
  )
}

export default Home