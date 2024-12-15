import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import backgroundImage from "../assets/Projectsbg.jpg"; // Import the background image

const projects = [
  {
    id: 1,
    name: "Project One",
    description: "A stunning web development project showcasing modern UI/UX.",
    imageUrl:
      "https://framerusercontent.com/images/kNtAHR1sRRHlLsm57mJnIHt8s.png?scale-down-to=1024",
    link: "https://clerk-template.framer.website/portfolio",
  },
  {
    id: 2,
    name: "Project Two",
    description: "Innovative design combined with a powerful backend.",
    imageUrl:
      "https://framerusercontent.com/images/kNtAHR1sRRHlLsm57mJnIHt8s.png?scale-down-to=1024",
    link: "https://clerk-template.framer.website/portfolio",
  },
  {
    id: 3,
    name: "Project Three",
    description: "An outstanding digital product with exceptional performance.",
    imageUrl:
      "https://framerusercontent.com/images/kNtAHR1sRRHlLsm57mJnIHt8s.png?scale-down-to=1024",
    link: "https://clerk-template.framer.website/portfolio",
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
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wide">
            Recent{" "}
            <span className="text-blue-500 drop-shadow-[0_0px_10px_rgba(59,130,246,0.8)]">
              Projects
            </span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg">
            Explore our recent projects and see our team's work in action.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
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
