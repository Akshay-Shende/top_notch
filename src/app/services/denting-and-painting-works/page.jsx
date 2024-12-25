import React from 'react';
import Breadcrumb from '@/app/components/Breadcrumb';

const Page = () => {
  const breadcrumbItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Denting and Painting Works", href: "#", isActive: true }, // Active page
  ];

  return (
    <div>
      <div className="bg-custom-image bg-cover bg-center text-white py-24">
        <h2 className="text-4xl font-bold mb-2">
          Dainting and Painting Work
        </h2>
        <p className="text-lg mb-6">
          Committed to providing exceptional automotive services with a dedication to quality, reliability, and customer satisfaction.
        </p>
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
      </div>
      
      <div className="flex items-center justify-between px-6 py-12">
        <div className="w-full md:w-1/2 text-lg">
          <p>
            If your car has been involved in an accident or you just need a cosmetic upgrade, our dent removal and car painting services will restore your car’s appearance. We match the original colour perfectly and use the latest techniques for a flawless finish.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img 
            src="/Images/corousel2.jpg" 
            alt="Car painting and dent removal" 
            className="w-full h-auto rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
