// // src/Testimonials.js
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
// // import "./styles.css"; // Import the styles for scrolling and fade effect

// const testimonials = [
//   {
//     text: "John's creativity knows no bounds! His designs captured our brand's personality perfectly and exceeded all our expectations.",
//     author: "Emily T.",
//     designation: "Creative Director",
//     image: user1,
//   },
//   {
//     text: "Working with John was a breeze. He's not only talented but also incredibly professional, delivering a stunning website on time.",
//     author: "Chris L.",
//     designation: "Project Manager",
//     image: user2,
//   },
//   {
//     text: "John's design work is always fresh and innovative. He consistently delivers projects that wow our clients and elevate our brand.",
//     author: "David K.",
//     designation: "CEO",
//     image: user3,
//   },
//   {
//     text: "John transformed our vision into a beautiful, functional design. His attention to detail and creativity are unparalleled.",
//     author: "Sophia M.",
//     designation: "Art Director",
//     image: user4,
//   },
//   {
//     text: "The team loved John's work! He made the design process seamless and enjoyable.",
//     author: "Michael R.",
//     designation: "Marketing Head",
//     image: user5,
//   },
//   {
//     text: "John’s ability to bring ideas to life is unmatched. His designs resonate with both clients and stakeholders.",
//     author: "Olivia P.",
//     designation: "UI/UX Designer",
//     image: user6,
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
//       // style={{ backgroundColor: "#09090B" }}
//     >
//       {/* Main Section */}
//       <div className="flex flex-col md:flex-row w-full max-w-6xl px-4 md:px-8 gap-8 h-full">
//         {/* Left Section: Sticky Text */}
//         <div className="md:w-2/5 h-full">
//           <div className="sticky top-24">
//             <h2 className="text-orange-500 font-bold text-xl uppercase mb-2">Client Voices</h2>
//             <h1 className="text-7xl font-medium pt-8">A few Words</h1>
//           </div>
//         </div>

//         {/* Right Section: Full-Screen Testimonials Scrolling */}
//         <div className="flex items-center justify-center md:w-3/5 h-full overflow-hidden relative">
//           {/* Fading Tints */}
//           <div className="fade-top-home-testimonials"></div>
//           <div className="fade-bottom-home-testimonials"></div>
//           <div className="testimonial-scroll">
//             {/* Render testimonials twice for seamless scrolling */}
//             {[...testimonials, ...testimonials].map((item, index) => (
//               <div
//                 key={index}
//                 className="w-[93%] bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-xl shadow-lg flex gap-6 items-start mb-6 border border-gray-800 backdrop-blur-sm hover:shadow-gray-800 hover:scale-105 transition-all duration-300"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.author}
//                   className="w-16 h-16 rounded-full border-2 border-orange-500 shadow-md"
//                 />
//                 <div>
//                   <p className="text-gray-300 text-sm italic mb-2">"{item.text}"</p>
//                   <p className="text-orange-400 text-base font-semibold">{item.author}</p>
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
import Mike from "../assets/profile-pictures/Mike Johnson.jpg";
import Arjun from "../assets/profile-pictures/Arjun Mehta.jpeg";
import Riya from "../assets/profile-pictures/Riya Verma.jpeg";
import Noah from "../assets/profile-pictures/Noah Martinez.jpg";
import Sameer from "../assets/profile-pictures/Sameer Joshi.jpeg";
import Priya from "../assets/profile-pictures/Priya Malhotra.jpg";
import Vikram from "../assets/profile-pictures/Vikram Das.jpg";

const testimonials = [
  {  
      photo: Akash,
      name: 'Akash Sharma',
      designation: 'CTO',
      company: 'Innovatech Pvt Ltd',
      description: 'Zygig transformed our app idea into a sleek, user-friendly product. Their professionalism and quick delivery exceeded our expectations!',
      rating: 4.5,
  },
  {
      photo: Neha,
      name: 'Neha Kapoor',
      designation: ' Marketing Head',
      company: 'BrightEdge Media',
      description: 'We partnered with Zygig for website development, and the results were stunning! A beautiful, responsive site that brought us more customers.',
      rating: 5,
  },
  {
      photo: Mike,
      name: 'Mike Johnson',
      designation: 'Product Manager',
      company: 'NextGen Innovators',
      description: 'The designs Zygig created were not only beautiful but also functional. Our customers love how easy it is to navigate our product!',
      rating: 4,
  },
  {
      photo: Arjun,
      name: 'Arjun Mehta',
      designation: 'Founder & CEO',
      company: 'GreenWave Technologies',
      description: 'Zygig\'s machine learning models gave us smart, data-driven insights. They truly helped us take our decision-making to the next level.',
      rating: 4.5,
  },
  {
      photo: Riya,
      name: 'Riya Verma',
      designation: 'UX Designer',
      company: 'PixelCurve Designs',
      description: 'The UI/UX designs provided by Zygig were top-notch. User experience has improved significantly, and clients love our new interface.',
      rating: 5,
  },
  {
      photo: Noah,
      name: 'Noah Martinez',
      designation: 'Product Designer',
      company: 'DesignPros',
      description: 'Working with Zygig was effortless. They understood our requirements and delivered an incredible website on time and within budget!',
      rating: 4,
  },
  {
      photo: Sameer,
      name: 'Sameer Joshi',
      designation: 'Software Engineer',
      company: 'NexGen Apps',
      description: 'I needed research paper support, and Zygig delivered perfectly. Professional, well-structured writing that met all academic guidelines.',
      rating: 5,
  },
  {
    photo: Priya,
    name: 'Priya Malhotra',
    designation: 'Operations Manager',
    company: 'BloomTech Ventures',
    description: 'Our mobile app looks and works great thanks to Zygig\'s development team. Their attention to detail sets them apart!',
    rating: 4.5,
},
  {
      photo: Vikram,
      name: 'Vikram Das',
      designation: 'Data Analyst',
      company: 'LogiTech Systems',
      description: 'Their machine learning solutions helped automate our workflows and increase efficiency. The team is highly skilled and truly understands Al.',
      rating: 4.5,
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
                  className="w-16 h-16 rounded-full border-2 border-orange-500 shadow-md"
                />
                <div>
                  <p className="text-gray-300 text-sm italic mb-2">"{item.description}"</p>
                  <p className="text-orange-400 text-base font-semibold">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

