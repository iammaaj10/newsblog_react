import React from 'react';
import { fashiondate } from '../assets/info';

const Fashion = () => {
  return (
    <div className='mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {fashiondate.map((item, index) => (
          <div key={index} className='rounded-lg p-2 overflow-hidden'>
            <img src={item.image} alt={`Fashion ${index}`} className='w-full h-full object-cover rounded-md shadow-lg' />
            <p className='text-center mt-2 text-gray-600'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fashion;
