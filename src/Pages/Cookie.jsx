import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CookiePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const policySections = [
    {
      title: 'What are Cookies?',
      content:
        'Cookies are small text files that are stored on your device when you visit a website. They help us enhance your browsing experience by remembering your preferences and providing relevant content.',
    },
    {
      title: 'Why We Use Cookies',
      content:
        'We use cookies to improve website functionality, analyze traffic, and personalize content. Cookies enable us to understand user behavior and make data-driven improvements to our services.',
    },
    {
      title: 'Types of Cookies We Use',
      content:
        'Essential Cookies ensure the website functions properly. Analytics Cookies help us measure performance and improve user experience. Advertising Cookies personalize ads based on your interests.',
    },
    {
      title: 'Managing Your Cookie Preferences',
      content:
        'You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect the functionality and user experience of our website.',
    },
    {
      title: 'Third-Party Cookies',
      content:
        'Some cookies are placed by third-party services that appear on our pages. We have no control over these cookies and recommend reviewing their cookie policies for more information.',
    },
    {
      title: 'Changes to this Policy',
      content:
        'We may update this cookie policy periodically. Any changes will be posted on this page, and we encourage you to review it regularly to stay informed about how we use cookies.',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-40 py-10 md:py-20">
        {/* Header */}
        <header className="text-center mb-16 max-w-4xl mx-auto" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Cookie Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Learn how Zygig uses cookies to enhance your experience and protect your privacy.
          </p>
        </header>

        {/* Policy Sections */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {policySections.map((section, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:brightness-110 duration-500"
              data-aos="fade-up"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.title}</h2>
              <p className="text-lg md:text-xl text-gray-300">{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CookiePage;
