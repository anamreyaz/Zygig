import React, { useState, useEffect, useRef } from "react";

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
        <p className="text-gray-300 mt-6 text-base">
          Dive into our FAQ section for insights into our services.We've compiled answers 
          <br /> to common questions to ensure you're well-informed.
        </p>
      </header>
      <div className="w-full max-w-5xl bg-gray-transparent p-6">
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



// import React, { useState, useEffect, useRef } from "react";

// const faqs = [
//   {
//     question: "How long does it take to complete a project?",
//     answer:
//       "The duration varies depending on the scope and complexity of the project. We strive to deliver high-quality work within a reasonable timeframe, ensuring both efficiency and excellence.",
//   },
//   {
//     question: "What is your design process like?",
//     answer:
//       "Our design process is collaborative and transparent. It typically involves initial consultation, concept development, feedback iterations, and finalization. We prioritize client input and strive to exceed expectations at every stage.",
//   },
//   {
//     question: "Can I request revisions to the design?",
//     answer:
//       "Absolutely! We welcome your feedback and offer unlimited revisions to ensure your complete satisfaction with the final design. Your input is invaluable in achieving the desired outcome for your project.",
//   },
//   {
//     question: "Do you provide support after project completion?",
//     answer:
//       "Yes, we believe in building long-term relationships with our clients. We offer post-project support to address any questions or issues that may arise, ensuring a seamless experience even after project completion.",
//   },
//   {
//     question: "Can I see examples of your previous work?",
//     answer:
//       "Certainly! We have a portfolio showcasing our past projects and client testimonials. Feel free to explore our portfolio to see the quality of our work and the level of satisfaction among our clients.",
//   },
// ];

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);
//   const faqRef = useRef(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 } // Trigger visibility when 20% of the section is in view
//     );

//     if (faqRef.current) {
//       observer.observe(faqRef.current);
//     }

//     return () => {
//       if (faqRef.current) {
//         observer.unobserve(faqRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={faqRef}
//       className={`bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 min-h-screen flex flex-col items-center py-10 px-4 transition-all duration-1000 ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//       }`}
//     >
//       <header className="text-center mb-10 text-white">
//         <h1 className="text-7xl font-medium pt-20">
//           Clearing Up Common <div className="italic pt-4">Queries</div>
//         </h1>
//         <p className="text-gray-300 mt-6 text-base">
//           Dive into our FAQ section for insights into our services.
//           We've compiled answers <br /> to common questions to ensure you're well-informed.
//         </p>
//       </header>
//       <div className="w-full max-w-5xl bg-gray-transparent p-6">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="border-b border-gray-800 py-[26px] cursor-pointer hover:scale-105 transition-all duration-300"
//             onClick={() => toggleFAQ(index)}
//           >
//             <div className="flex justify-between items-center">
//               <h2 className="text-lg font-normal text-gray-100">{faq.question}</h2>
//               <span className="text-gray-400 text-3xl">
//                 {activeIndex === index ? "-" : "+"}
//               </span>
//             </div>
//             {activeIndex === index && (
//               <p className="text-gray-400 mt-2">{faq.answer}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;
