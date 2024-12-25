import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      title: 'Who We Are',
      content:
        'Zygig is a forward thinking company focused on turning ideas into creative solutions. Our team of passionate professionals works to connect technology with business success. We are committed to delivering high quality products and services designed to meet your specific needs..',
    },
    {
      title: 'Our Mission',
      content:
        'Our mission is to help businesses and individuals grow by offering innovative solutions that improve efficiency, encourage creativity, and drive progress. We aim to be your trusted partner, using technology to open new opportunities for success',
    },
    {
      title: 'Our Vision',
      content:
        'At Zygig, we see a world where technology is a part of everyday life, making tasks easier and creating new possibilities for a better future. We want to lead this change with creativity and expertise, providing solutions that help everyone thrive.',
    },
    {
      title: 'Our Values',
      content:
        'Our core values are integrity, innovation, and customer centricity. We believe in being honest and trustworthy, consistently seeking creative solutions, and focusing on our clients needs and goals. By delivering results that exceed expectations, we strive to build long-term relationships with our clients.',
    },
    {
      title: 'Our Team',
      content:
        'Our team is made up of experienced professionals, creative minds, and problem solvers who bring fresh ideas. We work together to create solutions that make a real difference for our clients.',
    },
    {
      title: 'Why Choose Us?',
      content:
        'Zygig stands out because we focus on quality, creativity, and customer satisfaction. Whether you need software development, strategic planning, or ongoing support, we are here to help your business succeed.',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="min-h-screen px-6 md:px-20 lg:px-40 py-20">
        {/* Header */}
        <header className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg text-gray-400">
            Your Success is our priority. We bring together creativity, technology <br/> and strategy to deliver solutions that truly make a difference.
          </p>
        </header>

        {/* About Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:brightness-110 duration-500"
              data-aos="fade-up"
            >
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-300 text-lg">{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;
