import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <img
              src="/footerLogo.jpg"
              alt="Top Notch Auto Care Logo"
              className="w-32 h-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">TopNotch Auto Care</h3>
            <p className="text-sm mb-2">
              Mission: Premium quality care for your luxury car service at
              affordable pricing.
            </p>
            <address className="not-italic text-sm mb-2">
              W-175, MIDC Ph-II, Kalyan-Shil Road, Dombivli East - 421203
            </address>
            <a
              href="mailto:contact@automechanica.com"
              className="block text-sm"
            >
              contact@automechanica.com
            </a>
            <a href="tel:+917397979797" className="block mt-1 text-sm">
              +73 9797 9797
            </a>

            <h3 className="text-lg font-semibold mt-6 mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#1da1f2" }}
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#1877f2" }}
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#FF0000" }}
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-2.042-.184-6.67-.184-8.615-.184s-6.573 0-8.615.184c-2.098.19-3.589 1.708-3.785 3.806-.18 2.015-.18 6.204-.18 8.01 0 1.806 0 5.996.18 8.01.196 2.098 1.686 3.616 3.785 3.806 2.042.184 6.67.184 8.615.184s6.573 0 8.615-.184c2.098-.19 3.589-1.708 3.785-3.806.18-2.015.18-6.204.18-8.01 0-1.806 0-5.996-.18-8.01-.196-2.098-1.686-3.616-3.785-3.806zm-10.615 12.816v-8l7 4-7 4z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#0A66C2" }}
                viewBox="0 0 24 24"
              >
                <path d="M22.225 0H1.771C.792 0 0 .774 0 1.726v20.547C0 23.226.792 24 1.771 24h20.451C23.208 24 24 23.226 24 22.273V1.726C24 .774 23.208 0 22.225 0zM7.153 20.452H3.557V9h3.596v11.452zM5.355 7.52c-1.152 0-2.086-.934-2.086-2.085S4.203 3.35 5.355 3.35c1.152 0 2.085.934 2.085 2.085s-.933 2.085-2.085 2.085zm15.096 12.932h-3.596v-5.607c0-1.336-.027-3.059-1.861-3.059-1.865 0-2.151 1.455-2.151 2.957v5.709h-3.596V9h3.451v1.56h.048c.481-.912 1.656-1.872 3.41-1.872 3.644 0 4.318 2.398 4.318 5.518v6.246z" />
              </svg>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-gray-400">
                  Periodic Maintenance Service
                </a>
              </li>
              {/* Other Services */}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="text-sm hover:text-gray-400">
                  Home
                </a>
              </li>
              {/* Other Links */}
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
