import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import CallToAction from './CollToAction/CallToAction';
import Features from './Features/Features';
import Products from './PopularProducts/Products';
import Services from './Sarvices/Services';
import Team from './Team/Team';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
     return (
          <div className='lg:w-[80%] mx-auto'>
               <Banner></Banner>
               <About></About>
               <Services></Services>
               <CallToAction></CallToAction>
               <Products></Products>
               <Team></Team>
               <Features></Features>
               <Testimonial></Testimonial>
          </div>
     );
};

export default Home;