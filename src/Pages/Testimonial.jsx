import { testimonials } from "../constants";
import Footer from "../components/Footer";

const Testimonial = () => {
  return (
    <div>
    <div className="font flex flex-col items-center mt-16 sm:mt-14 lg:-m-6  ')]">
      <h1 className="font-semibold px-40 text-2xl sm:text-3xl lg:text-4xl text-center tracking-wide text-yellow-500">
        What People are saying
      </h1>
      <p className="font-euclid mt-2 text-lg text-center text-white-500 opacity-75 max-w-2xl">
        Unlock your potential with our custom-made digital solutions and academic writing services,
        tailored.
      </p>
      <div className="flex flex-wrap mt-5 justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
    <div className="ml-10"><Footer /></div>
    </div>
  );
};

export default Testimonial;
