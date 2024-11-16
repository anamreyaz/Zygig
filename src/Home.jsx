import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
// import Home from "./components/HeroSection";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <>
    {/* <div className="bg-[url('/src/assets/mainbgimg.jpg')] bg-contain insert-0 bg-opacity-100 z-10"> */}
    <div className="max-w-6xl pt-8 mx-auto px-6">
        <HeroSection/>
        <FeatureSection />
        {/* <Workflow /> */}
        <Testimonials />
        {/* <Footer /> */}
      </div>
      
    </>
  );
};

export default Home;

