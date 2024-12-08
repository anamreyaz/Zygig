// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const HireUsPage = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 text-white min-h-screen">
//       {/* Navbar */}
//       <Navbar />

//       {/* Page Content */}
//       <div className="min-h-screen px-6 md:px-20 lg:px-40 py-20">
//         {/* Header */}
//         <header className="text-center mb-16" data-aos="fade-down">
//           <h1 className="text-5xl font-extrabold mb-4">Hire Us</h1>
//           <p className="text-lg text-gray-400">
//             Partner with Zygig to bring your ideas to life. Whether it's a website, mobile application, or a custom solution, we’re here to help you succeed.
//           </p>
//         </header>

//         {/* Why Hire Us Section */}
//         <div className="space-y-12">
//           <div
//             className="p-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:brightness-110 duration-500"
//             data-aos="fade-up"
//           >
//             <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
//             <p className="text-gray-300 text-lg mb-4">
//               At Zygig, we specialize in delivering top-notch solutions tailored to your business needs. Our team of experts ensures every project is executed with precision, creativity, and innovation.
//             </p>
//             <ul className="space-y-2 text-gray-400 text-lg list-disc ml-5">
//               <li>Custom Website Development</li>
//               <li>Mobile Application Development</li>
//               <li>User Experience (UX) and Interface Design</li>
//               <li>Advanced Machine Learning Solutions</li>
//               <li>Dedicated Post-Launch Support</li>
//             </ul>
//           </div>

//           {/* Hire Us Form Section */}
//           <div
//             className="p-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:brightness-110 duration-500"
//             data-aos="fade-up"
//           >
//             <h2 className="text-3xl font-bold mb-4">Get Started with Us</h2>
//             <p className="text-gray-300 text-lg mb-4">
//               Ready to start your project? Click the button below to connect with us. Fill out the form to share your requirements, and we’ll get back to you promptly.
//             </p>
//             <div className="text-center">
//               <button
//                 className="relative px-8 py-4 bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-gray-800 transition-transform transform hover:scale-105 duration-300 overflow-hidden"
//                 onClick={() => window.open('https://forms.google.com', '_blank')}
//               >
//                 <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-30 blur-sm"></span>
//                 <span className="relative">Fill Our Hire Us Form</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default HireUsPage;
