import React from 'react';
import { useScrollAnimation } from "./useScrollAnimation";
import { InstagramIcon, TwitterIcon, LinkedinIcon, FacebookIcon } from "./SvgIcons";
import Logo from "../assets/Logowhite.png";
import Privacy from '../Pages/Privacy';
import { Link } from "react-router-dom";

const Footer = () => {
  useScrollAnimation();
  return (
    <footer className="flex justify-around pl-8 mt-20 border-t w-full py-10 border-gray-900 bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 shadow-2xl text-white hover:opacity-100 transition-all duration-500 ease-out fade-up opacity-0 translate-y-10">
      <div className="leftSide md:max-w-xs sm:max-w-xs lg:max-w-sm">
        <div className="flex flex-col justify-center items-center space-y-4">
          <img
            className="h-20 w-64 object-cover overflow-hidden rounded-lg hover:scale-105 hover:rotate-2 transform transition-all duration-300"
            src={Logo}
          />
          <p className="text-lg font-semibold text-center hover:text-gray-500 transition-all duration-300">
            14-in-1 browser extension developers and designers love.
          </p>
          <div className="flex space-x-4 justify-center gap-6">
            <a
              href="https://www.instagram.com/zygigofficial/"
              className="Instagram text-gray-400 hover:text-gray-600 hover:scale-110 transform transition-all duration-300 cursor-pointer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://x.com/zygigofficial"
              className="Twitter pt-[1.5px] text-gray-400 hover:text-gray-600 hover:scale-110 transform transition-all duration-300 cursor-pointer"
            >
              < TwitterIcon/>
            </a>
            <a
              href="https://www.linkedin.com/company/zygig-official/"
              className="Linkedin text-gray-400 hover:text-gray-600 hover:scale-110 transform transition-all duration-300 cursor-pointer"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61567402440958"
              className="Facebook text-gray-400 hover:text-gray-600 hover:scale-110 transform transition-all duration-300 cursor-pointer"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="rightSide grid grid-cols-1 md:max-w-[340px] sm:max-w-[250px] lg:max-w-[450px] md:grid-cols-4 gap-44">
        <div>
          <h3 className="text-lg font-normal mb-4 underline decoration-gray-500 decoration-2">
            Product
          </h3>
          <ul className="space-y-3.5">
            <li className="font-light text-sm text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
              Features
            </li>
            <li className="font-light text-sm text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
              Demo
            </li>
            <li className="font-light text-sm text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
              Love
            </li>
            <li className="font-light text-sm text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
              Pricing
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-normal mb-4 underline decoration-gray-500 decoration-2">
            Support
          </h3>
          <ul className="space-y-3.5">
            <li className="font-light text-sm text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
            <Link to="/AboutUs">AboutUs</Link>
            </li>
            <li className="font-light text-sm text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
            <Link to="/FAQs">FAQs</Link>
            </li>
            <li className="font-light text-sm text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
            <Link to="/ContactUs">ContactUs</Link>
            </li>
            <li className="font-light text-sm text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
              Creator
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-normal mb-4 underline decoration-gray-500 decoration-2">
            Legal
          </h3>
          <ul className="space-y-3.5">
            <li className="font-light text-sm text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
            <Link to="/Privacy" >Privacy</Link>
            </li>
            <li className="font-light text-sm text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
            <Link to="/Terms" >Terms</Link>
            </li>
            <li className="font-light text-sm text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
            <Link to="/Refund" >Refund</Link>
            </li>
            <li className="font-light text-sm text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
              Cookie
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
