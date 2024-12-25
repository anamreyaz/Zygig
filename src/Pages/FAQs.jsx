import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "What services does Zygig offer?",
    answer:
      "Zygig offers app development, web development, UI/UX design, machine learning solutions, and research paper writing tailored to meet your specific goals and business needs.",
  },
  {
    question: "How do I book a call with your team?",
    answer:
      "You can book a call by clicking the \"Schedule a Free Consultation\" button on our website and choosing a time that suits you.",
  },
  {
    question: "How long does a project typically take?",
    answer:
      "Timelines vary depending on the project's complexity, but we always ensure timely delivery without compromising quality. We'll provide an estimated timeline during our consultation.",
  },
  {
    question: "Can you customize your services based on our requirements?",
    answer:
      "Yes, all our services are fully customizable. We focus on understanding your unique needs and delivering solutions that align with your goals.",
  },
  {
    question: "Do you provide ongoing support after project delivery?",
    answer:
      "Absolutely! We offer post-project support, including maintenance, updates, and assistance to ensure everything runs smoothly.",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const faqRef = useRef(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* FAQs Section */}
      <div
        ref={faqRef}
        className={`flex flex-col items-center px-6 sm:px-12 md:px-20 py-12 md:py-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <header className="text-center mb-12 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Frequently Asked <span className="italic">Questions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4">
            Explore our FAQ section to get quick answers to your questions and insights into our processes.
          </p>
        </header>

        {/* FAQ Container */}
        <div className="w-full max-w-4xl p-4 sm:p-6 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-800 py-6 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg md:text-xl font-medium text-gray-100">
                  {faq.question}
                </h2>
                <span className="text-gray-400 text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index
                    ? "max-h-[400px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-400 mt-4 text-base md:text-lg">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQPage;
