import React from "react";
import SingleTestimonial from "./SingleTestimonial";

import img1 from "../../../assets/images/team/1.jpg"
import img2 from "../../../assets/images/team/2.jpg"

const testimonial = [
     {"id": 1, "img": img1, "title": "Awlad Hossain", "position": "Java Expert", "discription": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},
     {"id": 2, "img": img2, "title": "Awlad Hossain", "position": "Java Expert", "discription": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "}
]


const Testimonial = () => {
  return (
    <section className="py-10">
      <div className="sec-title text-center">
        <h3 className=" text-2xl font-bold mb-5 text-red-600">Services</h3>
        <h2 className="text-5xl mb-5 font-bold">Our Services Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="flex gap-5 pt-5">
          {
               testimonial.map(testi =>  <SingleTestimonial testimonial={testi} key={testi.id}></SingleTestimonial>)
          }
      </div>
     
    </section>
  );
};

export default Testimonial;
