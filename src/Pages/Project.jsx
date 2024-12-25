import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backgroundImage from "../assets/Projectsbg.jpg"; // Import the background image
import Humraah from "../assets/Projects Images/HumraahStore/Mockup2.jpg"
import am from "../assets/Projects Images/9amStore/Mockup2.jpg"
import BotBuddy from "../assets/Projects Images/BotBuddy/Mockup2.jpg"
import Mirage from "../assets/Projects Images/Mirage/Mockup2.jpg"
import RP from "../assets/Projects Images/ResearchPaper/Mockup1.jpg"
import ML from "../assets/Projects Images/MLmodel/Mockup2.jpg"

const projects = [
  {
    id: 1,
    name: "Humraah Store",
    description: "A responsive e-commerce fashion website offering a sleek design and user-friendly interface for seamless shopping.",
    imageUrl:Humraah,
    link: "https://humraahstore.com/?srsltid=AfmBOoq1I1mBX3kOFFx6O4oh3vFaAnRuOQUOm1yxb0zSP-EU_yeRi6HQ",
  },
  {
    id: 2,
    name: "9am",
    description: "A comprehensive e-commerce store website featuring multiple payment gateways for convenient and secure transactions.",
    imageUrl: am,
    link: "https://9am.co.in/?srsltid=AfmBOopyBt-NqeSTZ2LnVlixfnGf9a964CC7TGUGBz3L3uUbn-5gpyHg",
  },
  {
    id: 3,
    name: "BotBuddy",
    description: "A fully personalized Al chatbot app for Android and iOS with a stunning Ul and intelligent responses.",
    imageUrl: BotBuddy,
    link: "https://play.google.com/store/apps/details?id=com.ethix.botbuddy",
  },
  {
    id: 4,
    name: "Mirage",
    description: "A personalized wallpaper app offering unlimited, high-quality wallpapers to customize and enhance device aesthetics.",
    imageUrl: Mirage,
    link: "https://play.google.com/store/apps/details?id=com.ethix.mirage",
  },
  {
    id: 5,
    name: "Man of the Match Analysis",
    description: "A feedback-based analytical approach identifying key factors influencing the selection of \"Man of the Match\" awards.",
    imageUrl: RP,
    link: "https://ieeexplore.ieee.org/document/10629539",
  },
  {
    id: 6,
    name: "Diabetic Retinopathy Detection",
    description: "An Al-powered model for detecting and classifying diabetic retinopathy using advanced retinal image analysis.",
    imageUrl: ML,
    link: "https://github.com/anamreyaz/Diabetic-Retinopathy-Detection",
  },
];

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      {/* Page Title Section with Navbar */}
      <div
        className="relative bg-cover bg-center shadow-lg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>

        {/* Navbar */}
        <div className="relative z-10">
          <Navbar />
        </div>

        {/* Title Content */}
        <div className="relative z-10 text-center py-24" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-medium uppercase tracking-wide">
            Our Recent{" "}
            <span className="text-blue-500 drop-shadow-[0_0px_10px_rgba(59,130,246,0.8)]">
              Projects
            </span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg">
            Building Success, One Project at a Time.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            data-aos="fade-up"
          >
            {/* Background Image with hover scale */}
            <div
              className="w-full h-72 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            ></div>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <div>
                <h3 className="text-3xl font-bold">{project.name}</h3>
                <p className="text-lg text-gray-300 mt-2">
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectsPage;
