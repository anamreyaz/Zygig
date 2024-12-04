import React from "react";
import { motion } from "framer-motion";

// Data for Cards
const cardsData = [
  {
    title: "Web Development",
    description: "Build responsive websites and interactive web applications.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "App Development",
    description: "Create seamless mobile applications for all platforms.",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Machine Learning Models",
    description: "Develop intelligent ML solutions tailored to your needs.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "UI/UX Designs",
    description: "Craft user-centered designs that engage and delight.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Research Papers",
    description: "Publish impactful research papers and white papers.",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Graphic Design",
    description: "Create visually striking graphics for branding and marketing.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
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
      <div className="h-48 overflow-hidden">
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
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-medium text-center text-white mb-12">
          The Services We Provide
        </h1>

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









// import { features } from "../constants";
// import CardGrid from "./CardGrid";
// import { useScrollAnimation } from "./useScrollAnimation";

// const FeatureSection = () => {
//   useScrollAnimation()
//   return (
//     <div className="relative -mt-44 border-b border-neutral-800 min-h-[800px] fade-up opacity-0 translate-y-10 transition-all duration-700 ease-out">
//       <div className="text-center">
//         <span className="font-semibold bg-neutral-900 text-2xl sm:text-3xl lg:text-4xl mt-10 lg:mt-20 tracking-wide text-yellow-500 rounded-full h-6 px-10 py-2 uppercase">
//         Services we provide
//         </span>
//         <h2 className="font-euclid mt-5 text-lg text-center text-white-500 opacity-75 min-w-xl flex justify-center items-center px-64">
//         Stop wasting your time on tedious debugging with DevTools and experience the ease with SuperDev Pro.
//         </h2>
//       </div>


//       <div>
//       < CardGrid/>
//       </div>




      {/* <div className="cards max-w-6xl">
        <div className=" mx-auto p-6 bg-[#1c1c1f] rounded-3xl shadow-xl"> */}
        {/* Card Content */}
          {/* <h2 className="text-4xl font-bold text-white mb-4">Edit Text in Real-time</h2> 
          <p className="text-gray-300 text-lg mb-8">
          Need to edit the text on a website in real-time? Edit it on the 
          fly as if you are typing in a document, easy peasy!
          </p> */}
        {/* Image Container */}
          {/* <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-orange-400 via-blue-500 to-purple-600 p-[2px]">
            <div className="relative w-full aspect-[16/9] bg-[#1c1c1f] rounded-2xl overflow-hidden">
              <img src="/path/to/your-screenshot.jpg" alt="Real-time text editor interface" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div> */}
      
      {/* <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    // </div>
  // );
// };

// export default FeatureSection;
