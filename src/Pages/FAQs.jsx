import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "How long does it take to complete a project?",
    answer:
      "The duration varies depending on the scope and complexity of the project. We strive to deliver high-quality work within a reasonable timeframe, ensuring both efficiency and excellence.",
  },
  {
    question: "What is your design process like?",
    answer:
      "Our design process is collaborative and transparent. It typically involves initial consultation, concept development, feedback iterations, and finalization. We prioritize client input and strive to exceed expectations at every stage.",
  },
  {
    question: "Can I request revisions to the design?",
    answer:
      "Absolutely! We welcome your feedback and offer unlimited revisions to ensure your complete satisfaction with the final design. Your input is invaluable in achieving the desired outcome for your project.",
  },
  {
    question: "Do you provide support after project completion?",
    answer:
      "Yes, we believe in building long-term relationships with our clients. We offer post-project support to address any questions or issues that may arise, ensuring a seamless experience even after project completion.",
  },
  {
    question: "Can I see examples of your previous work?",
    answer:
      "Certainly! We have a portfolio showcasing our past projects and client testimonials. Feel free to explore our portfolio to see the quality of our work and the level of satisfaction among our clients.",
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
        className={`flex flex-col items-center px-4 py-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <header className="text-center mb-12 text-white">
          <h1 className="text-5xl font-extrabold">
            Frequently Asked <span className="italic">Questions</span>
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            Explore our FAQ section to get quick answers to your questions and insights into our processes.
          </p>
        </header>

        <div className="w-full max-w-4xl bg-gray-transparent p-6 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-800 py-4 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-100">{faq.question}</h2>
                <span className="text-gray-400 text-2xl">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-400 mt-2">{faq.answer}</p>
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
