import React from "react";
import "./index.css";

// Import images
import image1 from "./image1.jpeg";
import image2 from "./image2.jpeg";
import image3 from "./image3.jpeg";
import extraImage from "./image4.jpg"; // Import new image

// Image info array
const info = [
  {
    image: image1,
    title: "MISSION",
    description:
      "AMXSOL Foundation was established to support the less privileged sections of society, create opportunities and strive towards a more equitable society.",
    bgColor: "bg-red-500",
  },
  {
    image: image2,
    title: "AMXSOL CSR",
    description:
      "We embrace our responsibility to create a positive impact in the communities in which we work and live.",
    bgColor: "bg-green-500",
  },
  {
    image: image3,
    title: "KEY INITIATIVES",
    description:
      "A dedicated team at AMXSOL Foundation identifies programs in the areas of healthcare, education, arts and culture, destitute care, and rural development.",
    bgColor: "bg-pink-500",
  },
];

function FoundationApp() {
  return (
    <div>
      {/* 50vh height div with centered text */}
      <div className="h-[50vh] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex flex-col justify-between items-center">
        <h1 className="text-5xl md:text-8xl font-bold mt-20 text-center">
          <span className="text-red-700">AMX</span>
          <span className="text-green-500">SOL</span>
          <span className="text-orange-500"> FOUNDATION</span>
        </h1>
        <div className="mb-4 text-white text-2xl text-center">
          AMXSOL Foundation ∞ Corporate Social Responsibility
        </div>
      </div>

      {/* Images section */}
      <div className="bg-blue-300 p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {info.map((item, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className={`flip-card-front bg-black`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover bg-black"
                />
                <h2 className="text-4xl font-bold mt-2 text-red-500 text-white ">
                  {item.title}
                </h2>
              </div>
              <div
                className={`flip-card-back ${item.bgColor} flex flex-col justify-center items-center`}
              >
                <h2 className="text-2xl font-bold mb-2 text-green-900">
                  {item.title}
                </h2>
                <p className="text-white">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* New image section below the grid */}
      <div className="extra-image-container">
        <img src={extraImage} alt="Extra" className="w-full h-auto" />
        <div className="extra-image-title-description">
          <h2 className="text-orange-500">
            Corporate Social Responsibility (CSR)
          </h2>
          <p>
            is a vital aspect of our organization’s commitment to making a
            positive impact on society and the environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FoundationApp;
