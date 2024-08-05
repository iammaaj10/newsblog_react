import React from 'react';
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Slider autoSlide={true} autoSlideInterval={3000} />
      </div>
    </>
  );
}

export default App;
