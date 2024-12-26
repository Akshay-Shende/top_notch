// TopNotchAutomobiles.js
import React from 'react';

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <header className="bg-gray-800 text-white p-4 md:p-6 lg:p-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">Top Notch Automobiles</h1>
        <p className="text-lg md:text-xl lg:text-2xl">Your One-Stop Shop for All Automotive Needs</p>
      </header>
      <section className="bg-gray-100 p-4 md:p-6 lg:p-8 mt-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="bg-white p-4 md:p-6 lg:p-8 rounded shadow">
            <h3 className="text-xl md:text-2xl lg:text-3xl mb-2">Repairing Services</h3>
            <ul>
              <li>Routine Maintenance</li>
              <li>Diagnostic Services</li>
              <li>Repair and Replacement</li>
            </ul>
          </div>
          <div className="bg-white p-4 md:p-6 lg:p-8 rounded shadow">
            <h3 className="text-xl md:text-2xl lg:text-3xl mb-2">Washing Services</h3>
            <ul>
              <li>Exterior Wash</li>
              <li>Interior Cleaning</li>
              <li>Specialized Services</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white p-4 md:p-6 lg:p-8 mt-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Why Choose Top Notch Automobiles?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-100 p-4 md:p-6 lg:p-8 rounded shadow">
            <h3 className="text-lg md:text-xl lg:text-2xl mb-2">Experienced Team</h3>
            <p>Our mechanics and technicians have years of experience working with all types of vehicles.</p>
          </div>
          <div className="bg-gray-100 p-4 md:p-6 lg:p-8 rounded shadow">
            <h3 className="text-lg md:text-xl lg:text-2xl mb-2">State-of-the-Art Equipment</h3>
            <p>We use the latest technology and equipment to ensure accurate diagnoses and efficient repairs.</p>
          </div>
          <div className="bg-gray-100 p-4 md:p-6 lg:p-8 rounded shadow">
            <h3 className="text-lg md:text-xl lg:text-2xl mb-2">Competitive Pricing</h3>
            <p>We offer competitive pricing without compromising on quality.</p>
          </div>
          <div className="bg-gray-100 p-4 md:p-6 lg:p-8 rounded shadow">
            <h3 className="text-lg md:text-xl lg:text-2xl mb-2">Customer Satisfaction</h3>
            <p>We prioritize customer satisfaction and strive to provide a hassle-free experience.</p>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white p-4 md:p-6 lg:p-8 text-center mt-8">
        <p>Get in touch with us:</p>
        <ul>
          <li>Phone: [phone number]</li>
          <li>Email: [email address]</li>
          <li>Address: [physical address]</li>
        </ul>
      </footer>
    </div>
  );
};

export default Page;