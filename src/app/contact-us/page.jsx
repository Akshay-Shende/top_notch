import React from 'react';

const Page = () => {
  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Get in touch with Top Notch Auto Care – we're here to help you with all your automotive needs.
        </p>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section - Contact Details */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-4">Reach out to us by phone, email, or visit our shop.</p>
            <div className="space-y-4">
              <div>
                <p className="text-lg font-medium text-gray-800">Address:</p>
                <p className="text-gray-600">1234 Auto Lane, City, State, Zip Code</p>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-800">Phone:</p>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-800">Email:</p>
                <p className="text-gray-600">contact@topnotchautocare.com</p>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-800">Hours:</p>
                <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sat: 8:00 AM - 2:00 PM</p>
                <p className="text-gray-600">Closed on Sundays</p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">Our Location</h3>
          <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509082!2d144.95373631550457!3d-37.81627974202145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43fdf9f49d%3A0x5045675218ced40!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1605167966783!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Top Notch Auto Care Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
