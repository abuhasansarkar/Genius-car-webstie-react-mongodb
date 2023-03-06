import React from 'react';

import parson from '../../../assets/images/about_us/person.png'
import parts from '../../../assets/images/about_us/parts.png'

const About = () => {
     return (
          <div className="about py-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="img-box w-1/2 relative">
            <img src={parson} className=" w-[80%] mb-10 rounded-lg shadow-2xl" alt='parson' />
            <img src={parts} className="w-[50%] border-spacing-3 absolute bottom-0 right-12 rounded-lg shadow-2xl" alt='parts' />
            </div>
            <div className='w-1/2'>
               <h3 className=' text-2xl font-bold mb-5 text-red-600'>About Us</h3>
              <h2 className="text-5xl font-bold w-2/3">We are qualified & of experience in this field</h2>
              <p className="py-6 w-4/5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
              <p className="pb-5 w-4/5">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
              
              <button className="btn btn-outline text-white mr-3 bg-red-600">Get More Info</button>
            </div>
          </div>
        </div>
     );
};

export default About;