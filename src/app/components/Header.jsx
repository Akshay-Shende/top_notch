"use client";
import React from "react";
import NavLink from "@/app/components/Navlinks";
import Services from "./Services";

const Header = ({ isTopHeaderVisible }) => {
  return (
    <nav
      className={`sticky top-0 z-50 shadow-md flex items-center py-6 transition-all duration-300 ${
        isTopHeaderVisible ? "bg-transparent pl-0" : "bg-white pl-4 justify-between"
      }`}
    >
      <ul>
        {!isTopHeaderVisible && (
          <li>
            <strong>Top Notch Auto Care</strong>
          </li>
        )}
      </ul>
      <ul className="flex items-center space-x-6 ">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about-us">About Us</NavLink>
        </li>
        <li>
          <Services />
        </li>
        <li>
          <NavLink href="/frquently-asked-questions">FAQs</NavLink>
        </li>
        <li>
          <NavLink href="/contact-us">Contact Us</NavLink>
        </li>
        <li>
          <NavLink href="/workshop">Workshop</NavLink>
        </li>
        <li>
          <NavLink href="/blogs">Blogs</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
