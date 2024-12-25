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
      className="relative px-4 text-gray-500 rounded group text-base font-semibold"
    >
      {children}
      <span
        className={`absolute left-1/2 bottom-[2px] h-[2px] w-0 bg-gray-500 transition-all duration-300 group-hover:w-full ${
          isActive ? "w-full -translate-x-1/2" : "-translate-x-1/2"
        }`}
      />
    </Link>
  );
};

export default NavLink;
