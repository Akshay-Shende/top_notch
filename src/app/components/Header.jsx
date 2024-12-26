"use client";
import React, { useState } from "react";
import NavLink from "@/app/components/Navlinks";
import Services from "./Services";

const Header = ({ isTopHeaderVisible }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md flex items-center py-4 transition-all duration-300 ${
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
          className="block lg:hidden text-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* Navbar Links (Desktop and Mobile) */}
        <ul
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 absolute lg:relative top-16 lg:top-auto right-0 lg:right-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none w-full lg:w-auto transition-all`}
        >
          <li className="border-b lg:border-none">
            <NavLink href="/">Home</NavLink>
          </li>
          <li className="border-b lg:border-none">
            <NavLink href="/about-us">About Us</NavLink>
          </li>
          <li className="border-b lg:border-none">
            <Services />
          </li>
          <li className="border-b lg:border-none">
            <NavLink href="/frequently-asked-questions">FAQs</NavLink>
          </li>
          <li className="border-b lg:border-none">
            <NavLink href="/contact-us">Contact Us</NavLink>
          </li>
          <li className="border-b lg:border-none">
            <NavLink href="/workshop">Workshop</NavLink>
          </li>
          <li className="border-b lg:border-none">
            <NavLink href="/blogs">Blogs</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
