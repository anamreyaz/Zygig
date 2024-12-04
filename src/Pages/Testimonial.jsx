import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

const TestimonialPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const testimonials = [
    {
        photo: user5,
        name: 'John Doe',
        designation: 'CEO',
        company: 'TechWave Solutions',
        description: 'Zygig has been a fantastic partner. Their attention to detail and commitment to excellence have helped us achieve our goals with ease. Highly recommended!',
        rating: 4.5,
    },
    {
        photo: user6,
        name: 'Sarah Lee',
        designation: 'Marketing Director',
        company: 'BrightFuture Inc.',
        description: 'Working with Zygig was an absolute pleasure. They understood our needs and delivered beyond our expectations. Their team is truly exceptional!',
        rating: 5,
    },
    {
        photo: user4,
        name: 'Mike Johnson',
        designation: 'Product Manager',
        company: 'NextGen Innovators',
        description: 'The quality of service and the professionalism displayed by Zygig is unmatched. Their expertise and dedication shine in every project.',
        rating: 4,
    },
    {
        photo: user2,
        name: 'Emma Brown',
        designation: 'Head of Operations',
        company: 'Streamline Tech',
        description: 'Zygig provided outstanding solutions that streamlined our operations and boosted our efficiency. Their team is incredible!',
        rating: 4.5,
    },
    {
        photo: user3,
        name: 'James Wilson',
        designation: 'CTO',
        company: 'InnovateHub',
        description: 'Zygig delivered exceptional results on our recent project. Their innovative approach and expertise set them apart from the competition.',
        rating: 5,
    },
    {
        photo: user6,
        name: 'Olivia Taylor',
        designation: 'Founder',
        company: 'EcoGreen Solutions',
        description: 'The professionalism and dedication of Zygig are truly commendable. Their solutions perfectly aligned with our eco-friendly vision.',
        rating: 4.5,
    },
    {
        photo: user1,
        name: 'Noah Martinez',
        designation: 'Product Designer',
        company: 'DesignPros',
        description: 'Collaborating with Zygig was an enriching experience. Their insights and expertise helped us refine our product design and meet user expectations.',
        rating: 4,
    },
    {
        photo: user2,
        name: 'Sophia Davis',
        designation: 'Marketing Head',
        company: 'BrandElevate',
        description: 'Zygig’s marketing strategies are top-notch. Their innovative campaigns and strategies have taken our brand to new heights.',
        rating: 5,
    },
    {
        photo: user5,
        name: 'Liam Moore',
        designation: 'Operations Manager',
        company: 'LogiTech Systems',
        description: 'Zygig exceeded our expectations with their customized solutions. They tackled complex challenges with ease and professionalism.',
        rating: 4.5,
    },
    {
        photo: user6,
        name: 'Isabella Jackson',
        designation: 'HR Manager',
        company: 'WorkplacePro',
        description: 'Zygig’s expertise in optimizing our processes has been phenomenal. Their team is highly skilled and professional.',
        rating: 4,
    },
    {
        photo: user3,
        name: 'William Anderson',
        designation: 'Chief Analyst',
        company: 'DataEdge Analytics',
        description: 'Zygig’s solutions were instrumental in helping us analyze and leverage data effectively. Their insights are invaluable.',
        rating: 5,
    },
    {
        photo: user2,
        name: 'Charlotte White',
        designation: 'Business Strategist',
        company: 'GrowBeyond Ventures',
        description: 'Zygig provided exceptional support and innovative strategies that helped us achieve our business objectives efficiently.',
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
            Words From Our <br/> <div className="italic">Partners</div>
          </h1>
          <p className="text-base text-gray-400 mt-6">
            See what our clients have to say about their experience with Zygig. Their stories <br />
            speak volumes about the quality of our work and the satisfaction of our clients.
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
