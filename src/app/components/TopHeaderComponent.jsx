import React from "react";

const TopHeader = () => {
  return (
    <div className="bg-gray-700 text-white text-sm py-2 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        {/* Left Section: Company Name */}
        <div className="text-center sm:text-left">
          <strong>Top Notch Auto Care</strong>
        </div>

        {/* Right Section: Contact Info and Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-center sm:text-base space-y-2 sm:space-y-0">
          {/* Phone Number */}
          <span>
            📞{" "}
            <a
              href="tel:+917020506047"
              className="underline hover:text-blue-300"
            >
              +917020506047
            </a>
          </span>
          {/* Operating Hours */}
          <span>🕒 Mon-Sat: 9:00 AM - 7:00 PM</span>
          {/* Appointment Button */}
          <a
            href="/appointment"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm sm:text-base"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
