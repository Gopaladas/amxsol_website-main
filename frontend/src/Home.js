import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import {
  FaTasks,
  FaProjectDiagram,
  FaIndustry,
  FaUsers,
  FaCogs,
  FaChartLine,
  FaGlobe,
  FaUserTie,
  FaDigitalTachograph,
  FaCloud,
  FaDatabase,
  FaServer,
  FaInfinity,
} from "react-icons/fa";
import one from "./one.mp4";
import two from "./two.mp4";
import DivisionCard from "./DivisionCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resolvedIssues, setResolvedIssues] = useState(0);
  const [finishedProjects, setFinishedProjects] = useState(0);
  const [industrySolutions, setIndustrySolutions] = useState(0);
  const [newMetricOne, setNewMetricOne] = useState(0);
  const [newMetricTwo, setNewMetricTwo] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for backward
  const servicesContainerRef = useRef(null);
  const [showGrid, setShowGrid] = useState(false);
  // Function to toggle between grid view and scrolling view
  const toggleGridView = () => {
    setShowGrid(!showGrid);
  };

  const divisions = [
    {
      title: "AMXSOL Digital",
      tagline: "IT Services and IT Consulting",
      link: "https://www.linkedin.com/showcase/amxsoldigital/",
    },
    {
      title: "AMXSOL Talent Services",
      tagline: "Business Consulting and Services",
      link: "https://www.linkedin.com/showcase/amxsoltalentservices/",
    },
    {
      title: "AMXSOL Health Care",
      tagline: "Hospitals and Health Care",
      link: "https://www.linkedin.com/showcase/amxsolhealthcare/",
    },
    {
      title: "AMXSOL Academy",
      tagline: "E-Learning Providers",
      link: "https://www.linkedin.com/showcase/amxsolacademy/",
    },
    // {
    //   title: "AMXSOL Instagram",
    //   tagline: "Follow us on Instagram",
    //   link: "https://www.instagram.com/amxsol.us/",
    // },
  ];

  const steps = [
    {
      step: 1,
      icon: "fas fa-briefcase", // Example icon class
      subtitle: "Planning",
      title: "Step One: Planning",
      borderColor: "#FF5733", // Example color
      topArcColor: "#FFBD33",
      bottomArcColor: "#FF5733",
    },
    {
      step: 2,
      icon: "fas fa-cogs",
      subtitle: "Execution",
      title: "Step Two: Execution",
      borderColor: "#33FF57",
      topArcColor: "#33FFBD",
      bottomArcColor: "#33FF57",
    },
    {
      step: 3,
      icon: "fas fa-chart-line",
      subtitle: "Monitoring",
      title: "Step Three: Monitoring",
      borderColor: "#3357FF",
      topArcColor: "#33BDFF",
      bottomArcColor: "#3357FF",
    },
    {
      step: 4,
      icon: "fas fa-award",
      subtitle: "Completion",
      title: "Step Four: Completion",
      borderColor: "#FF33A8",
      topArcColor: "#FF33BD",
      bottomArcColor: "#FF33A8",
    },
  ];

  const services2 = [
    {
      title: "Manufacturing",
      image: "/images/service/18.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "Wholesale & Distribution",
      image: "/images/service/19.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "Retail",
      image: "/images/service/20.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "Professional Services",
      image: "/images/service/21.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "Healthcare and Life Sciences",
      image: "/images/service/22.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "Food and Beverages",
      image: "/images/service/23.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "Real Estate Construction",
      image: "/images/service/24.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "Automotive",
      image: "/images/service/11.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "Chemicals",
      image: "/images/service/12.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "Agriculture",
      image: "/images/service/13.jpg",
      backgroundImage: "/icon-19.png",
      link: "service-details-2#",
    },
    {
      title: "Engineering Construction",
      image: "/images/service/14.jpg",
      backgroundImage: "/icon-19.png",
      link: "service-details-3#",
    },
    {
      title: "Non-Profit Organizations",
      image: "/images/service/15.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "Energy and Utilities",
      image: "/images/service/16.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
    {
      title: "Textiles",
      image: "/images/service/17.jpg",
      backgroundImage: "/icon-19.png",
      link: "#",
    },
  ];

  const images = [
    {
      src: "/banner-1.jpg",
      title: "Showing You the Way of Success",
      tagline: "Guiding your business to success through innovative solutions.",
    },
    {
      src: "/banner-2.jpg",
      title: "Business and Individual Consulting",
      tagline: "Tailored consulting services for businesses and individuals.",
    },
    {
      src: "/banner-3.jpg",
      title: "Ideas for Your Better Growth",
      tagline: "Innovative ideas to foster your business growth.",
    },
  ];

  useEffect(() => {
    // Add animation to title when currentIndex changes
    const titles = document.querySelectorAll(".carousel-item h2");
    titles.forEach((title) => {
      title.classList.remove("animate-fade-in");
      void title.offsetWidth; // Trigger reflow
      title.classList.add("animate-fade-in");
    });
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const intervalResolved = setInterval(() => {
      if (resolvedIssues < 150) {
        setResolvedIssues((prevCount) => prevCount + 1);
      }
    }, 20);

    const intervalProjects = setInterval(() => {
      if (finishedProjects < 400) {
        setFinishedProjects((prevCount) => prevCount + 1);
      }
    }, 10);

    const intervalSolutions = setInterval(() => {
      if (industrySolutions < 30) {
        setIndustrySolutions((prevCount) => prevCount + 1);
      }
    }, 30);

    const intervalNewMetricOne = setInterval(() => {
      if (newMetricOne < 70) {
        setNewMetricOne((prevCount) => prevCount + 1);
      }
    }, 25);

    const intervalNewMetricTwo = setInterval(() => {
      if (newMetricTwo < 100) {
        setNewMetricTwo((prevCount) => prevCount + 1);
      }
    }, 15);

    return () => {
      clearInterval(intervalResolved);
      clearInterval(intervalProjects);
      clearInterval(intervalSolutions);
      clearInterval(intervalNewMetricOne);
      clearInterval(intervalNewMetricTwo);
    };
  }, [
    resolvedIssues,
    finishedProjects,
    industrySolutions,
    newMetricOne,
    newMetricTwo,
  ]);

  const services = [
    {
      number: "1",
      title: "Enterprise Resource Planning",
      description:
        "ERP software integrates all of a company's core business processes.",
      icon: <FaChartLine className="text-blue-600 text-4xl" />,
      color: "blue-600",
    },
    {
      number: "2",
      title: "Web Technologies",
      description:
        "Tools and techniques used to design, develop, and maintain websites.",
      icon: <FaGlobe className="text-green-600 text-4xl" />,
      color: "green-600",
    },
    {
      number: "3",
      title: "Talent Services",
      description:
        "Our Talent Services provide comprehensive solutions for workforce management and talent acquisition.",
      icon: <FaUsers className="text-purple-600 text-4xl" />,
      color: "purple-600",
    },
    {
      number: "4",
      title: "Recruitment Process Outsourcing",
      description:
        "Strategic business decision to entrust recruitment activities.",
      icon: <FaUserTie className="text-red-600 text-4xl" />,
      color: "red-600",
    },
    {
      number: "5",
      title: "Digital Marketing",
      description:
        "Use of the internet, mobile devices, social media, and other digital channels.",
      icon: <FaDigitalTachograph className="text-purple-600 text-4xl" />,
      color: "purple-600",
    },
    {
      number: "6",
      title: "Domain Registration",
      description:
        "Process of claiming a unique name for your website on the internet.",
      icon: <FaGlobe className="text-yellow-600 text-4xl" />,
      color: "yellow-600",
    },
    {
      number: "7",
      title: "SAP Support",
      description:
        "Support options for customers based on their specific needs.",
      icon: <FaCloud className="text-blue-600 text-4xl" />,
      color: "blue-600",
    },
    {
      number: "8",
      title: "SAP Rollout & Migration",
      description:
        "Key distinction between an SAP rollout and an SAP migration.",
      icon: <FaServer className="text-orange-600 text-4xl" />,
      color: "orange-600",
    },
    {
      number: "9",
      title: "SAP Cloud & Hosting",
      description: "Running SAP software on the cloud.",
      icon: <FaCloud className="text-gray-600 text-4xl" />,
      color: "gray-600",
    },
    {
      number: "10",
      title: "SAP Maintenance & Licenses",
      description:
        "Ensuring ongoing functionality and legal compliance of SAP software.",
      icon: <FaDatabase className="text-brown-600 text-4xl" />,
      color: "brown-600",
    },
  ];

  const reasons = [
    {
      title: "Artificial Intelligence (AI)",
      description: "Machine Learning (ML), Natural Language Processing (NLP).",
      p: "A tool",
    },
    {
      title: "Data Analytics",
      description: "Data Collection, Data Transformation, Data Analysis.",
      p: "a",
    },
    {
      title: "Internet of Things (IoT)",
      description: "Connected Devices, Data Communication, Applications.",
      p: "A tool",
    },
    {
      title: "Mobile Applications",
      description: "Native Apps, Web Apps, Hybrid Apps.",
      p: "A tool",
    },
    {
      title: "SEO, SEM, SMO, SMM",
      description: "Goal, Techniques, Benefits,Integration,Collaboration.",
      p: "A tool",
    },
    {
      title: "Staffing & Recruitment",
      description: "Focus, Process, Employer Branding & Development.",
      p: "A tool",
    },
  ];

  useEffect(() => {
    const servicesContainer = servicesContainerRef.current;

    const scrollInterval = setInterval(() => {
      if (servicesContainer) {
        const maxScrollLeft =
          servicesContainer.scrollWidth - servicesContainer.clientWidth;

        if (
          scrollDirection === 1 &&
          servicesContainer.scrollLeft >= maxScrollLeft
        ) {
          setScrollDirection(-1);
        } else if (
          scrollDirection === -1 &&
          servicesContainer.scrollLeft <= 0
        ) {
          setScrollDirection(1);
        }

        servicesContainer.scrollBy({
          left: scrollDirection * 200,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [scrollDirection]);

  return (
    // <div className="container mx-auto px-4 relative top-[-20px]">
    //   <div className="container mx-auto px-4">
    //     <div className="carousel-container relative w-full max-w-screen-xl mx-auto overflow-hidden shadow-lg mb-8">
    //       <div
    //         className="carousel flex transition-transform duration-500"
    //         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    //       >
    //         {images.map((image, index) => (
    //           <div key={index} className="carousel-item min-w-full relative">
    //             <img
    //               src={image.src}
    //               alt="e4dd Banner"
    //               className={`w-full h-auto object-cover ${
    //                 currentIndex === index ? "zoom-in" : "zoom-out"
    //               }`}
    //             />
    //             <div className="carousel-content absolute top-1/2 left-4 transform -translate-y-1/2 md:top-1/3 md:left-8 lg:top-1/3 lg:left-12 text-white p-2 md:p-4 lg:p-6 bg-opacity-50 rounded">
    //               <h2 className="text-sm md:text-3xl lg:text-5xl font-bold bg-opacity-70 p-0.5 md:p-2 lg:p-3 rounded animate-fade-in">
    //                 {image.title}
    //               </h2>
    //               <p className="text-xs md:text-xl lg:text-2xl mt-0.5 md:mt-2 lg:mt-3">
    //                 <span className="inline-block bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 bg-opacity-70 text-transparent bg-clip-text p-0.5 md:p-2 lg:p-3 rounded">
    //                   {image.tagline}
    //                 </span>
    //               </p>
    //               <div className="text-left mt-2 md:mt-4 lg:mt-6">
    //                 <Link
    //                   to="/service"
    //                   className="inline-block py-1 px-2 md:py-2 md:px-6 lg:py-2 lg:px-6 bg-orange-500 text-white text-sm md:text-base lg:text-lg font-semibold rounded-lg transition-colors duration-700"
    //                   style={{
    //                     backgroundImage:
    //                       "linear-gradient(45deg, #FFA500, #FF4500)", // initial gradient
    //                     transition:
    //                       "background 0.5s ease-in-out, color 0.5s ease-in-out",
    //                   }}
    //                   onMouseEnter={(e) => {
    //                     e.currentTarget.style.backgroundImage =
    //                       "linear-gradient(45deg, #1E90FF, #32CD32, #FF69B4)"; // hover gradient
    //                     e.currentTarget.style.color = "black"; // hover text color
    //                   }}
    //                   onMouseLeave={(e) => {
    //                     e.currentTarget.style.backgroundImage =
    //                       "linear-gradient(45deg, #FFA500, #FF4500)"; // initial gradient
    //                     e.currentTarget.style.color = "white"; // initial text color
    //                   }}
    //                 >
    //                   Services & Plan
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>

    //   <style jsx global>{`
    //     html,
    //     body {
    //       margin: 0;
    //       padding: 0;
    //       width: 100%;
    //       height: 100%;
    //       overflow-x: hidden; /* Prevent horizontal scrolling */
    //       box-sizing: border-box; /* Include padding and border in the element's total width and height */
    //     }

    //     *,
    //     *::before,
    //     *::after {
    //       box-sizing: inherit; /* Inherit the box-sizing property for all elements */
    //     }

    //     .container {
    //       padding: 0;
    //       margin: 0;
    //       width: 100%;
    //       max-width: calc(100vw); /* Adjust to include scrollbar width */
    //       overflow-x: hidden; /* Prevent horizontal scrolling within the container */
    //     }

    //     .carousel-container {
    //       width: 100%;
    //       margin: 0;
    //       overflow-x: hidden; /* Prevent horizontal scrolling within the carousel container */
    //     }

    //     .carousel-item {
    //       width: 100%;
    //     }

    //     img {
    //       width: 100%;
    //       height: auto;
    //     }

    //     header,
    //     nav {
    //       width: 100%;
    //       margin: 0;
    //       padding: 0;
    //       max-width: calc(
    //         100vw
    //       ); /* Ensure the header and nav do not exceed the viewport width */
    //     }

    //     section {
    //       width: 100%;
    //       padding: 0;
    //       margin: 0;
    //       max-width: calc(
    //         100vw
    //       ); /* Ensure the section does not exceed the viewport width */
    //     }

    //     @media (max-width: 1024px) {
    //       .container,
    //       .carousel-container,
    //       .carousel-item,
    //       header,
    //       nav,
    //       section {
    //         max-width: 100vw; /* Reset to 100vw for smaller screens where scrollbar width is less of an issue */
    //       }
    //     }
    //   `}</style>

    <div className="w-full mx-auto relative">
      <div className="relative">
        <div className="w-full overflow-hidden shadow-lg mb-8 px-0">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%) ` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full relative">
                <img
                  src={image.src}
                  alt="e4dd Banner"
                  className={`w-full h-auto object-cover ${
                    currentIndex === index ? "zoom-in" : "zoom-out"
                  }`}
                />
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 md:top-1/3 md:left-8 lg:top-1/3 lg:left-12 text-white p-2 md:p-4 lg:p-6 bg-opacity-50 rounded">
                  <h2 className="text-sm md:text-3xl lg:text-5xl font-bold bg-opacity-70 p-0.5 md:p-2 lg:p-3 rounded animate-fade-in">
                    {image.title}
                  </h2>
                  <p className="text-xs md:text-xl lg:text-2xl mt-0.5 md:mt-2 lg:mt-3">
                    <span className="inline-block bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 bg-opacity-70 text-transparent bg-clip-text p-0.5 md:p-2 lg:p-3 rounded">
                      {image.tagline}
                    </span>
                  </p>
                  <div className="text-left mt-2 md:mt-4 lg:mt-6">
                    <Link
                      to="/service"
                      className="inline-block py-1 px-2 md:py-2 md:px-6 lg:py-2 lg:px-6 bg-orange-500 text-white text-sm md:text-base lg:text-lg font-semibold rounded-lg transition-colors duration-700"
                      style={{
                        backgroundImage:
                          "linear-gradient(45deg, #FFA500, #FF4500)", // initial gradient
                        transition:
                          "background 0.5s ease-in-out, color 0.5s ease-in-out",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundImage =
                          "linear-gradient(45deg, #1E90FF, #32CD32, #FF69B4)"; // hover gradient
                        e.currentTarget.style.color = "black"; // hover text color
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundImage =
                          "linear-gradient(45deg, #FFA500, #FF4500)"; // initial gradient
                        e.currentTarget.style.color = "white"; // initial text color
                      }}
                    >
                      Services & Plan
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx global>{`
          html,
          body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow-x: hidden;
          }

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          .carousel-container {
            width: 100%;
            margin: 0;
            overflow-x: hidden;
            padding: 0;
          }

          .carousel-item {
            width: 100%;
          }

          img {
            width: 100%;
            height: auto;
          }

          header,
          nav {
            width: 100%;
            margin: 0;
            padding: 0;
            max-width: 100vw;
          }

          section {
            width: 100%;
            padding: 0;
            margin: 0;
            max-width: 100vw;
          }

          @media (max-width: 1024px) {
            .container,
            .carousel-container,
            .carousel-item,
            header,
            nav,
            section {
              max-width: 100vw;
            }
          }
        `}</style>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-8 py-2">
        <div className="circle-container relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 overflow-hidden rounded-full shadow-lg mb-4 md:mb-0">
          <img
            src="/about-1.jpg"
            alt="RSBlooming Team"
            className="w-full h-full object-cover rounded-full"
          />
          <div className="text-overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <div className="years text-4xl md:text-4xl lg:text-5xl font-bold">
              20
            </div>
            <div className="experience text-lg md:text-lg lg:text-xl">
              Years Experience
            </div>
          </div>
        </div>

        <div className="flex-1 md:ml-8 " style={{ marginTop: "-20px" }}>
          <div className="flex items-center justify-center w-full my-8">
            <div className="flex-grow border-t-2 border-gray-700 wavy-border"></div>
            <span className="mx-4 text-2xl text-blue-500">★</span>
            <h1 className="text-4xl font-bold font-cinzel mx-4">
              AMXSOL <FaInfinity className="text-red-800" /> Possibilities
            </h1>
            <span className="mx-4 text-2xl text-green-500">★</span>
            <div className="flex-grow border-t-2 border-gray-700 wavy-border"></div>
          </div>

          <p className="mt-4 text-center md:text-left">
            Handling tough Work tasks. Giving Futures to your Business not Just,
            Let's Grow Together Giving wings to financial dreams.
          </p>

          <div className="flex items-center justify-center md:justify-start w-full my-8">
            <div className="flex-grow border-t-2 border-gray-700 diamond-border"></div>
            <span className="mx-4 text-2xl text-purple-500">◆</span>
            <h2
              id="about"
              className="text-4xl font-semi-bold font-cinzel mx-4 my-0"
            >
              About Us
            </h2>

            <span className="mx-4 text-2xl text-red-500">◆ </span>
            <div className="flex-grow border-t-2 border-gray-700 diamond-border"></div>
          </div>

          <h3 className="text-2xl font-semibold mt-8 text-center md:text-left">
            Experts in Providing IT Solutions.
          </h3>

          <ul className="mt-4 space-y-4 text-center md:text-left">
            <li className="flex items-center text-2xl text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out transform hover:scale-105">
              <svg
                className="w-6 h-6 mr-2 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              Business Solutions
            </li>
            <li className="flex items-center text-2xl text-gray-700 hover:text-blue-500 transition duration-200 ease-in-out transform hover:scale-105">
              <svg
                className="w-6 h-6 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              Talent Solutions
            </li>
          </ul>

          <p className="mt-4 text-center md:text-left">
            AMXSOL, a leading Business Partner, empowers small and mid-sized
            businesses worldwide. Our headquarters are in Hyderabad, India, but
            we serve clients globally. We specialize in innovative IT solutions
            that optimize your operations and drive sustainable growth.
          </p>

          <Link
            to="/aboutus"
            className="inline-block mt-4 py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg relative overflow-hidden transition duration-900 ease-in-out transform hover:scale-105 focus:scale-105 focus:outline-none text-center md:text-left"
            style={{
              backgroundImage: "linear-gradient(45deg, #FFA500, #FF4500)", // initial gradient
              transition: "background 0.5s ease-in-out, color 0.5s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundImage =
                "linear-gradient(45deg, #1E90FF, #32CD32, #FF69B4)"; // hover gradient
              e.currentTarget.style.color = "black"; // hover text color
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundImage =
                "linear-gradient(45deg, #FFA500, #FF4500)"; // initial gradient
              e.currentTarget.style.color = "white"; // initial text color
            }}
          >
            <span className="absolute left-0 top-0 w-full h-full bg-blue-600 opacity-0 transition duration-300 ease-in-out transform hover:opacity-100"></span>
            <span className="relative z-10">More About Us</span>
          </Link>
        </div>
      </div>

      <section className="my-8">
        <div className="text-center">
          <div className="flex items-center justify-center w-full my-8">
            <div className="flex-grow border-t-2 border-black diamond-border"></div>
            <span className="mx-4 text-3xl text-purple-500">❖</span>
            <h2 className="text-4xl font-bold font-cinzel text-center mx-4 my-0">
              Numbers Speak for Themselves
            </h2>
            <span className="mx-4 text-3xl text-purple-500">❖</span>
            <div className="flex-grow border-t-2 border-black diamond-border"></div>
          </div>

          <p className="mt-4">Here's What We Achieved So Far</p>
        </div>
        <div className="mt-2 flex flex-wrap justify-center space-x-6 md:flex-nowrap">
          <div className="message-bubble text-center bg-purple-200 p-4 rounded-lg w-full sm:w-1/2 lg:w-auto mb-4 md:mb-0 mx-1">
            <FaUsers className="text-4xl text-purple-600" />
            <p className="text-4xl font-bold">{newMetricOne}</p>
            <p>New Users</p>
          </div>
          <div className="message-bubble text-center bg-blue-200 p-4 rounded-lg w-full sm:w-1/2 lg:w-auto mb-4 md:mb-0 mx-1">
            <FaTasks className="text-4xl text-blue-600" />
            <p className="text-4xl font-bold">{resolvedIssues}</p>
            <p>Daily Issues Resolved</p>
          </div>
          <div className="message-bubble text-center bg-green-200 p-4 rounded-lg w-full sm:w-1/2 lg:w-auto mb-4 md:mb-0 mx-1">
            <FaProjectDiagram className="text-4xl text-green-600" />
            <p className="text-4xl font-bold">{finishedProjects}</p>
            <p>Finished Projects</p>
          </div>
          <div className="message-bubble text-center bg-yellow-200 p-4 rounded-lg w-full sm:w-1/2 lg:w-auto mb-4 md:mb-0 mx-1">
            <FaIndustry className="text-4xl text-yellow-600" />
            <p className="text-4xl font-bold">{industrySolutions}</p>
            <p>Industry Solutions</p>
          </div>
          <div className="message-bubble text-center bg-red-200 p-4 rounded-lg w-full sm:w-1/2 lg:w-auto mx-1">
            <FaCogs className="text-4xl text-red-600" />
            <p className="text-4xl font-bold">{newMetricTwo}</p>
            <p>New Features</p>
          </div>
        </div>
      </section>

      <section className="my-8 text-center">
        <div className="flex items-center justify-center w-full my-8">
          <div className="flex-grow border-t-4 custom-dotted-border mx-4"></div>
          <span className="mx-4 text-3xl text-custom-gold">✶</span>
          <h2 className="text-3xl font-semibold custom-font text-center mx-4 my-0 text-custom-gold">
            Our Services
          </h2>
          <span className="mx-4 text-3xl text-custom-gold">✶</span>
          <div className="flex-grow border-t-4 custom-dotted-border mx-4"></div>
        </div>

        <div
          ref={servicesContainerRef}
          className="mt-6 flex flex-wrap md:flex-nowrap overflow-x-auto md:space-x-4 p-4"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`custom-service-card flex-shrink-0 w-full md:w-80 bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-${service.color} mb-4 md:mb-0`}
            >
              <div className="relative">
                <div
                  className={`custom-message-bubble absolute top-0 left-0 m-4 p-2 bg-${service.color} rounded-full flex items-center justify-center`}
                >
                  <div className="custom-number text-lg font-bold text-white mr-2">
                    {service.number}
                  </div>
                  <div className="custom-icon p-2 bg-white rounded-full">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="custom-content p-4 mt-16">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2">{service.description}</p>
                <div className="custom-explore-more mt-4 flex items-center justify-between">
                  <span className="text-blue-500 font-semibold">
                    Explore More
                  </span>
                  <div className="custom-animation-arrow w-4 h-4 bg-blue-500 transform rotate-45"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .custom-dotted-border {
          border-style: dotted;
        }
        .custom-gold {
          color: #ffd700; /* Example gold color */
        }
        .custom-font {
          font-family: "Cinzel", serif;
        }
        .custom-service-card {
          min-width: 320px; /* Adjust the width as needed */
        }
        @media (min-width: 768px) {
          .custom-service-card {
            min-width: 320px; /* Adjust the width as needed */
          }
        }
        .custom-service-card,
        .custom-content,
        .custom-message-bubble {
          overflow: visible !important;
        }
        .custom-message-bubble {
          background-color: var(--custom-bg-color);
        }
        .custom-number {
          color: var(--custom-number-color);
        }
        .custom-icon {
          background-color: var(--custom-icon-bg);
        }
        .custom-explore-more {
          color: var(--custom-explore-color);
        }
        .custom-animation-arrow {
          background-color: var(--custom-arrow-bg);
        }
        /* Define border colors for services */
        .border-blue {
          border-color: blue;
        }
        .border-green {
          border-color: green;
        }
        .border-red {
          border-color: red;
        }
        .border-yellow {
          border-color: yellow;
        }
        .border-purple {
          border-color: purple;
        }
      `}</style>

      <section id="growth" className="py-10 bg-blue-200">
        <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap">
          {/* Left Column - Our Growth */}
          <div className="w-full md:w-2/3 mb-8 md:mb-0 md:mr-4 relative bg-white rounded-lg shadow-md p-2 text-center">
            <div className="flex items-center justify-center w-full my-8">
              <div className="flex-grow border-t-2 border-gold glory-border"></div>
              <span className="mx-4 text-4xl text-purple-500">◆</span>
              <h2 className="text-4xl font-bold font-cinzel text-center mx-4 my-0">
                Our Growth
              </h2>
              <span className="mx-4 text-4xl text-purple-500">◆</span>
              <div className="flex-grow border-t-2 border-gold glory-border"></div>
            </div>

            <p className="text-xl text-gray-600">
              Thinking Beyond Ordinary Strategies
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Analyze current trends in the SAP & ERP and IT solutions market to
              identify new growth opportunities.
            </p>
            <div className="mt-8">
              <a
                href="#growth"
                className="inline-block bg-orange-500 text-lg font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 focus:scale-105 focus:outline-none transition duration-500 ease-in-out relative overflow-hidden"
                style={{
                  backgroundImage: "linear-gradient(45deg, #FFA500, #FF4500)", // initial gradient
                  transition:
                    "background 0.5s ease-in-out, color 0.5s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage =
                    "linear-gradient(45deg, #1E90FF, #32CD32, #FF69B4)"; // hover gradient
                  e.currentTarget.style.color = "black"; // hover text color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage =
                    "linear-gradient(45deg, #FFA500, #FF4500)"; // initial gradient
                  e.currentTarget.style.color = "white"; // initial text color
                }}
              >
                <span className="relative z-10">Know More</span>
                <span className="absolute inset-0 bg-white opacity-0 transition duration-300 ease-in-out"></span>
              </a>
            </div>

            {/* Animated GIFs */}
            <div className="flex justify-center pt-8">
              <div className="w-1/2 px-1">
                <video className="w-full h-auto" autoPlay loop muted>
                  <source src={one} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="w-1/2 px-1">
                <video className="w-full h-auto" autoPlay loop muted>
                  <source src={two} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Right Column - Mission and Vision */}
          <div className="w-full md:w-1/3 md:ml-0">
            <div className="flex flex-col space-y-4">
              {/* Mission Card */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="w-full text-center">
                  <div className="flex items-center justify-center w-full mb-4">
                    <div className="flex-1 border-b border-black mx-4"></div>
                    <h3 className="text-xl font-bold font-cinzel mx-4">
                      Mission
                    </h3>
                    <div className="flex-1 border-b border-black mx-4"></div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    To revolutionize business management through SAP Business
                    One solutions delivering tailored implementations.
                  </p>
                  <a
                    href="#mission"
                    className="text-blue-500 font-semibold hover:underline"
                  >
                    Read More
                  </a>
                </div>
                <div className="mt-4">
                  <img
                    src="/18.jpg"
                    alt="Our Mission"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <div className="w-full text-center">
                  <div className="flex items-center justify-center w-full mb-4">
                    <div className="flex-1 border-b border-black mx-4"></div>
                    <h3 className="text-xl font-bold font-cinzel mx-4">
                      Vision
                    </h3>
                    <div className="flex-1 border-b border-black mx-4"></div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    To be the catalyst for business innovation and growth
                    recognized globally for our unwavering dedication to client
                    satisfaction.
                  </p>
                  <a
                    href="#vision"
                    className="text-blue-500 font-semibold hover:underline"
                  >
                    Read More
                  </a>
                </div>
                <div className="mt-4">
                  <img
                    src="/20.jpg"
                    alt="Our Vision"
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center mx-4 my-8">
        <div className="flex-grow border-t-2 border-gray-700"></div>
        <span className="mx-4 text-2xl text-pink-500">❀</span>
        <h2
          id="why-choose-us"
          className="text-4xl font-semibold text-center mx-4 font-cinzel"
        >
          Why Choose Us?
        </h2>
        <span className="mx-4 text-2xl text-yellow-500">❀</span>
        <div className="flex-grow border-t-2 border-gray-700"></div>
      </div>

      <div
        className="flex items-center justify-center w-full"
        style={{ marginTop: "-10px", marginBottom: "-20px" }}
      >
        <h4 className="text-3xl font-semibold text-center mb-4 font-cinzel">
          Digital Transformation with Services
        </h4>
      </div>

      <section className="relative py-16">
        {/* Background Text */}
        <div
          className="absolute inset-0 flex justify-center items-center z-0"
          style={{ top: "90%" }}
        >
          <div className="flex flex-col items-center">
            <h1
              className="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-800 opacity-20 transform rotate-0 shadow-2xl mt-2"
              style={{ fontFamily: "Shadowend" }}
            >
              WHY CHOOSE US
            </h1>
          </div>
        </div>

        {/* Foreground Content */}
        <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-center z-10">
          {/* Left Corner Grid - 2 Columns */}
          <div className="custom-left-grid col-span-1 lg:col-span-2 flex flex-col justify-end md:justify-center lg:justify-start order-2 lg:order-1 mb-6 md:mb-0">
            <div className="grid grid-cols-1 gap-4">
              {reasons.slice(0, 3).map((reason, index) => (
                <div
                  key={index}
                  className="custom-card p-2 md:p-3 custom-border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden mb-6 bg-gradient-to-r from-green-400 to-blue-500"
                >
                  <div className="custom-overlay absolute inset-0 bg-gray-800 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                    <p className="text-xs md:text-sm px-4 text-center font-serif custom-description-font">
                      {reason.description}
                    </p>
                  </div>
                  <div className="custom-content">
                    <h3 className="text-base md:text-lg font-bold text-white custom-title-font">
                      {reason.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-200 custom-paragraph-font">
                      {reason.p}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Image */}
          <div className="col-span-1 lg:col-span-2 flex justify-center relative order-1 lg:order-2 mb-6 md:mb-0">
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-lg">
              <img
                src="/chooseus-1.jpg"
                alt="RSBlooming Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Corner Grid - 2 Columns */}
          <div className="custom-right-grid col-span-1 lg:col-span-2 flex flex-col justify-start md:justify-center lg:justify-end order-3 mb-6 md:mb-0">
            <div className="grid grid-cols-1 gap-4">
              {reasons.slice(3).map((reason, index) => (
                <div
                  key={index}
                  className="custom-card p-2 md:p-3 custom-border rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden mb-6 bg-gradient-to-r from-purple-400 to-red-500"
                >
                  <div className="custom-overlay absolute inset-0 bg-gray-800 bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                    <p className="text-xs md:text-sm px-4 text-center font-serif custom-description-font">
                      {reason.description}
                    </p>
                  </div>
                  <div className="custom-content">
                    <h3 className="text-base md:text-lg font-bold text-white custom-title-font">
                      {reason.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-200 custom-paragraph-font">
                      {reason.p}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .font-shadowend {
          font-family: "Shadowend", sans-serif;
        }
        .custom-left-grid,
        .custom-right-grid,
        .custom-center-image {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .custom-card {
          min-width: 320px;
        }
        .custom-overlay {
          background-color: rgba(0, 0, 0, 0.7);
        }
        .custom-content {
          z-index: 1;
        }
        .custom-center-image .w-48 {
          width: 12rem;
          height: 12rem;
        }
        .custom-center-image .md:w-64 {
          width: 16rem;
          height: 16rem;
        }
        .custom-center-image .lg:w-80 {
          width: 20rem;
          height: 20rem;
        }
        .custom-description-font {
          font-family: "Georgia", Montserrat;
        }
        .custom-title-font {
          font-family: "Arial", Roboto;
        }
        .custom-paragraph-font {
          font-family: "Verdana", Playfair Display;
        }

        @media (max-width: 767px) {
          .custom-left-grid,
          .custom-right-grid {
            margin-bottom: 1rem;
          }
          .custom-card {
            margin-bottom: 1rem;
          }
        }
      `}</style>

      <section className="py-6" style={{ marginTop: "-15px" }}>
        <div className="container mx-auto overflow-hidden">
          <div className="flex items-center justify-center w-full my-8">
            <div className="flex-grow h-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-transparent"></div>
            </div>
            <span className="mx-4 text-3xl text-red-600">❤️</span>
            <h2 className="text-4xl font-bold text-gray-800">WE WORK FOR</h2>
            <span className="mx-4 text-3xl text-red-600">❤️</span>
            <div className="flex-grow h-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent"></div>
            </div>
          </div>
          <div className="text-center mb-8">
            <h5 className="text-lg text-gray-600 inline-block relative">
              Industries We Served
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-gray-600 to-transparent"></span>
            </h5>
          </div>

          <div className="flex animate-scroll">
            {services2.map((service, index) => (
              <div
                key={index}
                className={`custom-service-block bg-pink-100 p-6 rounded-lg shadow-md hover:bg-white hover:shadow-xl transition-shadow duration-300 flex-none w-64 mx-2 ${
                  showGrid ? "hidden" : ""
                }`}
                style={{
                  backgroundImage: `url(${service.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="custom-inner-box bg-white bg-opacity-75 p-4 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">
                    <a href={service.link !== "#" ? service.link : undefined}>
                      {service.title}
                    </a>
                  </h3>
                  <div className="custom-image-container mb-4 overflow-hidden">
                    <figure className="custom-image-box transform transition-transform duration-300 ease-in-out">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover transition-transform duration-300 ease-in-out hover:w-full hover:h-40 hover:rounded-lg"
                      />
                    </figure>
                  </div>
                  <div className="custom-link-box">
                    <a
                      href={service.link !== "#" ? service.link : undefined}
                      className="text-blue-500"
                    >
                      <i className="flaticon-right-arrow-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More and See Less buttons */}
          <div className="text-center mt-8">
            <button
              onClick={toggleGridView}
              className={`relative overflow-hidden bg-blue-500 text-white px-4 py-2 rounded-md shadow-md transform hover:scale-105 focus:scale-105 focus:outline-none transition duration-500 ease-in-out ${
                showGrid ? "hidden" : ""
              }`}
              style={{
                backgroundImage: "linear-gradient(45deg, #1E90FF, #00BFFF)", // initial gradient
                transition:
                  "background 0.5s ease-in-out, color 0.5s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage =
                  "linear-gradient(45deg, #FF6347, #FFD700, #ADFF2F)"; // hover gradient
                e.currentTarget.style.color = "black"; // hover text color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage =
                  "linear-gradient(45deg, #1E90FF, #00BFFF)"; // initial gradient
                e.currentTarget.style.color = "white"; // initial text color
              }}
            >
              Load More
            </button>
          </div>

          {/* Grid view */}
          {showGrid && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {services2.map((service, index) => (
                <div
                  key={index}
                  className="custom-service-block bg-pink-100 p-6 rounded-lg shadow-md hover:bg-white hover:shadow-xl transition-shadow duration-300 flex-none mx-2"
                  style={{
                    backgroundImage: `url(${service.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="custom-inner-box bg-white bg-opacity-75 p-4 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">
                      <a href={service.link !== "#" ? service.link : undefined}>
                        {service.title}
                      </a>
                    </h3>
                    <div className="custom-image-container mb-4 overflow-hidden">
                      <figure className="custom-image-box transform transition-transform duration-300 ease-in-out">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover transition-transform duration-300 ease-in-out hover:w-full hover:h-40 hover:rounded-lg"
                        />
                      </figure>
                    </div>
                    <div className="custom-link-box">
                      <a
                        href={service.link !== "#" ? service.link : undefined}
                        className="text-blue-500"
                      >
                        <i className="flaticon-right-arrow-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* See Less button */}
          {showGrid && (
            <div className="text-center mt-4">
              <button
                onClick={toggleGridView}
                className="relative overflow-hidden bg-blue-500 text-white px-4 py-2 rounded-md shadow-md transform hover:scale-105 focus:scale-105 focus:outline-none transition duration-500 ease-in-out"
                style={{
                  backgroundImage: "linear-gradient(45deg, #1E90FF, #00BFFF)", // initial gradient
                  transition:
                    "background 0.5s ease-in-out, color 0.5s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage =
                    "linear-gradient(45deg, #FF6347, #FFD700, #ADFF2F)"; // hover gradient
                  e.currentTarget.style.color = "black"; // hover text color
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage =
                    "linear-gradient(45deg, #1E90FF, #00BFFF)"; // initial gradient
                  e.currentTarget.style.color = "white"; // initial text color
                }}
              >
                See Less
              </button>
            </div>
          )}
        </div>
      </section>

      <section
        className="working-style-two py-1 bg-gray-100"
        style={{ marginTop: "-10px" }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center my-8">
            <div className="hidden md:flex items-center justify-between w-full">
              <div className="flex-grow h-1 relative w-1/3">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-transparent"></div>
              </div>
              <span className="text-3xl text-purple-600 mx-4">ꦛꦶ</span>
              <h2 className="text-4xl font-bold text-gray-800">How we work</h2>
              <span className="text-3xl text-purple-600 mx-4">ꦫꦶ</span>
              <div className="flex-grow h-1 relative w-1/3">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent"></div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center md:hidden">
              <div className="flex-grow h-1 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-transparent"></div>
              </div>
              <span className="my-4 text-3xl text-purple-600">ꦛꦶ</span>
              <h2 className="text-4xl font-bold text-gray-800 text-center">
                How we work
              </h2>
              <span className="my-4 text-3xl text-purple-600">ꦫꦶ</span>
              <div className="flex-grow h-1 relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h5 className="text-lg text-gray-600 inline-block relative">
              We Plan for your Growth
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-gray-600 to-transparent"></span>
            </h5>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative working-block-two bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
                style={{
                  border: `4px solid ${step.borderColor}`,
                  borderRadius: "15px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top Arc */}
                <svg
                  className="absolute top-0 left-0 w-full"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0 20 Q50 -20 100 20 Z" fill={step.topArcColor} />
                </svg>

                {/* Bottom Arc */}
                <svg
                  className="absolute bottom-0 left-0 w-full"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0 0 Q50 40 100 0 Z" fill={step.bottomArcColor} />
                </svg>

                <div
                  className="absolute inset-0 flex items-center justify-center text-9xl opacity-20 font-bold z-0 transition-transform duration-300 hover:translate-y-1 hover:translate-x-1"
                  style={{ color: "#A9A9A9", pointerEvents: "none" }} // Dark silver color
                >
                  {step.step}
                </div>
                <div className="relative z-10 inner-box text-center">
                  <div className="upper-box mb-4">
                    <div className="icon-box text-4xl text-blue-500 mb-2 transition-transform transform hover:scale-110">
                      <i className={step.icon}></i>
                    </div>
                    <h6 className="text-lg font-semibold text-gray-700">
                      {step.subtitle}
                    </h6>
                  </div>
                  <div className="lower-box">
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <button className="relative overflow-hidden group inline-block">
                      <span className="absolute inset-0 bg-white opacity-100 transition-opacity duration-300 ease-in-out"></span>
                      <span className="relative z-10 text-black px-4 py-2">
                        Explore More
                      </span>
                      <span className="absolute inset-0 bg-blue-500 transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 group-hover:bg-opacity-20 rounded-md"></span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-wrap justify-center">
        {divisions.map((division, index) => (
          <div key={index} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <DivisionCard
              title={division.title}
              tagline={division.tagline}
              link={division.link}
            />
          </div>
        ))}
      </div>

      <section className="py-4 bg-gray-100" style={{ marginTop: "-20px" }}>
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center w-full my-4">
              <div className="flex items-center">
                <div className="border-b-2 border-blue-600 w-12"></div>
                <span className="mx-2 text-blue-600">&#x1F4CD;</span>{" "}
              </div>
              <h2 className="text-4xl font-bold font-cinzel mx-4 text-gray-800">
                Office Locations
              </h2>
              <div className="flex items-center">
                <span className="mx-2 text-green-600">&#x1F4CD;</span>{" "}
                <div className="border-b-2 border-green-600 w-12"></div>
              </div>
            </div>
            {/* <p className="text-lg text-gray-600">
              Over 10 Employees working in more than 8 States in India and 20
              Employees working in American Branch.
            </p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* American Corporate Office Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">American Corporate HQ</h3>
              <p className="mb-4">
                AMXSOL LLC, 1000 Northbrook Drive, Suite 100, Trevose, PA 19053
                USA <br /> Tel: +1 (215) 268-6168 Email: info@amxsol.com
              </p>
            </div>
            {/* Indian Branch Office Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Global Indian Office</h3>
              <p className="mb-4">
                #3-88/3/A, Sree Krishna Arcade, Nizampet, Hyderabad | 500090 TG,
                INDIA <br /> Tel: +91-4035759443 | +91-8179382764 Email:
                info@amxsol.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
