"use client";
import React from "react";
import NavLink from "@/app/components/Navlinks";
import { useRouter } from "next/navigation";
import Services from "./Services";

const Header = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center mx-7 my-5">
      <ul>
        <li>
          <strong>Top Notch Auto Care</strong>
        </li>
      </ul>
      <ul className="flex items-center space-x-6">
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
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            <NavLink href="/book-appointment">Book An Appointment</NavLink>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
