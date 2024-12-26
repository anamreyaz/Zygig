
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { InstagramIcon, TwitterIcon, LinkedinIcon, FacebookIcon } from "./SvgIcons";
// import Logo from "../assets/Logowhite.png";
// import { useScrollAnimation } from "./useScrollAnimation";

// const Footer = () => {
//   const { pathname } = useLocation();

//   const scrollToTop = () => {
//     window.scrollTo(0, 0); // Scrolls to the top of the page
//   };
//   useScrollAnimation();
//   return (
//     <footer className="flex justify-evenly pl-8 mt-20 border-t w-full py-10 border-gray-900 bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 shadow-2xl text-white hover:opacity-100 transition-all duration-500 ease-out fade-up opacity-0 translate-y-10">
//       <div className="leftSide md:max-w-xs sm:max-w-xs lg:max-w-md">
//         <div className="flex flex-col justify-center items-center space-y-4 -mt-2">
//         <Link to="/" onClick={scrollToTop}>
//           <img
//             className="h-20 w-64 object-cover overflow-hidden rounded-lg hover:scale-105 hover:rotate-2 transform transition-all duration-300"
//             src={Logo}
//             alt="Zygig Logo"
//           />
//           </Link>
//           <p className=" font-semibold text-center hover:text-gray-500 transition-all duration-300">
//           Your Vision, Our Expertise, Together We Achieve More
//           </p>
//           <div className="flex space-x-4 justify-center gap-6">
//             <a
//               href="https://www.instagram.com/zygigofficial/"
//               className="Instagram text-gray-400 hover:text-gray-600 hover:scale-110 transform transition-all duration-300 cursor-pointer"
//             >
//               <InstagramIcon />
//             </a>
//             <a
//               href="https://x.com/zygigofficial"
//               className="Twitter pt-[1.5px] text-gray-400 hover:text-gray-600 hover:scale-110 transform transition-all duration-300 cursor-pointer"
//             >
//               <TwitterIcon />
//             </a>
//             <a
//               href="https://www.linkedin.com/company/zygig-official/"
//               className="Linkedin text-gray-400 hover:text-gray-600 hover:scale-110 transform transition-all duration-300 cursor-pointer"
//             >
//               <LinkedinIcon />
//             </a>
//             <a
//               href="https://www.facebook.com/profile.php?id=61567402440958"
//               className="Facebook text-gray-400 hover:text-gray-600 hover:scale-110 transform transition-all duration-300 cursor-pointer"
//             >
//               <FacebookIcon />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="rightSide grid grid-cols-1 md:max-w-[340px] sm:max-w-[250px] lg:max-w-[500px] md:grid-cols-4 gap-36">
//         <div className="w-[150px]">
//           <h3 className="text-xl font-normal mb-4 underline decoration-gray-500 decoration-2">
//             Product
//           </h3>
//           <ul className="space-y-5 text-base italic">
//             <li className="font-light text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
//               <Link to="/Services" onClick={scrollToTop}>
//                 Services
//               </Link>
//             </li>
//             <li className="font-light text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
//               <Link to="/Projects" onClick={scrollToTop}>
//                 Projects
//               </Link>
//             </li>
//             <li className="font-light text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
//               <Link to="/Testimonial" onClick={scrollToTop}>
//                 Testimonials
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="w-[150px]">
//           <h3 className="text-xl font-normal mb-4 underline decoration-gray-500 decoration-2">
//             Support
//           </h3>
//           <ul className="space-y-5 text-base italic">
//             <li className="font-light text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
//               <Link to="/AboutUs" onClick={scrollToTop}>
//                 About Us
//               </Link>
//             </li>
//             <li className="font-light text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
//               <Link to="/FAQs" onClick={scrollToTop}>
//                 FAQs
//               </Link>
//             </li>
//             <li className="font-light text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
//               <Link to="/ContactUs" onClick={scrollToTop}>
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="w-[150px]">
//           <h3 className="text-xl font-normal mb-4 underline decoration-gray-500 decoration-2">
//             Legal
//           </h3>
//           <ul className="space-y-5 text-base italic">
//             <li className="font-light text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
//               <Link to="/Privacy" onClick={scrollToTop}>
//                 Privacy
//               </Link>
//             </li>
//             <li className="font-light text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
//               <Link to="/Terms" onClick={scrollToTop}>
//                 Terms
//               </Link>
//             </li>
//             <li className="font-light text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
//               <Link to="/Cookie" onClick={scrollToTop}>
//                 Cookie
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import { InstagramIcon, TwitterIcon, LinkedinIcon, FacebookIcon } from "./SvgIcons";
import Logo from "../assets/Logowhite.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="flex justify-evenly pl-8 mt-20 border-t w-full py-10 border-gray-900 bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 shadow-2xl text-white transition-all duration-500 ease-out fade-up translate-y-10">
      
      {/* Left Section (Logo and Socials) */}
      <div className="leftSide md:max-w-xs sm:max-w-xs lg:max-w-md">
        <div className="flex flex-col justify-center items-center space-y-4 -mt-2">
          <Link to="/" onClick={scrollToTop}>
            <img
              className="h-20 w-64 object-cover overflow-hidden rounded-lg hover:scale-105 hover:rotate-2 transform transition-all duration-300"
              src={Logo}
              alt="Zygig Logo"
            />
          </Link>
          <p className="font-semibold text-center hover:text-gray-500 transition-all duration-300">
            Your Vision, Our Expertise, Together We Achieve More
          </p>
          <div className="flex space-x-4 justify-center gap-6">
            <a
              href="https://www.instagram.com/zygigofficial/"
              className="text-gray-400 hover:text-gray-600 hover:scale-110 transform transition-all duration-300 cursor-pointer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://x.com/zygigofficial"
              className="text-gray-400 hover:text-gray-600 hover:scale-110 transform transition-all duration-300 cursor-pointer"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/zygig-official/"
              className="text-gray-400 hover:text-gray-600 hover:scale-110 transform transition-all duration-300 cursor-pointer"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61567402440958"
              className="text-gray-400 hover:text-gray-600 hover:scale-110 transform transition-all duration-300 cursor-pointer"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section (Links and Navigation) */}
      <div className="rightSide grid grid-cols-1 md:max-w-[340px] sm:max-w-[250px] lg:max-w-[500px] md:grid-cols-4 gap-36">
        <div className="w-[150px]">
          <h3 className="text-xl font-normal mb-4 underline decoration-gray-500 decoration-2">
            Product
          </h3>
          <ul className="space-y-5 text-base italic">
            <li>
              <Link to="/Services" onClick={scrollToTop} className="hover:text-gray-500 transition-all duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/Projects" onClick={scrollToTop} className="hover:text-gray-500 transition-all duration-300">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/Testimonial" onClick={scrollToTop} className="hover:text-gray-500 transition-all duration-300">
                Testimonials
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-[150px]">
          <h3 className="text-xl font-normal mb-4 underline decoration-gray-500 decoration-2">
            Support
          </h3>
          <ul className="space-y-5 text-base italic">
            <li>
              <Link to="/AboutUs" onClick={scrollToTop} className="hover:text-gray-500 transition-all duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/FAQs" onClick={scrollToTop} className="hover:text-gray-500 transition-all duration-300">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/ContactUs" onClick={scrollToTop} className="hover:text-gray-500 transition-all duration-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-[150px]">
          <h3 className="text-xl font-normal mb-4 underline decoration-gray-500 decoration-2">
            Legal
          </h3>
          <ul className="space-y-5 text-base italic">
            <li>
              <Link to="/Privacy" onClick={scrollToTop} className="hover:text-gray-500 transition-all duration-300">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/Terms" onClick={scrollToTop} className="hover:text-gray-500 transition-all duration-300">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/Cookie" onClick={scrollToTop} className="hover:text-gray-500 transition-all duration-300">
                Cookie
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile CSS */}
      <style>
        {`
          @media (max-width: 500px) {
            footer {
              flex-direction: column;
              text-align: center;
              padding: 2rem 0.5rem;
              justify-content: center;
            }
            .leftSide, .rightSide {
              display: flex;
              flex-direction: row;
              align-items: center;
            }
            .rightSide {
              margin-top: 3rem;
              gap: 1rem;
            }
            img {
              width: 160px;
            }
            .space-y-5 > li {
              margin-bottom: 1rem;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
