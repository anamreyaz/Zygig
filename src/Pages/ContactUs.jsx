import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="min-h-screen px-6 sm:px-10 md:px-20 lg:px-40 py-10 md:py-20">
        {/* Header */}
        <header className="text-center mb-16 max-w-4xl mx-auto" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Have questions or need assistance? Connect with us, and we'll be happy to help.
            Your queries and feedback are invaluable to us.
          </p>
        </header>

        {/* Contact Details Section */}
        <div className="space-y-12 max-w-6xl mx-auto">
          <div
            className="p-6 sm:p-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:brightness-110 duration-500"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Contact Details</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Feel free to reach out to us via email, phone, or our social media platforms.
            </p>
            <ul className="space-y-4 text-lg md:text-xl text-gray-400">
              <li>
                <span className="font-bold text-white">Email:</span> zygigofficial@gmail.com
              </li>
              <li>
                <span className="font-bold text-white">Phone:</span> +91 98117 87038
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div
            className="p-6 sm:p-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:brightness-110 duration-500"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Us</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Have specific inquiries or want to collaborate? Click the button below to fill out our contact form.
            </p>
            <div className="text-center">
              <button
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
                onClick={() => window.open('https://forms.gle/AYVhptggHSYSwqLE6', '_blank')}
              >
                Fill Our Contact Form
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUsPage;
