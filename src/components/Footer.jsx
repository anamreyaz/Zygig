// import {  } from "../constants";
// import React from 'react';
// import { useScrollAnimation } from "./useScrollAnimation";
// // import { Twitter, Linkedin, Github } from 'lucide-react';

// const Footer = () => {
//   useScrollAnimation();
//   return (
    
//       <footer className="flex justify-between pl-8 mt-20 border-t md:max-w-4xl sm:max-w-3xl lg:max-w-6xl py-10 border-neutral-700 fade-up opacity-0 translate-y-10 transition-all duration-700 ease-out ">
//         {/* <div className="max-w-7xl mx-auto border"> */}
//           <div className="leftSide md:max-w-xs sm:max-w-xs lg:max-w-sm">
//             {/* Brand Section */}
//             <div className="space-y-4">
//             <img className="  -ml-2 h-20 w-96 invert  object-cover overflow-hidden rounded-lg" src="/src/assets/logotransparent.png" ></img>
//               {/* <div className="w-12 h-12 bg-[#00ff00]/10 rounded-lg flex items-center justify-center">
//                 <div className="w-8 h-6 border-2 border-[#00ff00] rounded-md"></div>
//               </div> */}
//               <p className="text-lg font-semibold text-center">
//                 14-in-1 browser extension developers and designers love.
//               </p>
//               <div className="flex space-x-4 justify-center gap-6">
//                 <a href="https://www.instagram.com/zygigofficial/" className="Instagram  text-gray-400 hover:text-white cursor-pointer">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg>
//                 </a>
//                 <a href="https://x.com/zygigofficial" className="Twitter pt-[1.5px]  text-gray-400 hover:text-white cursor-pointer">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z"></path></svg>
//                 </a>
//                 <a href="https://www.linkedin.com/company/zygig-official/" className="Linkedin text-gray-400 hover:text-white cursor-pointer">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>
//                 </a>
//                 <a href="https://www.facebook.com/profile.php?id=61567402440958" className="Facebook  text-gray-400 hover:text-white cursor-pointer">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M15.4024 21V14.0344H17.7347L18.0838 11.3265H15.4024V9.59765C15.4024 8.81364 15.62 8.27934 16.7443 8.27934L18.1783 8.27867V5.85676C17.9302 5.82382 17.0791 5.75006 16.0888 5.75006C14.0213 5.75006 12.606 7.01198 12.606 9.32952V11.3265H10.2677V14.0344H12.606V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15.4024Z"></path></svg>
//                 </a>
//               </div>
//             </div>
//             </div>
          
//           <div className="rightSide grid grid-cols-1 md:max-w-[340px] sm:max-w-[250px] lg:max-w-[450px] md:grid-cols-4 gap-44">
//             {/* Product Section */}
//             <div className="">
//               <h3 className="text-lg text-[17px] font-normal mb-4 underline decoration-yellow-500 decoration-2">Product</h3>
//               <ul className="space-y-3.5">
//                 <li className="font-light text-[13.5px] text-white opacity-60  hover:text-yellow-500 hover:opacity-90 hover:underline cursor-pointer">Features</li>
//                 <li className="font-light text-[13.5px] text-white opacity-60  hover:text-yellow-500 hover:opacity-90 hover:underline cursor-pointer">Demo</li>
//                 <li className="font-light text-[13.5px] text-white opacity-60  hover:text-yellow-500 hover:opacity-90 hover:underline cursor-pointer">Love</li>
//                 <li className="font-light text-[13.5px] text-white opacity-60  hover:text-yellow-500 hover:opacity-90 hover:underline cursor-pointer">Pricing</li>
//               </ul>
//             </div>

//             {/* Support Section */}
//             <div>
//               <h3 className="text-lg text-[17px] font-normal mb-4 underline decoration-yellow-500 decoration-2">Support</h3>
//               <ul className="space-y-3.5">
//                 <li className="font-light text-[13.5px] text-white opacity-60  hover:text-yellow-500 hover:opacity-90 hover:underline cursor-pointer">FAQs</li>
//                 <li className="font-light text-[13.5px] text-white opacity-60  hover:text-yellow-500 hover:opacity-90 hover:underline cursor-pointer">Devices</li>
//                 <li className="font-light text-[13.5px] text-white opacity-60  hover:text-yellow-500 hover:opacity-90 hover:underline cursor-pointer">Contact</li>
//                 <li className="font-light text-[13.5px] text-white opacity-60  hover:text-yellow-500 hover:opacity-90 hover:underline cursor-pointer">Creator</li>
//               </ul>
//             </div>
            
//             {/* Legal Section */}
//             <div>
//               <h3 className="text-lg text-[17px] font-normal mb-4 underline decoration-yellow-500 decoration-2">Legal</h3>
//               <ul className="space-y-3.5">
//                 <li className="font-light text-[13.5px] text-white opacity-60  hover:text-yellow-500 hover:opacity-90 hover:underline cursor-pointer">Privacy</li>
//                 <li className="font-light text-[13.5px] text-white opacity-60  hover:text-yellow-500 hover:opacity-90 hover:underline cursor-pointer">Terms</li>
//                 <li className="font-light text-[13.5px] text-white opacity-60  hover:text-yellow-500 hover:opacity-90 hover:underline cursor-pointer">Refund</li>
//                 <li className="font-light text-[13.5px] text-white opacity-60  hover:text-yellow-500 hover:opacity-90 hover:underline cursor-pointer">Cookie</li>
//               </ul>
//             </div>
//           {/* </div> */}
//         </div>
        
//         {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
//           <div>
//             <h3 className="text-md font-semibold mb-4">Resources</h3>
//             <ul className="space-y-2">
//               {resourcesLinks.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     className="text-neutral-300 hover:text-white"
//                   >
//                     {link.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-md font-semibold mb-4">Platform</h3>
//             <ul className="space-y-2">
//               {platformLinks.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     className="text-neutral-300 hover:text-white"
//                   >
//                     {link.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-md font-semibold mb-4">Community</h3>
//             <ul className="space-y-2">
//               {communityLinks.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     className="text-neutral-300 hover:text-white"
//                   >
//                     {link.text}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div> */}
//       </footer>
//   );
// };



// export default Footer;



import React from 'react';
import { useScrollAnimation } from "./useScrollAnimation";
import { InstagramIcon, TwitterIcon, LinkedinIcon, FacebookIcon } from "./SvgIcons";

const Footer = () => {
  useScrollAnimation();
  return (
    <footer className="flex justify-around pl-8 mt-20 border-t w-full py-10 border-gray-900 bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 shadow-2xl text-white hover:opacity-100 transition-all duration-500 ease-out fade-up opacity-0 translate-y-10">
      <div className="leftSide md:max-w-xs sm:max-w-xs lg:max-w-sm">
        <div className="space-y-4">
          <img
            className="h-20 w-96 invert object-cover overflow-hidden rounded-lg hover:scale-105 hover:rotate-2 transform transition-all duration-300"
            src="/src/assets/logotransparent.png"
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
              FAQs
            </li>
            <li className="font-light text-sm text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
              Devices
            </li>
            <li className="font-light text-sm text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
              Contact
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
              Privacy
            </li>
            <li className="font-light text-sm text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
              Terms
            </li>
            <li className="font-light text-sm text-white opacity-60 hover:text-gray-500 hover:scale-105 hover:opacity-90 hover:underline cursor-pointer transition-all duration-300">
              Refund
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
