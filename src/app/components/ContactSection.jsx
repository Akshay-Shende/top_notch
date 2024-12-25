import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-gray-100 w-10/12 items-center justify-center min-h-screen mx-auto rounded-lg my-5 pb-36">
      {/* Blue Background Section */}
      <div className="bg-gray-700 text-white py-12 rounded-lg relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Let&apos;s talk</h1>
          </div>

        {/* Overlay Form */}
        <div className="absolute top-[145%] left-[73%] transform -translate-x-1/2 -translate-y-1/4 bg-white shadow-md rounded-lg p-6 w-11/12 lg:w-[45%]">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Schedule a Call
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                Your Number
              </label>
              <input
                type="tel"
                id="number"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700"
              >
                What Are You Looking For?
              </label>
              <select
                id="service"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2 text-black"
              >
                <option>Car Repair</option>
                <option>Car Electrical Works</option>
                <option>Denting & Painting Works</option>
                <option>Insurance Claims</option>
                <option>Detailing Works</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Your Message (Optional)
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
        <p className="text-lg pb-6">
            We’re here to assist you in identifying the products and solutions
            from our range that align most effectively with your project
            requirements.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Us</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <ul className="space-y-2">
              <li>✔ Strong Financial Background</li>
              <li>✔ Quality Oriented</li>
              <li>✔ Comprehensive Solutions</li>
              <li>✔ Expertise of over 3 decades</li>
            </ul>
            <ul className="space-y-2">
              <li>✔ Complete Inhouse Production</li>
              <li>✔ Partnering with Renowned Global Brands</li>
              <li>✔ Timely Delivery</li>
              <li>✔ Dedicated Service Team</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
