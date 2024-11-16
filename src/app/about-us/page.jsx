import React from 'react';

const Page = () => {
  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
          About Top Notch Auto Care
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Committed to providing exceptional automotive services with a dedication to quality, reliability, and customer satisfaction.
        </p>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section - Image */}
          <div className="flex justify-center items-center">
            <img
              src="/path/to/your-image.jpg"
              alt="Top Notch Auto Care Garage"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Section - Text */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-4">
              At Top Notch Auto Care, our mission is to keep your vehicle running smoothly and safely. We aim to deliver trustworthy, expert services that exceed our clients' expectations.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h3>
            <p className="text-gray-600 mb-2">
              - **Experienced Technicians**: Our team is highly skilled, certified, and passionate about cars.
            </p>
            <p className="text-gray-600 mb-2">
              - **Quality Service**: We use only top-quality parts and follow industry standards for every service.
            </p>
            <p className="text-gray-600 mb-2">
              - **Customer Satisfaction**: From diagnostics to repairs, we put our customers' needs first.
            </p>
            <p className="text-gray-600">
              - **State-of-the-Art Facility**: Our shop is equipped with advanced tools and technology to ensure precise and efficient service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
