import React from 'react'
import Slider from '../components/Slider'
import Blog from '../components/Blog'
import NewsSection from '../components/NewsSection'
import { useState } from 'react'
const Home = () => {
  const [selected,setSelected] =useState(0)
  return (
    <div>
       
       <Slider autoSlide={true} autoSlideInterval={3000} />
       <Blog selected={selected} setSelected={setSelected} />
       <NewsSection/>
        
    </div>
  )
}

export default Home