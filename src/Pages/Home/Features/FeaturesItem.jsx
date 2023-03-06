import React from 'react';

const FeaturesItem = ({feature}) => {
     return (
          <div className='text-center p-7 mt-5 hover:bg-red-300 transition-all rounded-md'>
               <img className='m-auto' src={feature.img} alt="feature" />
               <h5 className='font-bold text-lg mt-2'>{feature.title}</h5>
          </div>
     );
};

export default FeaturesItem;