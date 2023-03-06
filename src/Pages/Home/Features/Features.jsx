import React from "react";

import img1 from "../../../assets/icons/check.svg";
import img2 from "../../../assets/icons/deliveryt.svg";
import img3 from "../../../assets/icons/person.svg";
import img4 from "../../../assets/icons/group.svg";
import img5 from "../../../assets/icons/Wrench.svg";
import FeaturesItem from "./FeaturesItem";

const coreFeatrue = [
     {"id": 1, "img": img4, "title": "Expert Team"},
     {"id": 4, "img": img1, "title": "100% Guranty"},
     {"id": 2, "img": img2, "title": "Timely Delevery"},
     {"id": 3, "img": img3, "title": "24/7 Support"},
     {"id": 3, "img": img5, "title": "Best Equipment"},
]

const Features = () => {
  return (
    <section className="py-10">
      <div className="sec-title text-center">
        <h3 className=" text-2xl font-bold mb-5 text-red-600">Core Features</h3>
        <h2 className="text-5xl mb-5 font-bold">Why Choose Us</h2>
        <p>
        the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. 
        </p>
      </div>
      <div className="flex justify-between">
          {
               coreFeatrue.map(feature => <FeaturesItem feature={feature} key={feature.id}></FeaturesItem>)
          }
      </div>

    </section>
  );
};

export default Features;
