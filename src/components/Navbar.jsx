import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Logo from "../assets/Logowhite.png";

const buttonVariants = {
  hover: {
    scale: 1.02,
    backgroundColor: "transparent",
  },
  tap: {
    scale: 0.98,
  },
};

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
    <nav className="relative top-0 z-50 pt-5 pb-3 lg:min-w-full backdrop-transparent-lg bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-transparent bg-opacity-5">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
             <img className="-ml-10 h-[50px] w-[240px] object-cover overflow-hidden rounded-lg" src={Logo} alt="Logo" />
             {/* <span className="text-xl tracking-tight">ZYGIG</span> */}
           </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex -ml-10 space-x-14 text-[17px]">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.href}
                  className="text-white hover:opacity-50 transition-opacity"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Motion Button */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.button
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
                className="relative px-10 py-3 bg-[rgba(238,234,234,0.14)] text-white border border-[rgba(255,255,255,0.1)] rounded-full font-medium"
              >
                <span className="relative z-10"><Link to="/HireUs">Hire Us</Link></span>
              </motion.button>
            </motion.div>
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

                {/* Mobile Motion Button */}
                <li className="pt-8">
                  <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <motion.button
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonVariants}
                      className="relative px-8 py-4 bg-[rgba(238,234,234,0.14)] text-white border border-[rgba(255,255,255,0.1)] rounded-full font-medium"
                      onClick={toggleNavbar}
                    >
                      <span className="relative z-10">Get Started Today!</span>
                    </motion.button>
                  </motion.div>
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

