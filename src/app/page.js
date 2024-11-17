'use client'
import React from 'react';
import Carousel from './components/Carousel';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonial from './components/Testimonial';
import BrandsWeServeComponent from './components/BrandsWeServe';
import TopNotchExperience from './components/TopNotchExperience';
import WhatsAppIcon from './components/WhatsAppIcon';

const Home = () => {
  return (
   <>
   <Carousel/>
   <WhyChooseUs/>
   <Testimonial/>
   <BrandsWeServeComponent/>
   <TopNotchExperience/>
   <WhatsAppIcon/>
   </>
  );
};

export default Home;
