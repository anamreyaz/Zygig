import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Humraah1 from "../assets/Projects Images/HumraahStore/Mockup1.jpg";
import Humraah2 from "../assets/Projects Images/HumraahStore/Image.jpg";
import am1 from "../assets/Projects Images/9amStore/Mockup1.jpg";
import am2 from "../assets/Projects Images/9amStore/Image.jpg";
import BotBuddy1 from "../assets/Projects Images/BotBuddy/Mockup1.jpg";
import BotBuddy2 from "../assets/Projects Images/BotBuddy/Image3.jpg";
import Mirage1 from "../assets/Projects Images/Mirage/Mockup1.jpg";
import Mirage2 from "../assets/Projects Images/Mirage/Image1.jpg";
import RP1 from "../assets/Projects Images/ResearchPaper/Mockup2.jpg";
import RP2 from "../assets/Projects Images/ResearchPaper/Image.png";
import ML1 from "../assets/Projects Images/MLmodel/Mockup1.jpg";
import ML2 from "../assets/Projects Images/MLmodel/Image.png";

const projects = [
  {
    id: 1,
    name: "Humraah Store",
    description:
      "A responsive e-commerce fashion website offering a sleek design and user-friendly interface for seamless shopping.",
    imageUrl: Humraah1,
    hoverImageUrl: Humraah2,
    link: "https://humraahstore.com/?srsltid=AfmBOoq1I1mBX3kOFFx6O4oh3vFaAnRuOQUOm1yxb0zSP-EU_yeRi6HQ",
  },
  {
    id: 2,
    name: "9am",
    description:
      "A comprehensive e-commerce store website featuring multiple payment gateways for convenient and secure transactions.",
    imageUrl: am1,
    hoverImageUrl: am2,
    link: "https://9am.co.in/?srsltid=AfmBOopyBt-NqeSTZ2LnVlixfnGf9a964CC7TGUGBz3L3uUbn-5gpyHg",
  },
  {
    id: 3,
    name: "BotBuddy",
    description:
      "A fully personalized Al chatbot app for Android and iOS with a stunning Ul and intelligent responses.",
    imageUrl: BotBuddy1,
    hoverImageUrl: BotBuddy2,
    link: "https://play.google.com/store/apps/details?id=com.ethix.botbuddy",
  },
  {
    id: 4,
    name: "Mirage",
    description:
      "A personalized wallpaper app offering unlimited, high-quality wallpapers to customize and enhance device aesthetics.",
    imageUrl: Mirage1,
    hoverImageUrl: Mirage2,
    link: "https://play.google.com/store/apps/details?id=com.ethix.mirage",
  },
  {
    id: 5,
    name: "Man of the Match Analysis",
    description:
      'A feedback-based analytical approach identifying key factors influencing the selection of "Man of the Match" awards.',
    imageUrl: RP1,
    hoverImageUrl: RP2,
    link: "https://ieeexplore.ieee.org/document/10629539",
  },
  {
    id: 6,
    name: "Diabetic Retinopathy Detection",
    description:
      "An Al-powered model for detecting and classifying diabetic retinopathy using advanced retinal image analysis.",
    imageUrl: ML1,
    hoverImageUrl: ML2,
    link: "https://github.com/anamreyaz/Diabetic-Retinopathy-Detection",
  },
];

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="text-white min-h-screen px-6 lg:px-16">
      {/* Page Title Section */}
      <div className="relative bg-cover bg-center shadow-lg">
        <div
          className="relative z-10 text-center pt-36 pb-10"
          data-aos="fade-up"
        >
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
            data-aos="fade-up"
          >
            {/* Background Image with hover effect */}
            <div
              className="w-full h-64 sm:h-72 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url(${project.imageUrl})`,
              }}
            >
              {/* Hover Image Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${project.hoverImageUrl})`,
                }}
              ></div>
            </div>

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
    </div>
  );
};

export default ProjectsSection;
