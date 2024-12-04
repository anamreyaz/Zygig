



// // import React from "react";

// // const CardGrid = () => {
// //   return (
// //     <div className="bg-black min-h-screen flex items-center justify-center px-6">
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl">
// //         {/* Websites Card */}
// //         <div className="bg-[#1c1c1c] rounded-xl p-6 shadow-lg">
// //           <h3 className="text-white text-2xl font-semibold mb-3">Websites</h3>
// //           <p className="text-gray-400 mb-6">
// //             Responsive websites and dashboards for your business.
// //           </p>
// //           <div className="bg-gray-800 rounded-lg p-4">
// //             <div className="bg-gray-700 h-24 rounded-lg"></div>
// //           </div>
// //         </div>

// //         {/* Apps Card */}
// //         <div className="bg-[#1c1c1c] rounded-xl p-6 shadow-lg">
// //           <h3 className="text-white text-2xl font-semibold mb-3">Apps</h3>
// //           <p className="text-gray-400 mb-6">
// //             Designing mobile apps for iOS and Android users.
// //           </p>
// //           <div className="bg-gray-800 rounded-lg p-4">
// //             <div className="bg-gray-700 h-24 rounded-lg"></div>
// //           </div>
// //         </div>

// //         {/* Design Systems Card */}
// //         <div className="bg-[#1c1c1c] rounded-xl p-6 shadow-lg">
// //           <h3 className="text-white text-2xl font-semibold mb-3">
// //             Design Systems
// //           </h3>
// //           <p className="text-gray-400 mb-6">
// //             Building robust and flexible design systems for easy scalability.
// //           </p>
// //           <div className="bg-gray-800 rounded-lg p-4">
// //             <div className="bg-gray-700 h-24 rounded-lg"></div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CardGrid;




// import React from "react";
// import { motion } from "framer-motion";

// // Data for the cards
// const cardsData = [
//   {
//     title: "Web Development",
//     description: "Build responsive websites and interactive web applications.",
//     image: "https://via.placeholder.com/300x200?text=Web+Development",
//   },
//   {
//     title: "App Development",
//     description: "Create seamless mobile applications for all platforms.",
//     image: "https://via.placeholder.com/300x200?text=App+Development",
//   },
//   {
//     title: "Machine Learning Models",
//     description: "Develop intelligent ML solutions tailored to your needs.",
//     image: "https://via.placeholder.com/300x200?text=Machine+Learning",
//   },
//   {
//     title: "UI/UX Designs",
//     description: "Craft user-centered designs that engage and delight.",
//     image: "https://via.placeholder.com/300x200?text=UI%2FUX+Designs",
//   },
//   {
//     title: "Research Papers",
//     description: "Publish impactful research papers and white papers.",
//     image: "https://via.placeholder.com/300x200?text=Research+Papers",
//   },
//   {
//     title: "Extra Box",
//     description: "Explore additional services tailored for your business.",
//     image: "https://via.placeholder.com/300x200?text=Extra+Box",
//   },
// ];

// // Card component
// const Card = ({ title, description, image }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//     className="bg-gray-900 text-white rounded-lg p-6 shadow-lg"
//   >
//     <h2 className="text-2xl font-semibold mb-2">{title}</h2>
//     <p className="text-gray-400 mb-4">{description}</p>
//     <div className="bg-gray-800 rounded-lg overflow-hidden">
//       <img
//         src={image}
//         alt={{title}}
//         className="w-full h-40 object-cover"
//       />
//     </div>
//   </motion.div>
// );

// // Main component
// const CardsGrid = () => {
//   return (
//     <div className="min-h-screen flex justify-center items-center py-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl p-6">
//         {cardsData.map((card, index) => (
//           <Card
//             key={index}
//             title={card.title}
//             description={card.description}
//             image={card.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardsGrid;