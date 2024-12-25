import React from 'react';
import Breadcrumb from '@/app/components/Breadcrumb';

const Page = () => {
  const breadcrumbItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Detailing Works", href: "#", isActive: true }, // Active page
  ];

  return (
    <div>
      <div className="bg-custom-image bg-cover bg-center text-white py-24">
        <h2 className="text-4xl font-bold mb-2">
         Detailing Works
        </h2>
        <p className="text-lg mb-6">
          Committed to providing exceptional automotive services with a dedication to quality, reliability, and customer satisfaction.
        </p>
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
      </div>

      <div className="flex items-center justify-between px-6 py-12">
        <div className="w-full md:w-1/2 text-lg">
          <p>
            Our car detailing services will give your vehicle a showroom shine. From interior detailing to exterior waxing, Teflon Coating, Paint protection films and ceramic coating, we ensure your car looks spotless inside and out.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img 
            src="/Images/corousel3.jpg" 
            alt="Car detailing services" 
            className="w-full h-auto rounded-lg shadow-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
