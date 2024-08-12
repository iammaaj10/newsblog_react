import React from 'react'
import Slider from '../components/Slider'
import Blog from '../components/Blog'
import MainNews from '../components/MainNews'
import NewsSection from '../components/NewsSection'
const Home = () => {
  return (
    <div>
       
       <Slider autoSlide={true} autoSlideInterval={3000} />
       <Blog/>
       <NewsSection/>
        
    </div>
  )
}

export default Home