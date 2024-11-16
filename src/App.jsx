import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import FeatureSection from "./components/FeatureSection";
// import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="font-bold max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Services" element={<FeatureSection />} />
          <Route path="/Industries" element={<div className="font-bold">Industries </div>} />
          <Route path="/Projects" element={<div>Projects Section</div>} />
          <Route path="/Testimonials" element={<Testimonials />} />
          {/* <Route path="/Workflow" element={<Workflow />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;




