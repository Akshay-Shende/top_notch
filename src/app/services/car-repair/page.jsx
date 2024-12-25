import React from 'react';
import Breadcrumb from '@/app/components/Breadcrumb';

const Page = () => {
  const breadcrumbItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Car Repair", href: "#", isActive: true }, // Active page
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-custom-image bg-cover bg-center text-white py-12 lg:px-12">
        <h2 className="text-5xl font-extrabold mb-4">
          Car Repair
        </h2>
        <p className="text-xl  mb-6 leading-relaxed max-w-5xl">
          At Top Notch Auto Care, we are committed to delivering exceptional automotive services 
          with a steadfast dedication to quality, reliability, and customer satisfaction. Your vehicle deserves the best—and that's exactly what we offer.
        </p>
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
      </div>

      {/* Services Overview Section */}
      <div className="py-16 px-8 lg:px-32 bg-gray-100 text-gray-800">
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
    {/* Left Content Section */}
    <div className="lg:w-1/2">
      <h3 className="text-3xl font-bold mb-6">
        Comprehensive Mechanical Repairs
      </h3>
      <p className="text-lg leading-relaxed mb-8">
        From routine maintenance to major overhauls, our skilled technicians ensure your vehicle is operating at its peak. 
        We pride ourselves on precision, professionalism, and customer-first service.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-2xl font-semibold mb-2">Engine Diagnostics</h4>
          <p className="text-base leading-relaxed">
            Advanced diagnostics to identify and address engine issues efficiently, ensuring optimal performance.
          </p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-2">Transmission Repair</h4>
          <p className="text-base leading-relaxed">
            Comprehensive transmission services to restore smooth shifting and driving experience.
          </p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-2">Brake Servicing</h4>
          <p className="text-base leading-relaxed">
            Reliable brake inspection and repair services to keep you safe on the road.
          </p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-2">Suspension Repairs</h4>
          <p className="text-base leading-relaxed">
            Expert suspension repair services to improve handling and ensure a smooth ride.
          </p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-2">Routine Maintenance</h4>
          <p className="text-base leading-relaxed">
            Preventative maintenance to enhance longevity and performance of your vehicle.
          </p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-2">Major Overhauls</h4>
          <p className="text-base leading-relaxed">
            Extensive repairs for complex mechanical issues, ensuring your car runs like new.
          </p>
        </div>
      </div>
    </div>

    {/* Right Image Section */}
    <div className="lg:w-1/2">
      <img
        src="/Images/corousel1.jpg"
        alt="Mechanical Repairs"
        className="rounded-lg shadow-md w-full"
      />
    </div>
  </div>
</div>

    </div>
  );
};

export default Page;
