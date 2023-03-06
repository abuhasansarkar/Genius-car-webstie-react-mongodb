import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesItem from "./ServicesItem";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`services.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="py-10 text-center">
      <div className="sec-title text-center">
        <h3 className=" text-2xl font-bold mb-5 text-red-600">Services</h3>
        <h2 className="text-5xl mb-5 font-bold">Our Services Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-7 my-7">
        {services.map((service) => (
          <ServicesItem key={services._id} service={service}></ServicesItem>
        ))}
      </div>
      <button>
        <Link className="btn btn-outline text-red-600 hover:bg-red-600">
          More Services
        </Link>
      </button>
    </section>
  );
};

export default Services;
