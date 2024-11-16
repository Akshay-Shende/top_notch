// src/components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
           <img src='/logo_bgRemoved.png'/>
            <h3 className="text-xl font-semibold mb-4">TopNotch Auto Care</h3>
            <p className="text-sm mb-2">
              Mission: Premium quality care for your luxury car service at affordable pricing.
              We ensure real-time updates with a fair and transparent pricing mechanism.
            </p>
            <address className="not-italic text-sm">
            W-175, MIDC Ph-II, Kalyan-Shil Road, Near Pimpleshwar Mandir, Dombivli East - 421203
            </address>
            <a href="mailto:contact@automechanica.com" className="block mt-2">contact@automechanica.com</a>
            <a href="tel:+917397979797" className="block mt-1">+73 9797 9797</a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-sm hover:text-gray-400">Periodic Maintenance Service</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:text-gray-400">Dent & Paint</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:text-gray-400">Bumper Repair</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:text-gray-400">Accidental Repair</a></li>
              <li className="mb-2"><a href="#" className="text-sm hover:text-gray-400">Scratch Removal</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="/" className="text-sm hover:text-gray-400">Home</a></li>
              <li className="mb-2"><a href="/about" className="text-sm hover:text-gray-400">About</a></li>
              <li className="mb-2"><a href="/faq" className="text-sm hover:text-gray-400">FAQ</a></li>
              <li className="mb-2"><a href="/blog" className="text-sm hover:text-gray-400">Blog</a></li>
              <li className="mb-2"><a href="/select" className="text-sm hover:text-gray-400">AutoMechanica Select</a></li>
              <li className="mb-2"><a href="/contact" className="text-sm hover:text-gray-400">Contact Us</a></li>
              <li className="mb-2"><a href="/privacy-policy" className="text-sm hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul>
              <li className="mb-2">
                <a href="https://facebook.com" className="text-sm hover:text-gray-400">Facebook</a>
              </li>
              <li className="mb-2">
                <a href="https://twitter.com" className="text-sm hover:text-gray-400">Twitter</a>
              </li>
              <li className="mb-2">
                <a href="https://instagram.com" className="text-sm hover:text-gray-400">Instagram</a>
              </li>
              <li className="mb-2">
                <a href="https://linkedin.com" className="text-sm hover:text-gray-400">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2024 Top Notch Auto Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
