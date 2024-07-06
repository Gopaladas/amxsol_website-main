import React, { useState } from "react";
// import "./index.css"; // Import Tailwind CSS
import backgroundImage from "./background.jpg"; // Import the background image
import backgroundVideo from "./background.mp4"; // Import the background video
import SearchIcon from "./search.png"; // Import the search icon SVG
import Logo from "./logo.jpg"; // Import your logo image
// import application from "./images/";
import one from "./images/application-development.jpg";
import two from "./images/cloud-solutions.jpg";
import three from "./images/data-engineering.jpg";
import four from "./images/data-analytics.jpg";
import five from "./images/data-visualization.jpg";
import six from "./images/digital-workplace.jpg";
import seven from "./images/digital-experience.jpg";
import eight from "./images/intelligent-automation.jpg";
import nine from "./images/microsoft-solutions.jpg";
import ten from "./images/mobile-applications.jpg";
import eleven from "./images/technology-integration.jpg";
import twelve from "../assets/ten.jpg";

const experiences = [
  {
    name: "Application Development",
    // image: "/images/application-development.jpg",
    image: one,
    description: [
      "Building robust and scalable applications tailored to your business needs.",
      "Ensuring high security and performance standards.",
    ],
  },
  {
    name: "Cloud Solutions",
    // image: "/images/cloud-solutions.jpg",
    image: two,

    description: [
      "Deploying scalable and cost-effective cloud infrastructure.",
      "Managing cloud resources and optimizing cost efficiency.",
      "Implementing cloud-based applications and services.",
      "Ensuring data security and compliance in cloud environments.",
    ],
  },
  {
    name: "Data Engineering",
    image: three,
    description: [
      "Designing and developing data pipelines for efficient data processing.",
      "Building data warehouses and data lakes for storage and analysis.",
      "Implementing ETL processes to transform and load data.",
      "Utilizing Big Data technologies for handling large volumes of data.",
    ],
  },
  {
    name: "Data Analytics",
    image: four,
    description: [
      "Analyzing data to uncover trends, patterns, and insights.",
      "Creating dashboards and reports for data visualization.",
      "Implementing predictive analytics for forecasting and decision-making.",
    ],
  },
  {
    name: "Data Visualization",
    image: five,
    description: [
      "Creating visual representations of complex data.",
      "Designing interactive charts and graphs for data exploration.",
      "Using tools like Tableau and Power BI for data visualization.",
      "Presenting data insights to stakeholders effectively.",
    ],
  },
  {
    name: "Digital Workplace",
    image: six,
    description: [
      "Implementing collaboration tools for remote teams.",
      "Enhancing employee productivity through digital solutions.",
      "Creating secure and user-friendly digital workspaces.",
    ],
  },
  {
    name: "Digital Experience",
    image: seven,
    description: [
      "Designing intuitive user interfaces and experiences.",
      "Optimizing customer journeys across digital platforms.",
      "Personalizing digital interactions based on user behavior.",
      "Improving customer satisfaction through seamless digital experiences.",
    ],
  },
  {
    name: "./Intelligent Automation",
    image: eight,
    description: [
      "Implementing AI-driven solutions for process optimization.",
      "Integrating robotic process automation (RPA) for efficiency gains.",
      "Enhancing decision-making with intelligent automation.",
    ],
  },
  {
    name: "Microsoft Solutions",
    image: nine,
    description: [
      "Implementing and customizing Microsoft Office 365 applications.",
      "Migrating legacy systems to Microsoft Azure cloud platform.",
      "Supporting Microsoft Dynamics CRM for customer relationship management.",
    ],
  },
  {
    name: "Mobile Applications",
    // image: "/images/mobile-applications.jpg",
    image: ten,
    description: [
      "Developing native and cross-platform mobile applications.",
      "Ensuring mobile apps are responsive and user-friendly.",
      "Integrating with backend systems for real-time data synchronization.",
      "Testing and deploying mobile apps to app stores.",
    ],
  },
  {
    name: "Technology Integration",
    image: eleven,
    description: [
      "Integrating diverse technologies for seamless operations.",
      "Ensuring interoperability and data consistency.",
      "Managing integrations to support business processes.",
    ],
  },
  {
    name: "Devops",
    image: twelve,
    description: [
      "DevOps is a methodology that integrates software development (Dev) and IT operations (Ops) to enhance collaboration and communications between teams,aiming to deliver software more efficiently.",
    ],
  },
];

const TechApp = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleModalClick = (e, experience) => {
    e.stopPropagation(); // Prevent click from bubbling up to parent elements
    setSelectedExperience(experience);
  };

  return (
    <div className="min-h-screen flex flex-col z-0">
      {/* <nav className="bg-gray-800 w-full p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} className="h-8 w-8 mr-4" alt="Logo" />
          {/* Replace with your company name 
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#amxsol"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                AMXSOL
              </a>
            </li>
            <li>
              <a
                href="#business-solutions"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                BUSINESS SOLUTIONS
              </a>
            </li>
            <li>
              <a
                href="#industries"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                INDUSTRIES
              </a>
            </li>
            <li>
              <a
                href="#talent-services"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                TALENT SERVICES
              </a>
            </li>
            <li>
              <a
                href="#ats"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                ATS
              </a>
            </li>
          </ul>
          <img
            src={SearchIcon}
            className="h-6 w-6 cursor-pointer ml-4"
            alt="Search Icon"
          />{" "}
          {/* Search Icon 
        </div>

      </nav> */}

      <div className="relative" style={{ height: "50vh" }}>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-center p-4 rounded">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold relative hover:text-5xl transition-all duration-300">
              Technology Solutions
              {/* <div className="absolute left-0 right-0 bottom-0 border-b-4 border-white"></div> */}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-200">
        <div className="text-left mb-8">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Trying to juggle productivity with cost savings?
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            We get it. In an age of digital transformation, streamlining IT
            operations and maximizing the value of IT investments are top
            priority. System Soft can help create a digital business strategy
            that gives you the flexibility, bandwidth and support your
            enterprise needs for success.
          </p>
        </div>
      </div>

      <div className="text-left mb-8 pt-1">
        <h2 className="text-black text-xl font-extrabold text-black sm:text-2xl">
          We have more than 20 years’ experience with the following:
        </h2>
      </div>

      <div className="relative bg-gray-200 py-12 mb-[-40px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>

        <div className="absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            src={backgroundVideo}
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 "
              >
                {" "}
                {/* Added mb-8 for vertical spacing */}
                <div
                  className="relative group cursor-pointer"
                  onClick={(e) => handleModalClick(e, experience)}
                >
                  <img
                    src={experience.image}
                    alt={experience.name}
                    className="h-60 w-60 object-cover rounded-full transition-transform transform group-hover:scale-110" // Enlarged size
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                    <span className="text-white text-2xl font-bold">
                      {experience.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedExperience && (
        <div
          id="modal-background"
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedExperience(null)}
        >
          <div className="relative bg-white rounded-lg shadow-lg max-w-md w-full text-center p-6">
            <div className="relative">
              <img
                src={selectedExperience.image}
                alt={selectedExperience.name}
                className="w-full object-cover mb-4 rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="text-white text-lg text-left">
                  <h2 className="text-xl font-bold mb-2">
                    {selectedExperience.name}
                  </h2>
                  <ul className="list-disc pl-4">
                    {selectedExperience.description.map((desc, index) => (
                      <li key={index} className="mb-2">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <button
              className="mt-4 mb-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setSelectedExperience(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechApp;
