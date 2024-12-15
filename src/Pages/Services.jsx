
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from "../assets/hero.png";
import backgroundImage from "../assets/Servicebg.jpg";

const ServicesPage = () => {
  const firstSectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleScrollToFirstSection = () => {
    firstSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Section Component with Alternating Layout
  const Section = ({ title, description, image, reverse }) => (
    <div
      data-aos="fade-up"
      className={`px-6 md:px-20 lg:px-40 flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } items-center gap-10`}
    >
      <div className="flex-1 text-center md:text-left hover:scale-105 ">
        <h2 className="text-4xl font-medium mb-4 text-white">{title}</h2>
        <p className="text-lg text-gray-400 italic">{description}</p>
      </div>
      <div className="flex-1">
        <img
          src={image}
          alt={title}
          className="w-full h-auto max-w-sm mx-auto rounded-md shadow-lg hover:scale-105 pt-1"
        />
      </div>
    </div>
  );

  return (
    <div>
      {/* Page Content with Gradient Background */}
      <div className="bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900">
      <div className="relative inset-0 bg-black bg-opacity-50" style={{
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

          {/* Navbar */}
         

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-7xl font-medium mb-5">What We Bring to the Table</h1>
            <h2 className="text-3xl font-normal mb-7 italic">Smart Solutions, Designed for You</h2>
            <p className="text-lg text-gray-300">
              Our tailored services combine creativity, expertise, and precision <br /> to meet your unique needs and deliver measurable results.
            </p>
          </div>

          {/* Scroll Down Indicator */}
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
            description="Build innovative, high-performing mobile applications designed to solve real-world problems. Our apps focus on usability, scalability, and seamless functionality, providing a flawless experience for your users and bringing your vision to life."
            image={Image}
            reverse={false}
          />
        </div>

        <Section
          title="Web Development"
          description="Create visually stunning, fully responsive websites that captivate users while ensuring robust performance. From e-commerce to corporate platforms, our web solutions deliver seamless navigation and impactful designs tailored to represent your brand effectively."
          image={Image}
          reverse={true}
        />

        <Section
          title="UI/UX Design"
          description="Design user experiences that are intuitive, engaging, and visually appealing. We focus on creating user-centered interfaces that enhance interaction, ensure accessibility, and leave a lasting impression, setting your product apart from competitors."
          image={Image}
          reverse={false}
        />

        <Section
          title="Graphic Design"
          description="Craft visually compelling designs that communicate your brand’s message effectively. From logos and marketing materials to social media graphics, our creative team delivers designs that are professional, eye-catching, and tailored to your target audience."
          image={Image}
          reverse={true}
        />

        <Section
          title="Machine Learning Models"
          description="Utilize the power of artificial intelligence to automate tasks, analyze data, and provide actionable insights. Our ML solutions are custom-built to meet your business needs and unlock new possibilities for growth and innovation."
          image={Image}
          reverse={false}
        />

        <Section
          title="Research Paper Writing"
          description="Deliver compelling, well-researched, and professionally written content. Whether it’s academic or business-focused, we ensure your ideas are presented clearly, concisely, and with precision to make a strong impact on your audience."
          image={Image}
          reverse={true}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
