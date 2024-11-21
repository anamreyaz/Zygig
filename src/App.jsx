import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import FeatureSection from "./components/FeatureSection";
// import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Testimonial from './Pages/Testimonial';
import Home from './Pages/Home';
import ServiceList from './Pages/Services';

const App = () => {
  return (
    <Router >
      <Navbar />
      <div className="font-bold lg:max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Services" element={<ServiceList />} />
          {/* <Route path="/Industries" element={<div className="font-bold">Industries </div>} /> */}
          <Route path="/Projects" element={<div>Projects Section</div>} />
          <Route path="/Testimonial" element={<Testimonial />} />
          {/* <Route path="/Workflow" element={<Workflow />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;




