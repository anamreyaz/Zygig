import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditionsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const termsSections = [
    {
      title: 'Acceptance of Terms',
      content:
        'By accessing or using Zygig, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.',
    },
    {
      title: 'User Responsibilities',
      content:
        'Users must provide accurate information when signing up and are solely responsible for maintaining the confidentiality of their account details. Misuse of our platform is strictly prohibited.',
    },
    {
      title: 'Prohibited Activities',
      content:
        'You agree not to engage in any activity that disrupts or harms the functionality of our platform, including but not limited to unauthorized access, spamming, or uploading malicious content.',
    },
    {
      title: 'Intellectual Property',
      content:
        'All content, trademarks, and intellectual property on Zygig are owned by us or licensed to us. You may not use or reproduce any content without prior written permission.',
    },
    {
      title: 'Limitation of Liability',
      content:
        'Zygig is not responsible for any direct, indirect, or consequential damages arising from your use of our platform. Use our services at your own risk.',
    },
    {
      title: 'Termination',
      content:
        'We reserve the right to suspend or terminate your account without notice if you violate these Terms and Conditions or engage in any activity deemed harmful to our platform.',
    },
    {
      title: 'Governing Law',
      content:
        'These Terms and Conditions shall be governed by and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law provisions.',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="min-h-screen px-4 sm:px-8 md:px-20 lg:px-40 py-20">
        {/* Header */}
        <header className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg sm:text-base text-gray-400 leading-relaxed">
            Please read these Terms and Conditions carefully before using Zygig.
            They govern your access to and use of our platform.
          </p>
        </header>

        {/* Terms Sections */}
        <div className="space-y-12">
          {termsSections.map((section, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:brightness-110 duration-500"
              data-aos="fade-up"
            >
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;
