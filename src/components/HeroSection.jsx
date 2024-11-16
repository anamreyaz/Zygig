import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    
    <div className="font flex flex-col items-center mt-0 sm:mt-0 lg:mt-0 ')]">
   
      <h1 className="font-semibold px-40 text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide text-yellow-500">
        <div>
          14-in-1 Browser Extension
        </div>
        <div>
          Developers And Designers Love
        </div>
      </h1>
      <p className="font-euclid mt-3 text-lg text-center text-white-500 opacity-75 max-w-2xl">
        Unlock your potential with our custom-made digital solutions and academic writing services,
        tailored.
      </p>
      <div className="font-medium text-sm flex justify-center my-6">
        <a href="#" className="border border-yellow-500 px-4 mx-3 rounded-lg flex justify-center gap-2 items-center min-w-40 min-h-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#f59e0b"><path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM14 11V13H16V11H14ZM8 11V13H10V11H8Z"></path></svg>
          Hire Us
        </a>
        <a href="#" className="border border-yellow-500 px-4 mx-3 rounded-lg flex justify-center gap-2 items-center min-w-40 min-h-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#f59e0b"><path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM14 11V13H16V11H14ZM8 11V13H10V11H8Z"></path></svg>
          About Us
        </a>
      </div>
      {/* max-w-4xl */}
      <div className="">
      {/* min-w-6xl md:w-1/2 lg:w-1/3 h-auto */}
      <img 
        src="/src/assets/hero.png" alt="Description" className="relative w-full min-h-screen bg-transparent grid place-items-center -mt-32 "
/>
      </div>
      {/* <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 ">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4">
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  );
};

export default HeroSection;
