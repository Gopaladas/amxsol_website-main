import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import backgroundImage from "./background.jpg";
import page1Image from "./page1.jpg";
import page2Image from "./page2.jpg";
import page3Image from "./page3.webp";
import page4Image from "./page4.webp";
import page5Image from "./page5.webp";

// CSS for bullet point style
const bulletPointStyle = {
  display: "inline-block",
  width: "2em",
  fontSize: "1.2em",
  marginRight: "0.5em",
};

const services = [
  {
    id: 1,
    title: "Engineering Staffing Service",
    image: page5Image,
    description:
      "Engineering Recruiters are always in high demand. Companies need a staffing firm that can find the best in the fields they need. At TALENT, we can provide that through expert recruiting and consulting. We work together with companies to understand what they want in a candidate. In engineering, we offer you the best candidate from around the globe, who not only has the right work experience in a specified stream but, also has the capability and understands the technicalities of the position being offered.",
    points: [
      "Software Engineers",
      "Aerospace Engineers",
      "Civil Engineers",
      "Environmental Engineers",
      "Bio-Medical Engineers",
      "Automation & Robotics Engineers",
      "Cyber Security Engineers",
      "Data Scientist",
      "Data Analyst",
    ],
    backgroundColor: "#f8b400",
  },
  {
    id: 2,
    title: "Professional Staffing Service",
    image: page4Image,
    description:
      "TALENT draws on over 30 years of insight and knowledge on Professional Services Staffing to help you navigate through complexities by finding you the best people that will give you the strategic edge you’re looking for. Whatever positions you need to fill: program and project managers, industry subject matter experts, or experienced business analysts, TALENT will find you the best available consultants in the market. TALENT has a proven track record of providing our clients with solutions that are both effective and cost-efficient.",
    points: [
      "Analytics",
      "Digital Marketing",
      "Change Management",
      "Finance",
      "Fintech",
      "Office Management",
      "BPO",
      "Auditing",
      "Marketing",
      "Project and Program Management",
    ],
    backgroundColor: "#36cfc9",
  },
  {
    id: 3,
    title: "Industrial Staffing Service",
    image: page3Image,
    description:
      "We provide skilled workers for manufacturing, logistics, and industrial sectors, helping you maintain operational efficiency and productivity.",
    points: [
      "Production line workers",
      "Warehouse management",
      "Supply chain specialists",
    ],
    backgroundColor: "#ff7875",
  },
  {
    id: 4,
    title: "Information Technology Staffing Service",
    image: page1Image,
    description:
      "Information technology staffing services for the business market can be dynamic. Whether you need services in enterprise applications, data management, or infrastructure, we’ve got the TALENT for every position. Some recruiting firms just hand out piles of resumes, at TALENT we take the time to listen to your needs and provide IT staffing solutions that go above and beyond your expectations.",
    points: [
      "Web Development",
      "Custom Development",
      "ERP",
      "Quality Assurance",
      "AI",
      "Automation",
      "Cloud",
      "CI/CD",
      "DevOps",
      "Cyber Security",
      "Data Management",
      "IOT",
      "Application Development",
      "Infrastructure",
      "PM",
      "Production/Operations",
      "Quality Assurance",
      "System Architecture",
      "Network/Telecom",
      "Technical Writing",
      "Software Testing",
    ],
    backgroundColor: "#85b1ff",
  },
  {
    id: 5,
    title: "Digital Staffing Service",
    image: page2Image,
    description:
      "Digital Staffing Services Companies are always in need of people who can think outside the box and bring creative energy to their organizations. TALENT is equipped to find professionals with skills in Digital Services, where the deliverables are first built upon the context of products and services and then creation takes place to enhance operational capabilities and stakeholder’s experience.",
    points: [
      "Application Modernization",
      "Cloud",
      "SEO/SEM",
      "Social Media Marketing Experts",
      "Ingenuine Content Writers",
      "Social",
      "Mobility",
      "Idea to Prototype",
      "Share Vision and Opportunities",
      "Gather Feedback, Adapt, Build, Test, and Deploy solutions",
      "Identify the Best-of-Breed Concepts",
      "Digital Omni-channel Experience",
      "IoT, Analytics, and Mobility to Improve Customer Experience",
      "Customer Journey on Path to Purchase",
    ],
    backgroundColor: "#d3adf7",
  },
];

const Talent = () => {
  const [expandedServiceId, setExpandedServiceId] = useState(null);
  const expandedRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (expandedRef.current && !expandedRef.current.contains(event.target)) {
        setExpandedServiceId(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleServiceClick = (id) => {
    setExpandedServiceId(id);
  };

  const handleCloseClick = () => {
    setExpandedServiceId(null);
  };

  return (
    <div className="relative min-h-screen z-0">
      <div
        className="relative h-1/2 md:h-1/3 lg:h-1/2"
        style={{ height: "50vh" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})`, height: "50vh" }}
        >
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-white text-5xl font-bold mb-4 shadow-lg">
              <span className="bg-clip-text text-transparent">
                AMXSOL TALENT SERVICES
              </span>
            </h1>
            <p className="text-white text-xl font-medium shadow-md mb-2">
              Providing businesses with top quality talent at a lower cost.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-8 bg-blue-100 ">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Finding the right talent takes a lot of time and expertise
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Our strategic solutions help to simplify the recruiting process by
          giving you access to our extensive talent community. We serve clients
          from tech startups and mid-market organizations to the Fortune 100.
        </p>
      </div>
      <div className="p-8 min-h-screen overflow-auto ">
        <h1 className="text-3xl font-bold mb-8 text-left">
          We provide the following services:
        </h1>
        <div className="flex flex-wrap -mx-4">
          {services.map((service) => (
            <div key={service.id} className="w-full  md:w-1/2 lg:w-1/3 p-4">
              <div
                className="service-card rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer hover:scale-90"
                style={{ backgroundColor: service.backgroundColor }}
                onClick={() => handleServiceClick(service.id)}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-medium mb-2">{service.title}</h2>
                </div>
              </div>
              {expandedServiceId === service.id && (
                <div
                  ref={expandedRef}
                  className="expanded-box mt-4 bg-pink-900 p-6 rounded-lg shadow-lg"
                  style={{ backgroundColor: service.backgroundColor }}
                >
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg mb-4 text-white hover:text-blue-900">
                    {service.description}
                  </p>
                  <h1 className="the-h1 text-4xl text-blue-400 font-bold ">
                    The Key Services we Provide are:
                  </h1>
                  <ul className="list-disc list-inside mt-0 text-white">
                    {service.points.map((point, index) => (
                      <li
                        key={index}
                        className="text-lg mb-2 flex items-center hover:scale-120 hover:text-red-500"
                      >
                        <span style={bulletPointStyle}>.</span> {point}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
                    onClick={handleCloseClick}
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Talent;
