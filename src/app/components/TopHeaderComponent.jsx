import React from "react";

const TopHeader = () => {
  return (
    <div className="bg-gray-700 text-white text-sm pb-1 pt-1 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        {/* Left Section: Company Name */}
        <div className="text-center sm:text-left">
          <strong>Top Notch Auto Care</strong>
        </div>

        {/* Right Section: Contact Info and Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-center sm:text-base space-y-2 sm:space-y-0 lg:text-sm">
          {/* Phone Number */}
          <span>
            📞{" "}
            <a
              href="tel:+917020506047"
              className=" hover:text-blue-300"
            >
              +917020506047
            </a>
          </span>
          {/* Operating Hours */}
          <span className=" text-sm">🕒 Mon-Sat: 9:30 AM - 9:00 PM</span>
          {/* Appointment Button */}
          <a
            href="/appointment"
            className="px-4 py-1 border border-rose-600 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0 "
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
