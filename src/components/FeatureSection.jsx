import React from "react";
import { motion } from "framer-motion";
import App from "../assets/Services/App-home.jpg"
import UI from "../assets/Services/UI-home.jpg"
import Web from "../assets/Services/Web-home.jpg"
import RP from "../assets/Services/RP-home.jpg"
import GD from "../assets/Services/GD-home.jpg"
import ML from "../assets/Services/ML-home.jpeg"

// Data for Cards
const cardsData = [
  {
    title: "Web Development",
    description: "We design and develop user-friendly.",
    image: Web,
  },
  {
    title: "App Development",
    description: "Create seamless mobile applications for all platforms.",
    image: App,
  },
  {
    title: "Machine Learning Models",
    description: "Develop intelligent ML solutions tailored to your needs.",
    image: ML ,
  },
  {
    title: "UI/UX Designs",
    description: "Craft user-centered designs that engage and delight.",
    image: UI,
  },
  {
    title: "Research Papers",
    description: "Publish impactful research papers and white papers.",
    image: RP,
  },
  {
    title: "Graphic Design",
    description: "Create visually striking graphics for branding and marketing.",
    image: GD ,
  },
];

// Card Component
const Card = ({ title, description, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start hidden
      whileInView={{ opacity: 1 }} // Fade in when in view
      viewport={{ once: true }} // Trigger animation only once when in view
      transition={{
        duration: 1.25, // Fade-in duration
        delay: index * 0.25, // Stagger delay based on card index
      }}
      className="bg-[#ffffff0a] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
    >
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-gray-400">{description}</p>
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
      <div className="max-w-8xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-medium text-center text-white mb-4">
          What We Do, For You!
        </h1>
        <h2 className="text-xl text-center font-normal mb-10 italic">We specialize in providing expert services as per your needs.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              index={index} // Pass the index to stagger the animation
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureSection;