'use client'
import React from 'react';
import Carousel from './components/Carousel';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonial from './components/Testimonial';
import BrandsWeServeComponent from './components/BrandsWeServe';

const Home = () => {
  return (
   <>
   <Carousel/>
   <WhyChooseUs/>
   <Testimonial/>
   <BrandsWeServeComponent/>
   </>
  );
};

export default Home;
