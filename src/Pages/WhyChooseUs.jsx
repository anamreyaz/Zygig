import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WhyChooseUsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const reasons = [
    {
      title: "Expertise You Can Trust",
      description:
        "Our team of professionals brings years of experience in web and mobile development, design, and advanced technologies like AI and ML.",
      icon: "🌟",
    },
    {
      title: "Tailored Solutions",
      description:
        "We provide personalized services that align with your business goals, ensuring your unique needs are met with precision.",
      icon: "🛠️",
    },
    {
      title: "Commitment to Quality",
      description:
        "Every project is delivered with top-notch quality. We adhere to best practices and high standards, ensuring excellent results.",
      icon: "✅",
    },
    {
      title: "Transparent Communication",
      description:
        "We value clear communication. You'll always know the progress of your project, with opportunities to share feedback along the way.",
      icon: "💬",
    },
    {
      title: "Innovative Solutions",
      description:
        "We stay ahead of trends and technologies to bring you cutting-edge solutions, keeping your business competitive and forward-thinking.",
      icon: "🚀",
    },
    {
      title: "Timely Delivery",
      description:
        "We understand the importance of deadlines. Our team ensures that every project is completed on time without compromising quality.",
      icon: "⏱️",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <div className="text-center py-16 px-6 md:py-20" data-aos="fade-down">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Why Choose Us?</h1>
        <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Discover what sets us apart. Our unique approach, expertise, and commitment to excellence make us the perfect partner for your success.
        </p>
      </div>

      {/* Reasons Section */}
      <div className="py-12 px-6 md:px-16 lg:px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`p-8 rounded-3xl shadow-lg bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 hover:shadow-2xl transform transition-transform duration-500 ${
              index % 2 === 0 ? "hover:-translate-y-3" : "hover:translate-y-3"
            }`}
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`}
          >
            <div className="text-6xl mb-6 text-center">{reason.icon}</div>
            <h2 className="text-2xl font-semibold mb-4 text-center">{reason.title}</h2>
            <p className="text-gray-300 text-center leading-relaxed">{reason.description}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WhyChooseUsPage;
