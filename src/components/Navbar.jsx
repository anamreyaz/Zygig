import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logotransparent from "../assets/logotransparent.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileDrawerOpen]);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/Services" },
    { label: "Projects", href: "/Projects" },
    { label: "Testimonial", href: "/Testimonial" }
  ];

  return (
    <nav className="sticky top-0 z-50 py-3 lg:max-w-full backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
             <img className="-ml-20 h-10 w-[330px] invert  object-cover overflow-hidden rounded-lg" src={logotransparent} alt="Logo" />
             {/* <span className="text-xl tracking-tight">ZYGIG</span> */}
           </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex -ml-36 space-x-14 text-[17px]">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.href}
                  className="text-white opacity-60 hover:opacity-100 transition-opacity"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Hire Us Button */}
          <div className="hidden lg:block">
            <a 
              href="#" 
              className="border border-yellow-500 px-4 py-2 rounded-lg flex items-center gap-2 text-white hover:bg-yellow-500 hover:text-black transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                width="20" 
                height="20" 
                fill="currentColor"
                className="flex-shrink-0"
              >
                <path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM14 11V13H16V11H14ZM8 11V13H10V11H8Z" />
              </svg>
              Hire Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleNavbar}
            className="lg:hidden p-2 text-white z-50 relative"
            aria-label="Toggle mobile menu"
          >
            {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileDrawerOpen && (
          <div className="lg:hidden opacity-70 z-40 flex flex-col">
            {/* Centered Content Container */}
            <div className="flex flex-col items-center justify-center m-5">
              {/* Mobile Navigation Links */}
              <ul className="flex flex-col items-center space-y-3">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.href} 
                      className="text-white text-2xl opacity-60 hover:opacity-100 transition-opacity"
                      onClick={toggleNavbar}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}

                {/* Mobile Hire Us Button */}
                <li className="pt-8">
                  <a 
                    href="#" 
                    className="border border-yellow-500 px-8 py-3 rounded-lg flex items-center gap-2 text-white hover:bg-yellow-500 hover:text-black transition-colors"
                    onClick={toggleNavbar}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20" 
                      fill="currentColor"
                      className="flex-shrink-0"
                    >
                      <path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM14 11V13H16V11H14ZM8 11V13H10V11H8Z" />
                    </svg>
                    Hire Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import logotransparent from "../assets/logotransparent.png";
// // import { navItems } from "../constants";
// import { Link } from 'react-router-dom';


// const Navbar = () => {
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

//   const toggleNavbar = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };

//   return (
//     <nav className="sticky top-0 z-50 py-3 lg:max-w-full backdrop-blur-lg border-b border-neutral-700/80">
//       <div className="container px-4 mx-auto relative lg:text-sm">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center flex-shrink-0">
//             <img className="-ml-20 h-10 w-[330px] invert  object-cover overflow-hidden rounded-lg" src={logotransparent} alt="Logo" />
//             {/* <span className="text-xl tracking-tight">ZYGIG</span> */}
//           </div>
//           <ul className="hidden lg:flex -ml-20 space-x-12 text-[17px] ">
//             <li className="text-white opacity-60 hover:opacity-100"><a href="/" >Home</a></li>
//             <li className="text-white opacity-60 hover:opacity-100"><a href="/Services" >Services</a> </li>
//             <li className="text-white opacity-60 hover:opacity-100"><a href="/Projects" >Projects</a></li>
//             <li className="text-white opacity-60 hover:opacity-100"><a href="/Testimonials" >Testimonials</a></li>
//             {/* {navItems.map((item, index) => ( */}
//               {/* <li className="hover:opacity-100" key={index}> */}
//                 {/* <a href={item.href}>{item.label}</a> */}
//                 {/* <Link  to={item.href}>{item.label}</Link> */}
//               {/* </li> */}
//             {/* ))} */}
//           </ul>

//           <div className="hidden lg:flex justify-center space-x-12 items-center">

//             {/* SIGN IN BUTTON */}

//             {/* <a href="#" className="py-2 px-3 border rounded-md">
//               Sign In
//             </a> */}
//             <a href="#" className="border border-yellow-500 px-4 mx-3 rounded-lg flex justify-center gap-2 items-center min-w-36 min-h-10">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#f59e0b"><path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM14 11V13H16V11H14ZM8 11V13H10V11H8Z"></path></svg>
//           Hire Us
//         </a>
//           </div>
//           <div className="lg:hidden md:flex flex-col justify-end">
//             <button onClick={toggleNavbar}>
//               {mobileDrawerOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//         {mobileDrawerOpen && (
//           <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
//             <ul>
//               {navItems.map((item, index) => (
//                 <li key={index} className="py-4">
//                   <a href={item.href}>{item.label}</a>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex space-x-6">
//               {/* <a href="#" className="py-2 px-3 border rounded-md">
//                 Sign In
//               </a> */}
//               <a
//                 href="#"
//                 className="py-2 px-3 rounded-md "
//               >
//                 Contact Us
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
