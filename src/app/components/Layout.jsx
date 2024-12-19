'use client'
import Header from "./Header";
import Footer from "./Footer";
import TopHeader from "./TopHeaderComponent";
import { useState, useEffect } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

const Layout = ({ children }) => {
  const [isTopHeaderVisible, setIsTopHeaderVisible] = useState(true);

  // Use effect to hide `TopHeader` on scroll
  useEffect(() => {
        const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsTopHeaderVisible(scrollPosition === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopHeader />
      <Header isTopHeaderVisible={isTopHeaderVisible} />
      {children}
      <WhatsAppIcon/>
      <Footer />
    </>
  );
};

export default Layout;
