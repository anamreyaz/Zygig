import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import background from "../assets/background.jpg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

// Animation Variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.02,
    backgroundColor: "transparent",
  },
  tap: {
    scale: 0.98,
  },
};

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={background}
          alt="Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#09090B]"></div>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </div>

      {/* Main Content with Parallax Effect */}
      <motion.div
        className="relative text-center z-10 px-4"
        style={{ y }}
      >
        {/* Heading */}
        <motion.h1
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="font-inter mt-16 text-center text-4xl sm:text-5xl md:text-6xl font-normal text-white leading-[1.2]"
        >
          Your Vision, Our Expertise
          <br />
          Together We Achieve More
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto pt-6 mb-12 leading-relaxed"
        >
          Zygig provides top-notch freelancing services tailored to your needs.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1.0 }}
        >
          {/* Book a Free Call Button */}
          <Link to="/BookaFreeCall">
            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className="relative px-8 py-4 w-full sm:w-auto bg-[rgba(238,234,234,0.14)] text-white border border-[rgba(255,255,255,0.1)] rounded-full font-medium"
            >
              <span className="relative z-10">Book a Free Call</span>
            </motion.button>
          </Link>

          {/* Why Choose Us Button */}
          <Link to="/WhyChooseUs">
            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className="relative px-8 py-4 w-full sm:w-auto bg-[rgba(238,234,234,0.14)] text-white border border-[rgba(255,255,255,0.1)] rounded-full font-medium"
            >
              <span className="relative z-10">Why Choose Us</span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
