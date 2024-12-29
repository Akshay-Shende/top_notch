"use client";
import React, { useState } from "react";
import Services from "./Services";
import NavLink from "./Navlinks";

const Header = ({ isTopHeaderVisible }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle link clicks
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close the menu
  };

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md flex items-center py-4 transition-all duration-300 px-2 ${
        isTopHeaderVisible ? "bg-transparent pl-0" : "bg-white pl-4 justify-between"
      }`}
    >
      <div className="flex justify-between w-full">
        {/* Logo */}
        <ul>
          {!isTopHeaderVisible && (
            <li>
              <strong>Top Notch Auto Care</strong>
            </li>
          )}
        </ul>

        {/* Hamburger Menu Button */}
        <button
          className="block lg:hidden text-xl px-2 border-2 border-gray-700 rounded w-9"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "X" : "☰"}
        </button>

        {/* Navbar Links (Desktop and Mobile) */}
        <ul
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 absolute lg:relative top-16 lg:top-auto right-0 lg:right-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none w-full lg:w-auto transition-all font-bold`}
        >
          <li className="border-b lg:border-none">
            <NavLink href="/" onClick={handleLinkClick}>
              Home
            </NavLink>
          </li>
          <li className="border-b lg:border-none">
            <NavLink href="/about-us" onClick={handleLinkClick}>
              About Us
            </NavLink>
          </li>
          <li className="border-b lg:border-none ms-4">
            <Services onLinkClick={handleLinkClick} />
          </li>
          <li className="border-b lg:border-none">
            <NavLink href="/frequently-asked-questions" onClick={handleLinkClick}>
              FAQs
            </NavLink>
          </li>
          <li className="border-b lg:border-none">
            <NavLink href="/contact-us" onClick={handleLinkClick}>
              Contact Us
            </NavLink>
          </li>
          <li className="border-b lg:border-none">
            <NavLink href="/workshop" onClick={handleLinkClick}>
              Workshop
            </NavLink>
          </li>
          <li className="border-b lg:border-none">
            <NavLink href="/blogs" onClick={handleLinkClick}>
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
