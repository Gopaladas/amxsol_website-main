import React, { useState, useEffect, useRef } from "react";
import c16 from "./c18.jpg";

const industriesData = [
  {
    title: "Professional Services",
    points: ["Professional Hiring", "Management Hiring", "Consulting"],
    image: "/c1.jpg",
    bgColor: "bg-red-200",
  },
  {
    title: "Natural Resources",
    points: ["Oil & Gas", "Air Sustainable Energy", "Solar Energy"],
    image: "/c2.jpg",
    bgColor: "bg-yellow-200",
  },
  {
    title: "Leisure & Hospitality",
    points: ["Hotels", "Commercials", "Event Management"],
    image: "/c3.jpg",
    bgColor: "bg-blue-200",
  },
  {
    title: "Financial Services",
    points: ["Financial Services", "Financial Solutions"],
    image: "/c4.jpg",
    bgColor: "bg-green-200",
  },
  {
    title: "Not for Profit",
    points: ["NGOs", "Global Social Causes"],
    image: "/c5.jpg",
    bgColor: "bg-purple-200",
  },
  {
    title: "Manufacturing",
    points: ["Manufacturing Industries", "Small, Mid, Large Scale Units"],
    image: "/c6.jpg",
    bgColor: "bg-pink-200",
  },
  {
    title: "e-Gaming",
    points: ["Racing Post", "Digital Gaming Apps", "e-Gaming Solutions"],
    image: "/c7.jpg",
    bgColor: "bg-indigo-200",
  },
  {
    title: "Private Equity",
    points: ["ECI Partners", "Exponent Private Equity", "Capital Management"],
    image: "/c8.jpg",
    bgColor: "bg-teal-200",
  },
  {
    title: "Property",
    points: ["Office Commercials", "Residential", "Estates Management"],
    image: "/c9.jpg",
    bgColor: "bg-orange-200",
  },
  {
    title: "Legal & IPO Preparing",
    points: ["Software Companies", "Other Industries"],
    image: "/c10.jpg",
    bgColor: "bg-gray-200",
  },
  {
    title: "Education",
    points: ["International Schools Partnership", "Technology and Branding"],
    image: "/c11.jpg",
    bgColor: "bg-lime-200",
  },
  {
    title: "Family Business",
    points: [
      "Individual small business Support",
      "Technology Know-how services",
    ],
    image: "/c12.jpg",
    bgColor: "bg-emerald-200",
  },
  {
    title: "Technology, Media and Telecoms",
    points: ["Technology Sectors", "Media and Telecoms Sectors"],
    image: "/c13.jpg",
    bgColor: "bg-green-200",
  },
  {
    title: "Retail, Wholesale and Distribution",
    points: ["Retail and Wholesale Network", "Distribution Network"],
    image: "/c14.jpg",
    bgColor: "bg-rose-200",
  },
  {
    title: "Global Consulting and Services",
    points: ["Global Support", "Global Services"],
    image: "/c15.jpg",
    bgColor: "bg-blue-200",
  },
];

const IndustrySection = ({
  title,
  points,
  image,
  onClick,
  showDetails,
  bgColor,
}) => {
  return (
    <div
      className={`relative rounded-lg shadow-lg overflow-hidden m-2 cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl`}
      onClick={onClick}
      style={{
        flex: "0 0 auto",
        width: "100%",
        maxWidth: "300px",
        padding: "20px",
        border: "2px solid",
        borderColor: bgColor,
      }}
    >
      <div className="relative">
        <img
          src={process.env.PUBLIC_URL + image}
          alt={title}
          className={`w-full h-auto object-cover`}
          style={{ height: "200px" }}
        />
        <h2 className="absolute inset-0 flex justify-center items-center text-lg font-bold text-white bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
          {title}
        </h2>
      </div>
      {showDetails && (
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 text-white p-4">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <ul className="list-disc pl-6">
            {points.map((point, index) => (
              <li key={index} className="mb-2">
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Industries = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [showGrid, setShowGrid] = useState(false);
  const [loadMoreClicked, setLoadMoreClicked] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const scrollImages = () => {
      if (!loadMoreClicked && !showGrid && carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

        if (scrollDirection === 1) {
          if (scrollLeft + clientWidth >= scrollWidth) {
            setScrollDirection(-1);
          } else {
            carouselRef.current.scrollBy({
              left: 300,
              behavior: "smooth",
            });
          }
        } else {
          if (scrollLeft <= 0) {
            setScrollDirection(1);
          } else {
            carouselRef.current.scrollBy({
              left: -300,
              behavior: "smooth",
            });
          }
        }
      }
    };

    intervalRef.current = setInterval(scrollImages, 2000);

    return () => clearInterval(intervalRef.current);
  }, [loadMoreClicked, showGrid, scrollDirection]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  }, []);

  const loadMore = () => {
    setLoadMoreClicked(true);
    setShowGrid(true);
  };

  const togglePoints = (index) => {
    setExpandedSection((prev) => (prev === index ? null : index));
  };

  const seeLess = () => {
    setLoadMoreClicked(false);
    setShowGrid(false);
  };

  return (
    <div className="min-h-screen bg-sky-100 relative top-[0px] z-0">
      <div className="relative w-full">
        <img
          src={c16} // Path to your main image
          alt="Industries"
          className="w-full h-auto object-contain object-top md:h-full" // Ensure the image is fully contained and starts from the top
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h1
            className="relative text-4xl sm:text-5xl md:text-7xl text-white font-extrabold animate-fadeInDown transform transition-transform duration-300 hover:scale-105 text-center"
            style={{
              transform: "translateX(20px)", // Adjust the leftward translation here
              left: "-15%", // Optional: Adjust left positioning if needed
            }}
          >
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              INDUSTRIES
            </span>

            <span className="absolute inset-0 opacity-50 blur-md rounded-lg animate-pulse hidden sm:block"></span>
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4 relative z-10">
        <div
          className="relative px-4 md:px-8 pb-4 md:py-6"
          style={{ marginTop: "-20px" }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 blur-sm rounded-lg"
            style={{ bottom: "25px" }}
          ></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-800 mb-6 sm:mb-8 md:mb-10 relative z-10">
            Our Industry Experience and Some of Our Clients from the Sectors...
          </h2>
        </div>

        <div
          className="max-w-6xl mx-auto py-6 px-4 relative"
          style={{ marginTop: "-20px" }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-blue-800 mb-6 relative group">
            <span className="relative z-10 inline-block px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
              Services & Technologies
            </span>
            <span className="absolute -top-2 -left-2 text-blue-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
              &#9733; {/* Unicode star */}
            </span>
            <span className="absolute -bottom-2 -right-2 text-blue-500 transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1">
              &#9734; {/* Unicode star */}
            </span>
            <span className="absolute top-0 right-0 transform -translate-y-1/2 transition-transform duration-300 group-hover:scale-110">
              <svg
                className="h-8 w-8 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>
          </h3>

          <div className="overflow-x-auto" ref={carouselRef}>
            <div
              className={`flex ${
                showGrid ? "flex-wrap justify-center" : "flex-nowrap"
              } space-x-4`}
            >
              {industriesData.map((industry, index) => (
                <IndustrySection
                  key={index}
                  title={industry.title}
                  points={industry.points}
                  image={industry.image}
                  bgColor={industry.bgColor}
                  onClick={() => togglePoints(index)}
                  showDetails={expandedSection === index}
                />
              ))}
            </div>
          </div>

          {!showGrid ? (
            <button
              className="mt-8 mx-auto block px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
              onClick={loadMore}
            >
              Load More
            </button>
          ) : (
            <button
              className="mt-8 mx-auto block px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
              onClick={seeLess}
            >
              See Less ^
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Industries;
