import Breadcrumb from '@/app/components/Breadcrumb';
import React from 'react';

const Page = () => {
  const breadcrumbItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#" },
    { name: "Car Electrical Works", href: "#", isActive: true }, // Active page
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-custom-image bg-cover bg-center text-white py-24 px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-4">Car Electrical Works</h2>
        <p className="text-lg max-w-2xl">
          Committed to providing exceptional automotive services with a dedication to quality, reliability, and customer satisfaction.
        </p>
        <Breadcrumb breadcrumbItems={breadcrumbItems} />
      </div>

      {/* Services Section */}
      <div className="py-12 px-6 md:px-12 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Data */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Battery Checks</h4>
              <p className="text-gray-600 mb-4">
                Ensure your car’s battery is in optimal condition to avoid unexpected breakdowns.
              </p>
              <h4 className="text-xl font-semibold mb-4">Alternator Repair</h4>
              <p className="text-gray-600 mb-4">
                Expert alternator repair services to keep your car’s electrical system running smoothly.
              </p>
              <h4 className="text-xl font-semibold mb-4">Wiring Issues</h4>
              <p className="text-gray-600 mb-4">
                Diagnose and resolve wiring issues to prevent electrical failures and malfunctions.
              </p>
              <h4 className="text-xl font-semibold mb-4">Advanced Diagnostics</h4>
              <p className="text-gray-600 mb-4">
                Utilize cutting-edge tools to diagnose electrical problems efficiently.
              </p>
              <h4 className="text-xl font-semibold mb-4">Repairs & Maintenance</h4>
              <p className="text-gray-600">
                Comprehensive repair services to keep your car’s electrical systems in perfect working order.
              </p>
            </div>

            {/* Right Side - Image */}
            <div>
              <img
                src="/images/corousel1.jpg"
                alt="Car Electrical Repair"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-12 px-6 md:px-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Need Expert Electrical Repairs?</h3>
        <p className="mb-6">
          Our experienced electricians are here to help. Contact us today for fast and reliable service.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-md shadow hover:bg-gray-200 transition"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Page;
