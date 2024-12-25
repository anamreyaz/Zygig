import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from "../assets/hero.png";
import UI from "../assets/Services/UI-services.jpeg"
import GD from "../assets/Services/GD-Services.jpeg"
import ML from "../assets/Services/ML-services.jpeg"
import App from "../assets/Services/App-service.jpeg"
import Web from "../assets/Services/Web-services.jpeg"
import RP from "../assets/Services/RP-service.jpeg"
import backgroundImage from "../assets/Servicebg.jpg";
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const firstSectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleScrollToFirstSection = () => {
    firstSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateToProjects = () => {
    navigate('/Projects');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);  // Added slight delay to ensure scroll triggers after navigation
  };

  const Section = ({ title, description, image, reverse }) => (
    <div
      data-aos="fade-up"
      className={`px-6 md:px-20 lg:px-40 flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center gap-10`}
    >
      <div className="flex-1 text-center md:text-left bg-gradient-to-r from-[#1f2937] to-[#111827] p-10 rounded-2xl shadow-xl bg-opacity-90">
        <h2 className="text-4xl font-medium mb-4 text-white">{title}</h2>
        <p className="text-lg text-gray-300 italic mb-6">{description}</p>
        
        {/* Centered Projects Button */}
        <div className="flex justify-center">
          <button
            onClick={handleNavigateToProjects}
            className="inline-block px-8 py-3 border border-white text-white bg-transparent font-medium rounded-md hover:scale-105 hover:bg-white hover:text-black transition-transform duration-300"
          >
            View Projects
          </button>
        </div>
      </div>
      <div className="flex-1 relative my-24">
        <img
          src={image}
          alt={title}
          className="w-full h-auto max-w-sm mx-auto rounded-xl shadow-lg hover:scale-105 p-1"
        />
        {/* Blurry Edge Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1128] rounded-md blur-xl opacity-50 pointer-events-none"></div>
      </div>
    </div>
  );

  return (
    <div>
      {/* Page Content with Gradient Background */}
      <div className="bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900">
        <div className="relative inset-0 bg-black bg-opacity-60" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <div className="absolute top-0 left-0 w-full z-20">
            <Navbar />
          </div>

          {/* Header Section */}
          <header
            className="h-screen flex flex-col justify-center items-center text-white text-center relative"
            data-aos="fade-up"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 blur-xl"></div>

            <div className="relative z-10 p-6 bg-black bg-opacity-40 rounded-xl shadow-2xl">
              <h1 className="text-7xl font-medium mb-5">What We Do, For You!</h1>
              <h2 className="text-xl font-normal mb-7 italic">
                We specialize in providing expert services as per your needs
              </h2>
              <p className="text-lg text-gray-300">
                Our services are designed to provide effective, customized <br /> solutions that align with your goals and vision.
              </p>
            </div>

            <button
              onClick={handleScrollToFirstSection}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-300 hover:text-gray-400 hover:underline p-2 rounded transition duration-300"
            >
              <span className="mb-2">Scroll Down</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 animate-bounce"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </header>
        </div>

        {/* Sections */}
        <div ref={firstSectionRef}>
          <Section
            title="App Development"
            description="We create easy-to-use, high-quality mobile apps designed specifically for your needs. Whether for iOS or Android, we focus on delivering smooth and engaging user experiences that people will enjoy."
            image={App}
            reverse={false}
          />
        </div>

        <Section
          title="Web Development"
          description="We design and build modern, responsive websites that look great and work perfectly on all devices. Let your website leave a strong impression and help you grow your online presence."
          image={Web}
          reverse={true}
        />

        <Section
          title="UI/UX Design"
          description="We design visually appealing and user-friendly interfaces that improve user experiences. From planning wireframes to creating prototypes, we ensure your product looks good and works even better."
          image={UI}
          reverse={false}
        />

        <Section
          title="Graphic Design"
          description="Craft visually compelling designs that communicate your brand’s message effectively."
          image={GD}
          reverse={true}
        />

        <Section
          title="Machine Learning Models"
          description="We develop smart solutions using AI technology."
          image={ML}
          reverse={false}
        />

        <Section
          title="Research Paper Writing"
          description="We offer professional, well-researched writing services for academic and business needs."
          image={RP}
          reverse={true}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
