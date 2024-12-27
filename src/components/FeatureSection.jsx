import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import App from "../assets/Services/App-service.jpeg"
import UI from "../assets/Services/UI-services.jpeg"
import Web from "../assets/Services/Web-services.jpeg"
import RP from "../assets/Services/RP-service.jpeg"
import GD from "../assets/Services/GD-Services.jpeg"
import ML from "../assets/Services/ML-services.jpeg"

// Data for Cards
const cardsData = [
  {
    title: "Web Development",
    description: "We design and develop user-friendly websites.",
    image: Web,
    link: "/Services"
  },
  {
    title: "App Development",
    description: "Create seamless mobile applications for all platforms.",
    image: App,
    link: "/Services"
  },
  {
    title: "Machine Learning Models",
    description: "Develop intelligent ML solutions tailored to your needs.",
    image: ML,
    link: "/Services"
  },
  {
    title: "UI/UX Designs",
    description: "Craft user-centered designs that engage and delight.",
    image: UI,
    link: "/Services"
  },
  {
    title: "Research Papers",
    description: "Publish impactful research papers and white papers.",
    image: RP,
    link: "/Services"
  },
  {
    title: "Graphic Design",
    description: "Create visually striking graphics for branding and marketing.",
    image: GD,
    link: "/Services"
  },
];

// Card Component
const Card = ({ title, description, image, link, index }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} // Start hidden
      whileInView={{ opacity: 1 }} // Fade in when in view
      viewport={{ once: true }} // Trigger animation only once when in view
      transition={{
        duration: 1.25, // Fade-in duration
        delay: index * 0.25, // Stagger delay based on card index
      }}
      className="bg-[#ffffff0a] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
      onClick={handleNavigation}
    >
      <div className="h-56 sm:h-64 md:h-72 lg:h-64 xl:h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4 md:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-gray-400 text-sm md:text-base">{description}</p>
      </div>
    </motion.div>
  );
};

// FeatureSection Component with Scroll-triggered Fade-In Animation
const FeatureSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start hidden
      whileInView={{ opacity: 1 }} // Fade in when the section is in view
      viewport={{ once: true }} // Trigger animation only once
      transition={{ duration: 1 }} // Fade-in duration for the entire section
      className="min-h-screen bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-medium text-center text-white mb-6 leading-tight">
          What We Do, For You!
        </h1>
        <h2 className="text-lg md:text-xl text-center font-normal mb-10 italic">
          We specialize in providing expert services as per your needs.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              link={card.link}
              index={index} // Pass the index to stagger the animation
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureSection;
