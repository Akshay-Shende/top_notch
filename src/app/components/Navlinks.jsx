"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(pathname === href);
  }, [pathname, href]);

  return (
    <Link
      href={href}
      className={`relative px-4 text-base font-semibold ${
        isActive
          ? "text-blue-500" // active link color
          : "text-gray-500 hover:text-blue-500" // inactive link color and hover effect
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;