import FeatureSection from "../components/FeatureSection";
// import Workflow from "./components/Workflow";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
// import Home from "./components/HeroSection";
import HeroSection from "../components/HeroSection";
// import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ"
import Banner from "../components/Banner";


const Home = () => {
  return (
    <>
    {/* <div className="bg-[url('/src/assets/mainbgimg.jpg')] bg-contain insert-0 bg-opacity-100 z-10"> */}
    <div>
        {/* <Navbar /> */}
        <HeroSection />
        <FeatureSection  />
        {/* <Workflow /> */}
        <Testimonials />
        <FAQ />
        <Banner/>
        <Footer />
      </div>
      
    </>
  );
};

export default Home;

