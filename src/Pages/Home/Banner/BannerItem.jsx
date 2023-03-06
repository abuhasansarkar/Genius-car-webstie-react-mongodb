import React from "react";

const BannerItem = ({ slider }) => {
  return (
     
     <div id={slider.id} className="carousel-item relative w-full text-white">
       <div className="slider-img">
         <img src={slider.image} className="w-full rounded-lg" alt="slider" />
       </div>
       <div className="slider-content absolute top-1/4 left-24 ">
         <h1 className="text-6xl font-bold w-2/5 mb-7">
           Affordable Price For Car Servicing
         </h1>
         <p className="w-2/5 mb-7">
           There are many variations of passages of available, but the
           majority have suffered alteration in some form
         </p>
         <button className="btn btn-outline text-white mr-3 bg-red-600">
           Discover More
         </button>
         <button className="btn btn-outline text-white hover:text-red-600">
           Latest Projects
         </button>
       </div>
       <div className="absolute gap-5 flex justify-between transform -translate-y-1/2 right-12 bottom-10">
         <a href={`#${slider.prev}`} className="btn btn-circle hover:bg-red-600">
           ❮
         </a>
         <a href={`#${slider.next}`} className="btn btn-circle bg-red-600">
           ❯
         </a>
       </div>
     </div>

  );
};

export default BannerItem;
