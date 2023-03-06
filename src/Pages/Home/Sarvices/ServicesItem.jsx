import React from "react";
import { FaArrowRight } from "react-icons/fa";
const ServicesItem = ({service}) => {
    //  console.log(service);
  return (
    <div>
      <div className="card card-compact bg-base-100 border ">
        <figure>
          <img
               className="rounded max-h-60 w-full"
            src={service.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{service.title}</h2>
          
          <div className="card-actions justify-between items-center text-lg">
          <h4 className=" text-red-600 font-semibold">Price: ${service.price}</h4>
            <button className="text-red-600"><FaArrowRight></FaArrowRight></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
