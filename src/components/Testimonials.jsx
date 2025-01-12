// import React, { useEffect, useState } from "react";
// import Akash from "../assets/profile-pictures/Akash Sharma.jpeg";
// import Neha from "../assets/profile-pictures/Neha Kapoor.jpeg";
// import Mike from "../assets/profile-pictures/Mike Johnson.jpg";
// import Arjun from "../assets/profile-pictures/Arjun Mehta.jpeg";
// import Riya from "../assets/profile-pictures/Riya Verma.jpeg";
// import Noah from "../assets/profile-pictures/Noah Martinez.jpg";
// import Sameer from "../assets/profile-pictures/Sameer Joshi.jpeg";
// import Priya from "../assets/profile-pictures/Priya Malhotra.jpg";
// import Vikram from "../assets/profile-pictures/Vikram Das.jpg";

// const testimonials = [
//   {  
//       photo: Akash,
//       name: 'Akash Sharma',
//       designation: 'CTO',
//       company: 'Innovatech Pvt Ltd',
//       description: 'Zygig transformed our app idea into a sleek, user-friendly product. Their professionalism and quick delivery exceeded our expectations!',
//       rating: 4.5,
//   },
//   {
//       photo: Neha,
//       name: 'Neha Kapoor',
//       designation: ' Marketing Head',
//       company: 'BrightEdge Media',
//       description: 'We partnered with Zygig for website development, and the results were stunning! A beautiful, responsive site that brought us more customers.',
//       rating: 5,
//   },
//   {
//       photo: Mike,
//       name: 'Mike Johnson',
//       designation: 'Product Manager',
//       company: 'NextGen Innovators',
//       description: 'The designs Zygig created were not only beautiful but also functional. Our customers love how easy it is to navigate our product!',
//       rating: 4,
//   },
//   {
//       photo: Arjun,
//       name: 'Arjun Mehta',
//       designation: 'Founder & CEO',
//       company: 'GreenWave Technologies',
//       description: 'Zygig\'s machine learning models gave us smart, data-driven insights. They truly helped us take our decision-making to the next level.',
//       rating: 4.5,
//   },
//   {
//       photo: Riya,
//       name: 'Riya Verma',
//       designation: 'UX Designer',
//       company: 'PixelCurve Designs',
//       description: 'The UI/UX designs provided by Zygig were top-notch. User experience has improved significantly, and clients love our new interface.',
//       rating: 5,
//   },
//   {
//       photo: Noah,
//       name: 'Noah Martinez',
//       designation: 'Product Designer',
//       company: 'DesignPros',
//       description: 'Working with Zygig was effortless. They understood our requirements and delivered an incredible website on time and within budget!',
//       rating: 4,
//   },
//   {
//       photo: Sameer,
//       name: 'Sameer Joshi',
//       designation: 'Software Engineer',
//       company: 'NexGen Apps',
//       description: 'I needed research paper support, and Zygig delivered perfectly. Professional, well-structured writing that met all academic guidelines.',
//       rating: 5,
//   },
//   {
//     photo: Priya,
//     name: 'Priya Malhotra',
//     designation: 'Operations Manager',
//     company: 'BloomTech Ventures',
//     description: 'Our mobile app looks and works great thanks to Zygig\'s development team. Their attention to detail sets them apart!',
//     rating: 4.5,
// },
//   {
//       photo: Vikram,
//       name: 'Vikram Thapa',
//       designation: 'Data Analyst',
//       company: 'LogiTech Systems',
//       description: 'Their machine learning solutions helped automate our workflows and increase efficiency. The team is highly skilled and truly understands Al.',
//       rating: 4.5,
//   },
// ];

// function Testimonials() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     const element = document.querySelector(".testimonial-section");
//     if (element) {
//       observer.observe(element);
//     }

//     return () => {
//       if (element) {
//         observer.unobserve(element);
//       }
//     };
//   }, []);

//   return (
//     <div
//       className={`mt-14 testimonial-section h-screen w-screen bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 text-white flex items-center justify-center -ml-[20px] transition-all duration-1000 ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//       }`}
//     >
//       <div className="flex flex-col md:flex-row w-full max-w-6xl px-4 md:px-8 gap-8 h-full">
//         <div className="md:w-2/5 h-full">
//           <div className="sticky top-24 ">
//             <h2 className="text-orange-500 font-bold text-xl uppercase mb-2">Client Voices</h2>
//             <h1 className="text-7xl font-medium pt-8">A few Words</h1>
//           </div>
//         </div>

//         <div className="flex items-center justify-center md:w-3/5 h-full overflow-hidden relative">
//           <div className="fade-top-home-testimonials"></div>
//           <div className="fade-bottom-home-testimonials"></div>
//           <div className="testimonial-scroll">
//             {[...testimonials, ...testimonials].map((item, index) => (
//               <div
//                 key={index}
//                 className="w-[93%] bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-xl shadow-lg flex gap-6 items-start mb-6 border border-gray-800 backdrop-blur-sm hover:shadow-gray-800 hover:scale-105 transition-all duration-300"
//               >
//                 <img
//                   src={item.photo}
//                   alt={item.name}
//                   className="w-16 h-16 rounded-full border-2 border-orange-500 shadow-md"
//                 />
//                 <div>
//                   <p className="text-gray-300 text-sm italic mb-2">"{item.description}"</p>
//                   <p className="text-orange-400 text-base font-semibold">{item.name}</p>
//                   <p className="text-gray-500 text-sm">{item.designation}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testimonials;



import React, { useEffect, useState } from "react";
import Akash from "../assets/profile-pictures/Akash Sharma.jpeg";
import Neha from "../assets/profile-pictures/Neha Kapoor.jpeg";
import Abdul from "../assets/profile-pictures/Abdul Qadir.jpeg";
import Rajesh from "../assets/profile-pictures/Rajesh Kumar.jpeg";
import Vikram from "../assets/profile-pictures/Vikram Khanna.jpeg";
import Riya from "../assets/profile-pictures/image.png";

const testimonials = [
  {       photo: Akash,
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

function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.querySelector(".testimonial-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      className={`mt-14 testimonial-section h-screen w-screen bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 text-white flex items-center justify-center -ml-[20px] transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex flex-col md:flex-row w-full max-w-6xl px-4 md:px-8 gap-8 h-full">
        
        <div className="md:w-2/5 h-full">
          <div className="sticky top-24">
            <h2 className="text-orange-500 font-bold text-xl uppercase mb-2">Client Voices</h2>
            <h1 className="text-7xl font-medium pt-8">A few Words</h1>
          </div>
        </div>

        <div className="flex items-center justify-center md:w-3/5 h-full overflow-hidden relative">
          <div className="fade-top-home-testimonials"></div>
          <div className="fade-bottom-home-testimonials"></div>
          <div className="testimonial-scroll">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="w-[93%] bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-xl shadow-lg flex gap-6 items-start mb-6 border border-gray-800 backdrop-blur-sm hover:shadow-gray-800 hover:scale-105 transition-all duration-300"
              >
                <img
                  src={item.photo}
                  alt={item.name}
                  className="image w-16 h-16 rounded-full border-2 border-orange-500 shadow-md"
                />
                <div>
                  <p className="description text-gray-300 text-sm italic mb-2">"{item.description}"</p>
                  <p className="name text-orange-400 text-base font-semibold">{item.name}</p>
                  <p className="designation text-gray-500 text-sm">{item.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile CSS */}
      <style>
        {`
          @media (max-width: 500px) {
            .testimonial-section {
              margin: 2px;
              width:100%;
              height: auto;
              padding: 2rem 0.25rem;
            }
            .testimonial-scroll {
              width:90%;
              height: 500px;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .testimonial-scroll > div {
              width: 100%;
              max-width: 400px;
              padding: 1rem;
              text-align: center;
              display: flex;
              flex-direction: row;
              align-items: center;
            }
            .image {
              width: 50px;
              height: 50px;
            }
            
            .description {
            line-height: 1.2 ;
              font-size: 12px;
            }
            .name{
            line-height:1.5;
            font-size: 14px;
            }
            .designation{
            line-height:1.3;
            font-size: 13px;
            }
            .sticky {
              position: static;
              text-align: center;
              margin-bottom: 2rem;
            }
            .sticky h1 {
              font-size: 3rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Testimonials;
