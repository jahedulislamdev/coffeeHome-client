import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
   return (
      <footer className="bg-gradient-to-r from-[#4B2E2B] via-[#3B2A1A] to-[#2F1E1A] text-base-content/50">
         <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
               <h3 className="text-xl font-bold mb-4">About Coffee Haven</h3>
               <p className="text-sm leading-relaxed ">
                  A cozy place to enjoy freshly brewed coffee and warm conversations. We serve the best beans in town with love and care.
               </p>
            </div>

            {/* Contact */}
            <div>
               <h3 className="text-xl font-bold mb-4">Contact Us</h3>
               <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                     <FaMapMarkerAlt /> 123 Coffee St, Mocha City
                  </li>
                  <li className="flex items-center gap-2">
                     <FaPhoneAlt /> +123 456 7890
                  </li>
                  <li className="flex items-center gap-2">
                     <FaEnvelope /> support@coffeehaven.com
                  </li>
               </ul>
            </div>

            {/* Social */}
            <div>
               <h3 className="text-xl font-bold mb-4">Follow Us</h3>
               <div className="flex gap-4 text-xl">
                  <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
                  <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
                  <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
               </div>
            </div>
         </div>

         <div className="text-center py-4 text-sm border-t border-gray-600 text-base-content/30">
            © {new Date().getFullYear()} Coffee Haven. All rights reserved.
         </div>
      </footer>
   );
};

export default Footer;
