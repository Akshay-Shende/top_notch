'use client'
import React from 'react';
import Carousel from './components/Carousel';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonial from './components/Testimonial';
import BrandsWeServeComponent from './components/BrandsWeServe';
import TopNotchExperience from './components/TopNotchExperience';
import WhatsAppIcon from './components/WhatsAppIcon';
import ContactSection from './components/ContactSection';
import ServiceTimeline from './components/ServiceTimeline';

const Home = () => {
  return (
   <>
   <Carousel/>
   <WhyChooseUs/>
   <Testimonial/>
   <BrandsWeServeComponent/>
   <TopNotchExperience/>
   <ContactSection/>
   <ServiceTimeline/>
</>
  );
};

export default Home;
