import React from 'react';
import { fashiondate } from '../assets/info';

const Fashion = () => {
  return (
    <div className='mt-10'>
        <div className='text-center'>
            <h1 className='text-2xl font-bold font-poppins text-orange-500 uppercase '>Fashion defines the beauty </h1>
        </div>
      <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-3 gap-6'>
        {fashiondate.map((item, index) => (
          <div key={index} className='rounded-lg p-2 overflow-hidden'>
            <img src={item.image} alt={`Fashion ${index}`} className='w-full h-full object-cover rounded-md shadow-lg' />
            <p className='text-center mt-2 text-gray-600'>{item.description}</p>
            <div className='max-w-xl'>
                <p className='text-xl font-semibold w-fit font-sans text-orange-500 '>Fashion defines the personality of a person it enhnace the beauty of person </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fashion;
