// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Akash from "../assets/profile-pictures/Akash Sharma.jpeg";
// import Neha from "../assets/profile-pictures/Neha Kapoor.jpeg";
// import Abdul from "../assets/profile-pictures/Abdul Qadir.jpeg";
// import Rajesh from "../assets/profile-pictures/Rajesh Kumar.jpeg";
// import Vikram from "../assets/profile-pictures/Vikram Khanna.jpeg";
// import Riya from "../assets/profile-pictures/image.png";


// const TestimonialPage = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const testimonials = [
//     {       photo: Akash,
//             name: 'Akash Sharma',
//             description: 'Zygig brought our app idea to life and made it so easy to use. The team was great to work with, and they delivered faster than we expected!',
//             rating: 4.5,
//         },
//         {
//             photo: Neha,
//             name: 'Neha Kapoor',
//             description: 'Finding the right talent felt overwhelming until we worked with Zygig. They connected us with skilled professionals quickly, and the quality of work was top-notch!',
//             rating: 5,
//         },
//         {
//             photo: Vikram,
//             name: 'Vikram Khanna',
//             description: 'Zygig created a stunning website for us that perfectly matched our vision. The process was smooth, and their team was always ready to listen and adapt. Highly recommend them!',
//             rating: 4,
//         },
//         {
//             photo: Abdul,
//             name: 'Abdul Qadir',
//             description: 'We needed a custom machine-learning solution, and Zygig delivered exactly what we were looking for. They simplified the complex and made it work seamlessly for us!',
//             rating: 4.5,
//         },
//         {
//             photo: Riya,
//             name: 'Riya Verma',
//             description: 'Zygig built us a great website—just what we wanted! The process was easy, and they delivered on time.',
//             rating: 5,
//         },
//         {
//             photo: Rajesh,
//             name: 'Rajesh Kumar',
//             description: 'Zygig’s prediction model worked like magic! It was accurate, reliable, and super easy to understand.',
//             rating: 4,
//         },
      
//   ];

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;

//     return (
//       <div className="flex justify-center mt-4">
//         {Array.from({ length: fullStars }, (_, index) => (
//           <svg
//             key={`full-${index}`}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="gold"
//             viewBox="0 0 24 24"
//             className="w-6 h-6"
//           >
//             <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//           </svg>
//         ))}
//         {halfStar && (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             className="w-6 h-6"
//           >
//             <defs>
//               <linearGradient id="halfStarGradient">
//                 <stop offset="50%" stopColor="gold" />
//                 <stop offset="50%" stopColor="gray" />
//               </linearGradient>
//             </defs>
//             <path
//               fill="url(#halfStarGradient)"
//               d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
//             />
//           </svg>
//         )}
//         {Array.from({ length: 5 - Math.ceil(rating) }, (_, index) => (
//           <svg
//             key={`empty-${index}`}
//             xmlns="http://www.w3.org/2000/svg"
//             fill="gray"
//             viewBox="0 0 24 24"
//             className="w-6 h-6"
//           >
//             <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//           </svg>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 text-white min-h-screen">
//       {/* Navbar */}
//       <Navbar />

//       {/* Page Content */}
//       <div className="min-h-screen">
//         {/* Headline */}
//         <header className="py-20 text-center" data-aos="fade-down">
//           <h1 className="text-7xl font-[425] tracking-wide mb-4 mt-12 ">
//              <span className="italic">Client Voices</span>
//           </h1>
//           <p className="text-2xl text-gray-400 mt-6">
//             Real Stories, Real Success
//           </p>
//         </header>

//         {/* Testimonials Section */}
//         <div
//           className="px-6 md:px-20 lg:px-[7.5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pb-10"
//           data-aos="fade-up"
//         >
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="w-80 md:w-[22rem] lg:min-w-[26rem] rounded-3xl p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 group hover:brightness-150 border border-gray-700 shadow-lg hover:shadow-2xl hover:shadow-gray-800 shadow-gray-800 transition-transform transform hover:rotate-10 duration-500 hover:border-glow cursor-pointer"
//               data-aos="flip-down"
//             >
//               <div className="flex items-center mb-6">
//                 <img
//                   src={testimonial.photo}
//                   alt={testimonial.name}
//                   className="w-16 h-16 rounded-full border-4 border-gray-600 group-hover:brightness-75"
//                 />
//                 <div className="ml-4">
//                   <h3 className="text-xl font-semibold">{testimonial.name}</h3>
//                   <p className="text-sm text-gray-400">{testimonial.designation}</p>
//                   <p className="text-sm text-gray-400">{testimonial.company}</p>
//                 </div>
//               </div>
//               <p className="text-gray-300 italic mb-6">{testimonial.description}</p>
//               {renderStars(testimonial.rating)}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default TestimonialPage;



import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Akash from "../assets/profile-pictures/Akash Sharma.jpeg";
import Neha from "../assets/profile-pictures/Neha Kapoor.jpeg";
import Abdul from "../assets/profile-pictures/Abdul Qadir.jpeg";
import Rajesh from "../assets/profile-pictures/Rajesh Kumar.jpeg";
import Vikram from "../assets/profile-pictures/Vikram Khanna.jpeg";
import Riya from "../assets/profile-pictures/image.png";

const TestimonialPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const testimonials = [
    {
      photo: Akash,
      name: 'Akash Sharma',
      description: 'Zygig brought our app idea to life and made it so easy to use. The team was great to work with, and they delivered faster than we expected!',
      rating: 4.5,
    },
    {
      photo: Neha,
      name: 'Neha Kapoor',
      description: 'Finding the right talent felt overwhelming until we worked with Zygig. They connected us with skilled professionals quickly, and the quality of work was top-notch!',
      rating: 5,
    },
    {
      photo: Vikram,
      name: 'Vikram Khanna',
      description: 'Zygig created a stunning website for us that perfectly matched our vision. The process was smooth, and their team was always ready to listen and adapt. Highly recommend them!',
      rating: 4,
    },
    {
      photo: Abdul,
      name: 'Abdul Qadir',
      description: 'We needed a custom machine-learning solution, and Zygig delivered exactly what we were looking for. They simplified the complex and made it work seamlessly for us!',
      rating: 4.5,
    },
    {
      photo: Riya,
      name: 'Riya Verma',
      description: 'Zygig built us a great website—just what we wanted! The process was easy, and they delivered on time.',
      rating: 5,
    },
    {
      photo: Rajesh,
      name: 'Rajesh Kumar',
      description: 'Zygig’s prediction model worked like magic! It was accurate, reliable, and super easy to understand.',
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <div className="flex justify-center mt-4">
        {Array.from({ length: fullStars }, (_, index) => (
          <svg
            key={`full-${index}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="gold"
            viewBox="0 0 24 24"
            className="w-4 h-4 md:w-6 md:h-6"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
        {halfStar && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 md:w-6 md:h-6"
          >
            <defs>
              <linearGradient id="halfStarGradient">
                <stop offset="50%" stopColor="gold" />
                <stop offset="50%" stopColor="gray" />
              </linearGradient>
            </defs>
            <path
              fill="url(#halfStarGradient)"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        )}
        {Array.from({ length: 5 - Math.ceil(rating) }, (_, index) => (
          <svg
            key={`empty-${index}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="gray"
            viewBox="0 0 24 24"
            className="w-4 h-4 md:w-6 md:h-6"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 text-white min-h-screen">
      <Navbar />

      <div className="min-h-screen">
        <header className="py-20 text-center" data-aos="fade-down">
          <h1 className="text-4xl md:text-7xl font-[425] tracking-wide mb-4 mt-12">
            <span className="italic">Client Voices</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 mt-6">
            Real Stories, Real Success
          </p>
        </header>

        <div
          className="px-4 sm:px-6 md:px-20 lg:px-[7.5rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-16 pb-10"
          data-aos="fade-up"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full md:w-[22rem] lg:w-[26rem] rounded-2xl p-4 md:p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 group hover:brightness-150 border border-gray-700 shadow-lg hover:shadow-2xl hover:shadow-gray-800 shadow-gray-800 transition-transform transform hover:rotate-3 duration-500 hover:border-glow cursor-pointer"
              data-aos="flip-down"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-gray-600 group-hover:brightness-75"
                />
                <div className="ml-4">
                  <h3 className="text-lg md:text-xl font-semibold">{testimonial.name}</h3>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-300 italic mb-6">
                {testimonial.description}
              </p>
              {renderStars(testimonial.rating)}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestimonialPage;
