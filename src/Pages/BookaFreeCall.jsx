import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookFreeCallPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="min-h-screen px-6 sm:px-12 md:px-20 lg:px-40 py-10 md:py-20">
        {/* Header */}
        <header className="text-center mb-16 max-w-4xl mx-auto" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug">
            Book a Free Call
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Have a project in mind? Let’s discuss how we can help you achieve your goals. 
            Book a free call with us to explore possibilities.
          </p>
        </header>

        {/* Why Book a Call Section */}
        <div className="space-y-12 max-w-6xl mx-auto">
          <div
            className="p-6 sm:p-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:brightness-110 duration-500"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Book a Call?</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              A free call allows us to understand your needs, brainstorm ideas, and provide personalized insights for your project. 
              Here’s what we offer during the call:
            </p>
            <ul className="space-y-4 text-lg md:text-xl text-gray-400 list-disc pl-6">
              <li>Discuss project requirements and objectives.</li>
              <li>Explore tailored solutions for your business needs.</li>
              <li>Get insights into our process and expertise.</li>
              <li>Receive a roadmap for your project execution.</li>
              <li>Ask questions and clarify your doubts.</li>
            </ul>
          </div>

          {/* Call Booking Section */}
          <div
            className="p-6 sm:p-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:brightness-110 duration-500"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Get Started</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Ready to take the next step? Click the button below to schedule your free call with us. 
              We’re excited to hear from you and bring your ideas to life.
            </p>
            <div className="flex justify-center">
              <button
                className="relative px-8 py-4 bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-gray-800 transition-transform transform hover:scale-105 duration-300 overflow-hidden"
                onClick={() => window.open('https://calendly.com/zygigofficial/30min4423022', '_blank')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-30 blur-sm"></span>
                <span className="relative">Schedule a Call</span>
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

export default BookFreeCallPage;
