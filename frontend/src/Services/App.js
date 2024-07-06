import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ServicePage1 from './components/ServicePage1';
import PhotoCard from './components/Photocard/PhotoCard';
import Home from './components/Home'
import ITStaff from './components/Services/ITStaff';
import ITStrategy from './components/Services/ITStrategy';
import ITAudits from './components/Services/ITAudits';
import Technical from './components/Services/Technical';
import Cloud from './components/Services/Cloud';
import ITRisk from './components/Services/ITRisk';
import Outsourcing from './components/Services/Outsourcing';
import Project from './components/Services/Project';
import MADue from './components/Services/MADue';
function App() {
  return (
       <Router>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/navbar" element={<Navbar />} />
         <Route path="/ServicePage1" element={<ServicePage1 />} />
         <Route path="/IT-Staff" element={<ITStaff />} />
         <Route path="/IT-Strategy" element={<ITStrategy />} />
         <Route path="/IT-Audits" element={<ITAudits />} />
         <Route path="/Project" element={<Project />} />
         <Route path="/Technical" element={<Technical />} />
         <Route path="/Cloud" element={<Cloud />} />
         <Route path="/IT-Risk" element={<ITRisk />} />
         <Route path="/Outsourcing" element={<Outsourcing />} />
         <Route path="/M&A" element={<MADue />} />
       </Routes>
     </Router>
  );
}

export default App;