import React from "react";

const TopHeader = () => {
  return (
    <div className="bg-gray-700 text-white text-sm py-6 flex justify-between items-center px-4">
      {/* Left Section: Company Name */}
      <div>
        <strong>Top Notch Auto Care</strong>
      </div>

      {/* Right Section: Contact Info and Button */}
      <div className="flex items-center space-x-6">
        <span>📞 <a href="tel:+1234567890" className="underline"> +917020506047</a></span>
        <span>🕒 Mon-Sat: 9:00 AM - 7:00 PM</span>
        <a
          href="/contact-us"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Book
        </a>
      </div>
    </div>
  );
};

export default TopHeader;
