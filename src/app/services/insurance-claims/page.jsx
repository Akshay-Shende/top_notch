import React from 'react';
import Breadcrumb from '@/app/components/Breadcrumb';

const Page = () => {
  const breadcrumbItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Insurance Claim", href: "#", isActive: true }, // Active page
  ];

  return (
    <div>
      <div className="bg-custom-image bg-cover bg-center text-white py-24">
        <h2 className="text-4xl font-bold mb-2">
          Insurance Claims
        </h2>
        <p className="text-lg mb-6">
          Committed to providing exceptional automotive services with a dedication to quality, reliability, and customer satisfaction.
        </p>
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
      </div>

      <div className="flex items-center justify-between px-6 py-12">
        <div className="w-full md:w-1/2 text-lg">
          <p>
            At TopNotch Autocare, we help you navigate the insurance claims process efficiently. Our team works directly with your insurance provider to manage all the paperwork and ensure a hassle-free repair process for your car.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img 
            src="/Images/corousel3.jpg" 
            alt="Insurance claims and car repair" 
            className="w-full h-auto rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
