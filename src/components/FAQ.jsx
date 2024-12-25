import React, { useState, useEffect, useRef } from "react";

const faqs = [
  {
    question: "What services does Zygig offer?",
    answer:
      "Zygig offers app development, web development, UI/UX design, machine learning solutions. and research paper writing, tailored to meet your specific goals and business needs.",
  },
  {
    question: "How do I book a call with your team?",
    answer:
      "You can book a call by clicking the \"Schedule a Free Consultation\" button on our website and choosing a time that suits you.",
  },
  {
    question: "How long does a project typically take?",
    answer:
      "Timelines vary depending on the project's complexity, but we always ensure timely delivery. without compromising quality. We'll provide an estimated timeline during our consultation.",
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
  {
    question: "What industries do you work with?",
    answer:
      "We work across various industries, including education, e-commerce, healthcare, startups. and more, providing tailored digital and research solutions.",
  },
  {
    question: "How do you ensure quality in your projects?",
    answer:
      "Our team follows industry best practices, thorough testing, and feedback loops to ensure every project meets the highest quality standards.",
  },
  {
    question: "What technologies do you use for development?",
    answer:
      "We use modern technologies like React, Flutter, Node.js, Python, and various Al/ML tools, ensuring cutting-edge and efficient solutions.",
  },
  {
    question: "Do you offer revisions on projects?",
    answer:
      "Yes, we value your satisfaction. We offer a set number of revisions based on project scope to meet your expectations.",
  },
  {
    question: "How can I get started with Zygig?",
    answer:
      "Simply reach out through our \"Book a Call button\", and we'll discuss your project requirements and how we can help you achieve your goals.",
  },
];

const FAQ = () => {
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
    <div
      ref={faqRef}
      className={`bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 min-h-screen flex flex-col items-center -mb-2 pt-8 px-4 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <header className="text-center mb-8 text-white">
        <h1 className="text-7xl font-medium pt-20">
          Clearing Up Common <div className="italic pt-4">Queries</div>
        </h1>
        <p className="text-gray-300 mt-6 text-xl">
          Answer to your Most Asked Questions.
        </p>
      </header>
      <div className="w-full max-w-5xl bg-gray-transparent p-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-800 py-[26px] cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-normal text-gray-100">{faq.question}</h2>
              <span className="text-gray-400 text-3xl">
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
  );
};

export default FAQ;



