import React from 'react';
import { FaStar } from "react-icons/fa";

const SingleTestimonial = ({testimonial}) => {
     return (
          <div className='border p-5 rounded-2xl shadow-md'>
               <div className="client-ifon flex gap-5 my-5">
                    <img className='w-16 h-16 rounded-full' src={testimonial.img} alt="img" />
                    <div className="name">
                         <h2 className='text-2xl font-bold'>{testimonial.title}</h2>
                         <h5>{testimonial.position}</h5>
                    </div>
               
               </div>
               <p className='mb-3'>{testimonial.discription}</p>
               <div className="rating text-red-600">
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
               </div>
          </div>
     );
};

export default SingleTestimonial;