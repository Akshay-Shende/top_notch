'use client'
import React from 'react';
import Carousel from './components/Carousel';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonial from './components/Testimonial';
import BrandsWeServeComponent from './components/BrandsWeServe';
import TopNotchExperience from './components/TopNotchExperience';
import WhatsAppIcon from './components/WhatsAppIcon';
import ContactSection from './components/ContactSection';

const Home = () => {
  return (
   <>
   <Carousel/>
   <WhyChooseUs/>
   <Testimonial/>
   <BrandsWeServeComponent/>
   <TopNotchExperience/>
   <ContactSection/>
</>
  );
};

export default Home;
