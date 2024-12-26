import FeatureSection from "../components/FeatureSection";
// import Workflow from "./components/Workflow";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
// import Home from "./components/HeroSection";
import HeroSection from "../components/HeroSection";
// import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ"
import Banner from "../components/Banner";
import ProjectsSection from "../components/Projectssection";


const Home = () => {
  return (
    <>
    <div>
        <HeroSection />
        <FeatureSection  />
        {/* <Workflow /> */}
        <Testimonials />
        <ProjectsSection />
        <FAQ />
        <Banner/>
        <Footer />
      </div>
      
    </>
  );
};

export default Home;

