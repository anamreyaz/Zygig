import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from "./components/Home";
// import FeatureSection from "./components/FeatureSection";
// import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Testimonial from './Pages/Testimonial';
import Home from './Pages/Home';
import ServicesPage from './Pages/Services';
import PrivacyPolicyPage from './Pages/Privacy';
import CookiePage from './Pages/Cookie';
import TermsAndConditionsPage from './Pages/Terms';
import FAQPage from './Pages/FAQs';
import AboutUsPage from './Pages/AboutUs';
import ContactUsPage from './Pages/ContactUs';
import WhyChooseUsPage from './Pages/WhyChooseUs';
import ProjectsPage from './Pages/Project';

const App = () => {
  return (
    <Router >
      
      <div className='header'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Services" element={<ServicesPage />} />
          {/* <Route path="/Industries" element={<div className="font-bold">Industries </div>} /> */}
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Projects" element={<ProjectsPage />} />
          <Route path="/Privacy" element={<PrivacyPolicyPage />} />
          <Route path="/Cookie" element={<CookiePage />} />
          <Route path="/Terms" element={<TermsAndConditionsPage />} />
          <Route path="/FAQs" element={<FAQPage />} />
          <Route path="/AboutUs" element={<AboutUsPage />} />
          <Route path="/ContactUs" element={<ContactUsPage/>} />
          <Route path="/WhyChooseUs" element={<WhyChooseUsPage />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;




