import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Akash from "../assets/profile-pictures/Akash Sharma.jpeg";
import Neha from "../assets/profile-pictures/Neha Kapoor.jpeg";
import Mike from "../assets/profile-pictures/Mike Johnson.jpg";
import Arjun from "../assets/profile-pictures/Arjun Mehta.jpeg";
import Riya from "../assets/profile-pictures/Riya Verma.jpeg";
import Noah from "../assets/profile-pictures/Noah Martinez.jpg";
import Sameer from "../assets/profile-pictures/Sameer Joshi.jpeg";
import Priya from "../assets/profile-pictures/Priya Malhotra.jpg";
import Vikram from "../assets/profile-pictures/Vikram Das.jpg";


const TestimonialPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
        description: 'The designs Zygig created were not only heautiful but also functional. Our customers love how easy it is to navigate our product!',
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
            className="w-6 h-6"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
        {halfStar && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6"
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
            className="w-6 h-6"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="min-h-screen">
        {/* Headline */}
        <header className="py-20 text-center" data-aos="fade-down">
          <h1 className="text-7xl font-[425] tracking-wide mb-4 mt-12 ">
             <span className="italic">Client Voices</span>
          </h1>
          <p className="text-2xl text-gray-400 mt-6">
            Real Stories, Real Success
          </p>
        </header>

        {/* Testimonials Section */}
        <div
          className="px-6 md:px-20 lg:px-[7.5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pb-10"
          data-aos="fade-up"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-80 md:w-[22rem] lg:min-w-[26rem] rounded-3xl p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 group hover:brightness-150 border border-gray-700 shadow-lg hover:shadow-2xl hover:shadow-gray-800 shadow-gray-800 transition-transform transform hover:rotate-10 duration-500 hover:border-glow cursor-pointer"
              data-aos="flip-down"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-4 border-gray-600 group-hover:brightness-75"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.designation}</p>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-6">{testimonial.description}</p>
              {renderStars(testimonial.rating)}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TestimonialPage;
