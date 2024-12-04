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
        'Zygig is a forward-thinking company dedicated to transforming ideas into innovative solutions. With a team of passionate professionals, we strive to bridge the gap between technology and business success. Our commitment to excellence drives us to deliver exceptional products and services tailored to your needs.',
    },
    {
      title: 'Our Mission',
      content:
        'To empower businesses and individuals by providing cutting-edge solutions that enhance efficiency, foster innovation, and drive growth. We aim to be a trusted partner in your journey to success, leveraging technology to unlock new possibilities.',
    },
    {
      title: 'Our Vision',
      content:
        'At Zygig, we envision a world where technology seamlessly integrates into every aspect of life, simplifying processes, and creating opportunities for a better tomorrow. We aspire to be at the forefront of this transformation, leading with creativity and expertise.',
    },
    {
      title: 'Our Values',
      content:
        'Integrity, innovation, and customer-centricity are the core values that define Zygig. We believe in building long-term relationships with our clients based on trust and delivering solutions that exceed expectations.',
    },
    {
      title: 'Our Team',
      content:
        'Our team consists of experienced professionals, creative thinkers, and problem solvers who bring diverse perspectives to the table. Together, we work collaboratively to deliver solutions that make a meaningful impact.',
    },
    {
      title: 'Why Choose Us?',
      content:
        'With a focus on quality, innovation, and customer satisfaction, Zygig stands out as a reliable partner for all your business needs. Whether it’s developing cutting-edge software, designing impactful strategies, or providing unmatched support, we’ve got you covered.',
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
            Discover who we are, what drives us, and why we’re passionate about creating impactful solutions for the future.
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
