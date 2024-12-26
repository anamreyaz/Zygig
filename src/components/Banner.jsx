
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cornerEffect from "../assets/Banner.webp";
import { useScrollAnimation } from "./useScrollAnimation";
import { Link, useLocation } from "react-router-dom";

const Banner = () => {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scrollTo(0, 0); 
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  useScrollAnimation();

  return (
    <div className="flex justify-center items-center my-16 md:my-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Outer container */}
      <div
        className="w-full max-w-6xl bg-[#0a1128] shadow-2xl rounded-3xl p-8 sm:p-10 md:p-12 text-center text-white relative overflow-hidden"
        data-aos="fade-up"
      >
        {/* Corner SVG/image animations */}
        <img
          src={cornerEffect}
          alt="Top Left Effect"
          className="absolute top-0 left-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 opacity-0 pointer-events-none transition-all duration-500 ease-in-out"
          id="top-left-effect"
        />
        <img
          src={cornerEffect}
          alt="Bottom Right Effect"
          className="absolute bottom-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 opacity-0 pointer-events-none transition-all duration-500 ease-in-out"
          id="bottom-right-effect"
        />

        {/* Heading */}
        <h1 className="main-text text-3xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-snug">
          Let's Create Your <br />
          <span className="italic text-3xl sm:text-5xl md:text-6xl font-medium">
            Dream Project
          </span>
        </h1>
        
        {/* Description */}
        <p className="sub-text text-gray-400 text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed">
          Our team is here to help you succeed. Let's work together to achieve
          your goals <br className="hidden sm:block" /> and elevate your brand to new heights.
        </p>
        
        {/* Button with animation */}
        <a
  href="https://calendly.com/zygigofficial/30min"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-blue-500 hover:to-blue-700 text-white font-medium rounded-full hover:scale-110 hover:brightness-125 transition-transform duration-300 shadow-lg"
    onMouseEnter={() => {
      document.getElementById("top-left-effect").style.opacity = "1";
      document.getElementById("top-left-effect").style.transform = "scale(1)";
      document.getElementById("bottom-right-effect").style.opacity = "1";
      document.getElementById("bottom-right-effect").style.transform = "scale(1)";
    }}
    onMouseLeave={() => {
      document.getElementById("top-left-effect").style.opacity = "0";
      document.getElementById("top-left-effect").style.transform = "scale(0.75)";
      document.getElementById("bottom-right-effect").style.opacity = "0";
      document.getElementById("bottom-right-effect").style.transform = "scale(0.75)";
    }}
  >
    Book a Free Call
  </button>
</a>

      </div>

      <style>
        {`
          @media (max-width: 500px) {
            .w-full.max-w-6xl {
              padding: 2.5rem 1.5rem;
              border-radius: 1.5rem;
              margin: 1rem 0;
              padding-top:60px;
              padding-bottom:50px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            }
            .main-text {
              font-size: 2rem;
              line-height: 2.2rem;
              margin-bottom: 1.2rem;
            }
            .sub-text {
              font-size: 1rem;
              line-height: 1.2rem;
              margin-bottom: 1.5rem;
            }
            #top-left-effect,
            #bottom-right-effect {
              width: 70px;
              height: 70px;
              opacity: 0.8;
            }
          }
        `}
</style>

    </div>
  );
};

export default Banner;
