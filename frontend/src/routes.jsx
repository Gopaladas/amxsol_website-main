// Routes.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
// import Navbar from "./Navbar/Navbar";
// import Navbar1 from "./Navbar/Navbar1";

// import Navbar from "./components/Navbar";

// import Navbar from "./components/Navbar";

import Home from "./Home";
import AboutUs from "./AboutUs";
import ServicePage1 from "./components/ServicePage1";
import Footer from "./Footer";
import Talent from "./talent/talent";
// import App from "./App";
// import Navbar from "./components/Navbar";
import Business from "./Business/business";
// import TechApp from "./carrers/carrer";
import TechApp from "./tech/tech";
import CarrerApp from "./carrer/App";
// import Home from "./components/";
// import Navbar from "./newNav/Navbar/index";
import Navbar from "./changednav/components/Navbar";
import ContactApp from "./contact/App";
// import ModernNav from "./ModernNav/ModernNav";
import IndustrySection from "./industries/Industries";
import ServicePage12 from "./Academy_codes/Academy";
import FoundationApp from "./foundation/App";
import Aerospace from "./Amxsol_Industries/Industries/Aerospace";
import Automotive from "./Amxsol_Industries/Industries/Automotive";
import Banking from "./Amxsol_Industries/Industries/Banking";
import Newsroom from "./Amxsol_Industries/Newsroom/Newsroom";
// import Aerospace from "./Amxsol_Industries/Industries/Aerospace/Aerospace";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* <Route path="/talentservices" element={<ServicePage1 />} /> */}
        <Route path="/business" element={<Business />} />
        <Route path="/tech" element={<TechApp />} />
        <Route path="/carrer" element={<CarrerApp />} />
        <Route path="/services" element={<ServicePage1 />} />
        <Route path="/contact" element={<ContactApp />} />
        <Route path="/talent" element={<Talent />} />
        <Route path="/industries" element={<IndustrySection />} />
        <Route path="/academy" element={<ServicePage12 />} />
        <Route path="/foundation" element={<FoundationApp />} />
        {/* <Route path="/aerospace" element={<Aerospace/>} /> */}
        <Route path="/aerospace" element={<Aerospace />} />
        <Route path="/automotive" element={<Automotive />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/newsroom" element={<Newsroom />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
