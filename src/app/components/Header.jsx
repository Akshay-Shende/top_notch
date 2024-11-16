"use client";
import React, { useState } from "react";
import NavLink from '@/app/components/Navlinks'
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

 

  return (
    <nav className="flex justify-between mx-7 my-5 ">
      <ul>
        <li> <strong>Top Notch Auto Care</strong></li>
      </ul>
      <ul className="flex space-x-4">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink href="/services">Services</NavLink>
        </li>
        <li>
          <NavLink href="/frquently-asked-questions">FAQs</NavLink>
        </li>
        <li>
          <NavLink href="/contact-us">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
