import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";
import Card from "./Card/Card";
import Card1 from "./Card1/Card1";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faCaretDown,
  faTimes,
  faAngleLeft,
  faAlignRight,
} from "@fortawesome/free-solid-svg-icons";

// const images = ['/a8.jpg', '/a6.jpg']; // Array of image sources

const coreValues = [
  {
    title: "DIVERSITY & INCLUSION",
    description:
      "Employees from all walks of life are welcome and we celebrate what makes us unique.",
    img: "/d1.jpg",
  },
  {
    title: "CUSTOMER COMMITMENT",
    description:
      "We are dedicated to delivering quality service and stellar customer support.",
    img: "/d2.jpg",
  },
  {
    title: "PEOPLE CENTRIC",
    description:
      "The happiness and wellbeing of our employees and clients is our top priority.",
    img: "/d3.jpg",
  },
  {
    title: "TEAMWORK & COLLABORATION",
    description:
      "We collaborate across teams, functions, and business units to deliver the best possible work.",
    img: "/d4.jpg",
  },
  {
    title: "TRANSPARENCY & ACCOUNTABILITY",
    description:
      "We value open and honest communication from associates to executives alike.",
    img: "/d5.jpg",
  },
  {
    title: "RESPECT",
    description:
      "To us, RESPECT means creating a work environment where everyone is heard and valued.",
    img: "/d6.jpg",
  },
  {
    title: "INTEGRITY",
    description:
      "We strive to do what's right when dealing with our fellow employees, clients, vendors.",
    img: "/d7.jpg",
  },
  {
    title: "PASSION",
    description:
      "We are committed to achieving and outperforming our goals with fierce dedication.",
    img: "/d8.jpg",
  },
];

const Marquee = () => {
  return (
    <div className="marquee-container my-10">
      <div className="marquee-left ">
        <button className="marquee-button marquee-button-left w-[250px]">
          DIVERSITY & INCLUSION
        </button>
        <button className="marquee-button marquee-button-left w-[250px]">
          CUSTOMER COMMITMENT
        </button>
        <button className="marquee-button marquee-button-left w-[250px]">
          PEOPLE CENTRIC
        </button>
        <button className="marquee-button marquee-button-left w-[250px]">
          INTEGRITY
        </button>
        <button className="marquee-button marquee-button-left w-[250px]">
          CUSTOMER COMMITMENT
        </button>
      </div>
      <div className="marquee-right">
        <button className="marquee-button marquee-button-right w-[300px]">
          TEAMWORK & COLLABORATION
        </button>
        <button className="marquee-button marquee-button-right w-[300px]">
          TRANSPARENCY & ACCOUNTABILITY
        </button>
        <button className="marquee-button marquee-button-right w-[250px]">
          RESPECT
        </button>
        <button className="marquee-button marquee-button-right w-[250px]">
          PASSION
        </button>
        <button className="marquee-button marquee-button-right w-[300px]">
          TEAMWORK & COLLABORATION
        </button>
      </div>
    </div>
  );
};

const subsections = [
  {
    title: "STRATEGIC LOCATIONS",
    content:
      "With offices placed strategically across North America and India.",
    imgSrc: "/b1.jpg", // Replace with actual image path
  },
  {
    title: "PROFESSIONAL TALENT",
    content:
      "When you partner with System Soft, you have access to our pool of highly-skilled associates.",
    imgSrc: "/b2.jpg", // Replace with actual image path
  },
  {
    title: "LONG-TERM PARTNERSHIPS",
    content:
      "We enjoy 80% repeat business from clients due to our great customer experience.",
    imgSrc: "/b3.jpg", // Replace with actual image path
  },
  {
    title: "CUTTING-EDGE TECHNOLOGIES",
    content:
      "We invest heavily in technologies and methods to enhance agility.",
    imgSrc: "/b4.jpg", // Replace with actual image path
  },
];

// const Card = ({ title, content, imgSrc }) => {
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [isHovered, setIsHovered] = useState(false);

//     const toggleExpand = () => {
//       setIsExpanded(!isExpanded);
//     };

//     const handleTouchStart = () => {
//       setIsHovered(true);
//     };

//     const handleTouchEnd = () => {
//       setIsHovered(false);
//     };

//     return (
//       <div

//         className="card"
//         onTouchStart={handleTouchStart}
//         onTouchEnd={handleTouchEnd}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="card-image" style={{ backgroundImage: `url(${imgSrc})` }}>
//           <h3 className="heading">{title}</h3>
//           {isHovered && (
//             <div className="card-content">
//               <div className="card-text">
//                 <p>{content}</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

// const Card = ({ title, content, imgSrc }) => {
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [isHovered, setIsHovered] = useState(false);

//     const toggleExpand = () => {
//         setIsExpanded(!isExpanded);
//     };

//     return (
//         <div className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
//         <div className="card-image" style={{ backgroundImage: `url(${imgSrc})` }}>
//             <h3 className="heading">{title}</h3>
//             {isHovered && (
//                 <div className="card-content">
//                     <div className="card-text">
//                         <p className='font-mono font-extrabold text-green-500'>{content}</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     </div>
//     );
// };

const sections = [
  {
    title: "MISSION STATEMENT",
    content: "Accelerating innovation through exceptional IT services.",
  },
  {
    title: "VISION STATEMENT",
    content: "To be recognized as the most trusted and innovative IT partner.",
  },
];

const AboutUs = () => {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Effect for auto-changing the images
  // useEffect(() => {
  //     const interval = setInterval(() => {
  //         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //     }, 3000); // Change image every 3 seconds
  //     return () => clearInterval(interval);
  // }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentCarouselIndex(
      (prevIndex) => (prevIndex - 1 + sections.length) % sections.length
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentCarouselIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const buttonStyle = {
    backgroundColor: isButtonClicked ? "black" : "white",
    color: isButtonClicked ? "white" : "black",
    border: "1px solid blue",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "20px",
    transition: "background-color 0.3s, color 0.3s",
  };

  return (
    <div className="about-us">
      <Card1 />
      {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="container"
            >
                <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt="not found"
                    className="background-image"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <div className="text-overlay">
                    <h1 className='head'>WHAT WE CAN DO FOR YOU</h1>
                    <p>AMXSOL provides cost-effective software solutions and consulting services.</p>
                    <a href='#'> BUSINESS SOLUTIONS </a> |
                    <a href='#'> TALENT SOLUTIONS</a>
                </div>
            </motion.div> */}

      {/* <div className="parent container">
            <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt="not found"
                    className="background-image"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
                <div className="cardA absolute top-0">
            <div className="logo ">
                <span className="circle circle1"></span>
                <span className="circle circle2"></span>
                <span className="circle circle3"></span>
                <span className="circle circle4"></span>
                <span className="circle circle5 text-black ">
                    
                </span>

            </div>
            <div className="glass"></div>
            <div className="contentA">
                <span className="title">WHAT WE CAN DO FOR YOU</span>
                    <p>AMXSOL provides cost-effective software solutions and consulting services.</p>
                    <span className="text"></span>
            </div>
            <div className="bottom">
                
                <div className="social-buttons-container grid lg:grid-cols-2 sm:grid-cols-1 space-y-5">
                    <div><button className="social-button .social-button1">
                    <a href='#'> BUSINESS SOLUTIONS </a>
                        </button></div>
                      <div><button className="social-button .social-button2">
                      <a href='#'> TALENT SOLUTIONS</a>
                      </button></div>
                      
                </div>
                
            </div>
            </div>
        </div> */}

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        /*className="partnership-container shadow-2xl  rounded-md"*/ className="card1 relative mt-[120px] mb-[50px] justify-center"
      >
        <div className="card2 ">
          <h2 className="text-white">
            OUR APPROACH TO <span className="highlight">PARTNERSHIP</span>
          </h2>
          <div className="cont">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="image-container ">
                <img src="/a4.jpg" alt="Partnership Image" />
              </div>
              <div className="m-5">
                <h4 className="text-white">
                  Our focus is on building long-term client relationships. By
                  becoming partners and trusted advisors, we are able to truly
                  understand and anticipate our clients unique needs. This
                  includes strategically placing offices across North America
                  and India so we can help our clients on a very personal level
                  based on their geographic locations. By doing this, we
                  successfully help organizations achieve significant ROI ahead
                  of schedule and below budget.
                </h4>
                <h4 className="text-white">
                  We also believe that happy employees take good care of
                  customers, so we are people-centric and strive to create an
                  environment that nurtures and empowers our employees. By
                  prioritizing the needs of our employees, we prioritize the
                  needs of our clients creating a company culture driven to
                  exceed expectations.
                </h4>
              </div>
            </div>
          </div>
          <button
            className="withbutton flex justify-center"
            style={buttonStyle}
            onClick={handleButtonClick}
          >
            <a href="#">PARTNER WITH US</a>
          </button>
        </div>
      </motion.div>

      <div className="carousel-container">
        <button className="carousel-button h-10 w-10" onClick={handlePrev}>
          &lt;
          {/* <FontAwesomeIcon icon={"arrow-left-to-arc"} /> */}
        </button>
        <motion.div
          key={currentCarouselIndex}
          initial={{ x: direction === 1 ? 100 : -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction === 1 ? -100 : 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="carousel-content"
        >
          <div className="section-card">
            <h3>{sections[currentCarouselIndex].title}</h3>
            <p className="sectiontext">
              {sections[currentCarouselIndex].content}
            </p>
          </div>
        </motion.div>
        <button className="carousel-button  h-10 w-10" onClick={handleNext}>
          &gt;
          {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}
        </button>
      </div>

      <div className="card-container my-10">
        {subsections.map((subsection, index) => (
          <Card
            key={index}
            title={subsection.title}
            content={subsection.content}
            imgSrc={subsection.imgSrc}
          />
        ))}
      </div>

      <Marquee />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-black my-5 text-center">CORE VALUES</h2>
        <div className="core-values">
          {coreValues.map((value, index) => (
            // <div className="value" key={index} style={{ backgroundImage: `url(${value.img})` }}>
            //     <div className="content">
            //         <h4>{value.title}</h4>
            //         <p>{value.description}</p>
            //     </div>
            // </div>

            // <div className="value" key={index} style={{backgroundImage : `url(${value.img})`}}>
            //         {/* <div key={index} styyle={{backgroundImage : `url(${value.img})`}}></div> */}
            //         <div className="value__content">
            //             <p className="value__title">{value.title}</p>
            //             <p className="value__description">{value.description}</p>
            //         </div>
            // </div>
            <article className="card_down">
              <div className="temporary_text">
                <img src={value.img} />
              </div>
              <div className="card_content_down">
                <span className="card_title_down">{value.title}</span>
                <span className="card_subtitle_down">{value.description}</span>
                <span className="card_description_down">
                  {value.description}
                </span>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="quote text-black">
          "Our deeply collaborative approach helps our clients overcome the most
          daunting IT challenges"
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
