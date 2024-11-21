//Services Section of Home Page
import { features } from "../constants";
import CardGrid from "./CardGrid";

const FeatureSection = () => {
  return (
    <div className="relative -mt-44 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="font-semibold bg-neutral-900 text-2xl sm:text-3xl lg:text-4xl mt-10 lg:mt-20 tracking-wide text-yellow-500 rounded-full h-6 px-10 py-2 uppercase">
        Services we provide
        </span>
        <h2 className="font-euclid mt-5 text-lg text-center text-white-500 opacity-75 min-w-xl flex justify-center items-center px-64">
        Stop wasting your time on tedious debugging with DevTools and experience the ease with SuperDev Pro.
        </h2>
      </div>


      <div>
      < CardGrid/>
      </div>




      {/* <div className="cards max-w-6xl">
        <div className=" mx-auto p-6 bg-[#1c1c1f] rounded-3xl shadow-xl"> */}
        {/* Card Content */}
          {/* <h2 className="text-4xl font-bold text-white mb-4">Edit Text in Real-time</h2> 
          <p className="text-gray-300 text-lg mb-8">
          Need to edit the text on a website in real-time? Edit it on the 
          fly as if you are typing in a document, easy peasy!
          </p> */}
        {/* Image Container */}
          {/* <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-orange-400 via-blue-500 to-purple-600 p-[2px]">
            <div className="relative w-full aspect-[16/9] bg-[#1c1c1f] rounded-2xl overflow-hidden">
              <img src="/path/to/your-screenshot.jpg" alt="Real-time text editor interface" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div> */}
      
      {/* <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default FeatureSection;
