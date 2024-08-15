import React, { useState } from 'react';
import Slider from '../components/Slider';
import RenderComponent from '../components/RenderComponent';
import Blog  from '../components/Blog';

const Home = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <Slider autoSlide={true} autoSlideInterval={3000} />
      <Blog selected={selected} setSelected={setSelected} />
      <RenderComponent index={selected} selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default Home;
