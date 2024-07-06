import React, { useState } from "react";
import myVideo from "./assets/video.mp4"; // Replace with your video path
import "./index.css"; // Ensure this imports your Tailwind CSS setup
import one from "./assets/image1.jpg";
import two from "./assets/image2.jpg";
import three from "./assets/image3.jpg";
import four from "./assets/image4.jpg";
import five from "./assets/image5.jpg";
import six from "./assets/image6.jpg";
import seven from "./assets/image7.jpg";
import bgvideo from "../video/impact.mp4";

// Sample data for items
const items = [
  {
    title: "Accelerate Revenue",
    image: one, // Local image import using require()

    description:
      "Increase sales and revenue generation through strategic initiatives.",
    points: [
      "Optimize pricing strategies to maximize revenue potential.",
      "Implement targeted marketing campaigns for customer acquisition.",
    ],
    bgColor: "bg-blue-200", // Example background color class
  },
  {
    title: "Achieving Security",
    image: two, // Example of an image URL
    description: "Enhance cybersecurity measures to protect valuable assets.",
    points: [
      "Conduct regular security audits and vulnerability assessments.",
      "Implement multi-factor authentication and data encryption protocols.",
    ],
    bgColor: "bg-green-200", // Example background color class
  },
  {
    title: "Enhance Customer Experience",
    image: three, // Example of an image URL
    description:
      "Improve customer satisfaction and loyalty through personalized interactions.",
    points: [
      "Deploy AI-powered chatbots for real-time customer support.",
      "Personalize product recommendations based on customer behavior.",
    ],
    bgColor: "bg-yellow-200", // Example background color class
  },
  {
    title: "Expedite Product Development",
    image: four, // Example of an image URL
    description:
      "Accelerate time-to-market by streamlining development processes.",
    points: [
      "Adopt agile methodologies for rapid prototyping and iteration.",
      "Utilize cloud infrastructure to enhance scalability and flexibility.",
    ],
    bgColor: "bg-red-200", // Example background color class
  },
  {
    title: "Improve Employee Experience",
    image: five, // Example of an image URL
    description:
      "Create a positive work environment and enhance employee satisfaction.",
    points: [
      "Offer professional development opportunities and mentorship programs.",
      "Implement employee wellness initiatives and flexible work arrangements.",
    ],
    bgColor: "bg-purple-200", // Example background color class
  },
  {
    title: "Optimize Costs",
    image: six, // Example of an image URL
    description: "Reduce operational expenses and improve cost efficiency.",
    points: [
      "Analyze and optimize supply chain logistics for cost savings.",
      "Leverage automation technologies to streamline repetitive tasks.",
    ],
    bgColor: "bg-indigo-200", // Example background color class
  },
  {
    title: "Speed to Market",
    image: seven, // Example of an image URL
    description:
      "Launch products and services quickly to capitalize on market opportunities.",
    points: [
      "Implement rapid prototyping and iterative development cycles.",
      "Establish strategic partnerships to expedite go-to-market timelines.",
    ],
    bgColor: "bg-pink-200", // Example background color class
  },
];

const Business = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative w-full bg-white  mb-[150px] z-0">
      <div className="w-full h-[40vh] relative">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src={bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
          <h1 className="text-white text-4xl font-serif cursor-pointer relative z-10 group bg-opacity-50">
            <span className="relative z-10">Business Impact</span>

            {/* <span className="absolute top-0 left-0 w-full h-full ">
              <span className="absolute top-0 left-0 w-full h-full animate-pulse"></span>
              <span className="absolute top-0 left-0 w-full h-full animate-ping"></span>
              <span className="absolute top-0 left-0 w-full h-full animate-pulse"></span>
              <span className="absolute top-0 left-0 w-full h-full animate-ping"></span>
            </span> */}
          </h1>
        </div>
      </div>
      <div className="busback py-10 w-full">
        <div className="container  px-4">
          <h2 className="text-lg font-sans mb-4 text-black">
            AMXSOL is your trusted advisor to help ensure the technology you’re
            using today is truly serving your business needs
          </h2>
          <p className="text-base font-sans text-black">
            We build specific solutions for your vertical/industry to automate
            crucial business processes. Our unique combination of strategy,
            design, development, integration and maintenance capabilities help
            to deliver fast and cost-effective solutions.
          </p>
        </div>
      </div>

      <div className="busback">
        <div className="container">
          <h2 className="text-lg font-sans mb-4 text-black text-center">
            We are experts in the following:
          </h2>
          <div className="flex flex-wrap justify-center m-auto">
            {items.map((item, index) => (
              <div
                key={index}
                // sm:w-1/2 lg:w-1/3 px-4 mb-8
                // sm:w-1/2 lg:w-1/3 px-4 mb-8

                className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105 ${item.bgColor}`}
                  // className={`rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105 bg-white`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg w-full h-40 object-cover mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    {hoveredIndex === index && (
                      <>
                        <p className="text-base">{item.description}</p>
                        <ul className="mt-4 text-sm text-left">
                          {item.points.map((point, idx) => (
                            <li key={idx} className="flex items-center">
                              <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;

// import React, { useState } from "react";
// import myVideo from "./assets/video.mp4"; // Replace with your video path
// import "./index.css"; // Ensure this imports your Tailwind CSS setup

// // Sample data for items
// const items = [
//   {
//     title: "Accelerate Revenue",
//     image: require("./assets/image1.jpg"), // Local image import using require()
//     description:
//       "Increase sales and revenue generation through strategic initiatives.",
//     points: [
//       "Optimize pricing strategies to maximize revenue potential.",
//       "Implement targeted marketing campaigns for customer acquisition.",
//     ],
//     bgColor: "bg-blue-200", // Example background color class
//   },
//   {
//     title: "Achieving Security",
//     image: require("./assets/image2.jpg"), // Example of an image URL
//     description: "Enhance cybersecurity measures to protect valuable assets.",
//     points: [
//       "Conduct regular security audits and vulnerability assessments.",
//       "Implement multi-factor authentication and data encryption protocols.",
//     ],
//     bgColor: "bg-green-200", // Example background color class
//   },
//   {
//     title: "Enhance Customer Experience",
//     image: require("./assets/image3.jpg"), // Example of an image URL
//     description:
//       "Improve customer satisfaction and loyalty through personalized interactions.",
//     points: [
//       "Deploy AI-powered chatbots for real-time customer support.",
//       "Personalize product recommendations based on customer behavior.",
//     ],
//     bgColor: "bg-yellow-200", // Example background color class
//   },
//   {
//     title: "Expedite Product Development",
//     image: require("./assets/image4.jpg"), // Example of an image URL
//     description:
//       "Accelerate time-to-market by streamlining development processes.",
//     points: [
//       "Adopt agile methodologies for rapid prototyping and iteration.",
//       "Utilize cloud infrastructure to enhance scalability and flexibility.",
//     ],
//     bgColor: "bg-red-200", // Example background color class
//   },
//   {
//     title: "Improve Employee Experience",
//     image: require("./assets/image5.jpg"), // Example of an image URL
//     description:
//       "Create a positive work environment and enhance employee satisfaction.",
//     points: [
//       "Offer professional development opportunities and mentorship programs.",
//       "Implement employee wellness initiatives and flexible work arrangements.",
//     ],
//     bgColor: "bg-purple-200", // Example background color class
//   },
//   {
//     title: "Optimize Costs",
//     image: require("./assets/image6.jpg"), // Example of an image URL
//     description: "Reduce operational expenses and improve cost efficiency.",
//     points: [
//       "Analyze and optimize supply chain logistics for cost savings.",
//       "Leverage automation technologies to streamline repetitive tasks.",
//     ],
//     bgColor: "bg-indigo-200", // Example background color class
//   },
//   {
//     title: "Speed to Market",
//     image: require("./assets/image7.jpg"), // Example of an image URL
//     description:
//       "Launch products and services quickly to capitalize on market opportunities.",
//     points: [
//       "Implement rapid prototyping and iterative development cycles.",
//       "Establish strategic partnerships to expedite go-to-market timelines.",
//     ],
//     bgColor: "bg-pink-200", // Example background color class
//   },
// ];

// const Business = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className="relative">
//       <div className="w-full h-[40vh] relative">
//         <video
//           autoPlay
//           muted
//           loop
//           className="absolute inset-0 object-cover w-full h-full"
//         >
//           <source src={myVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
//           <h1 className="text-white text-4xl font-serif cursor-pointer relative z-10">
//             <span className="relative z-10">Business Impact</span>
//             <span className="absolute top-0 left-0 w-full h-full ">
//               <span className="absolute top-0 left-0 w-full h-full animate-pulse"></span>
//               <span className="absolute top-0 left-0 w-full h-full animate-ping"></span>
//               <span className="absolute top-0 left-0 w-full h-full animate-pulse"></span>
//               <span className="absolute top-0 left-0 w-full h-full animate-ping"></span>
//             </span>
//           </h1>
//         </div>
//       </div>
//       <div className="py-10">
//         <div className="container mx-auto px-4">
//           <h2 className="text-lg font-sans mb-4 text-white">
//             AMXSOL is your trusted advisor to help ensure the technology you’re
//             using today is truly serving your business needs
//           </h2>
//           <p className="text-base font-sans text-white">
//             We build specific solutions for your vertical/industry to automate
//             crucial business processes. Our unique combination of strategy,
//             design, development, integration and maintenance capabilities help
//             to deliver fast and cost-effective solutions.
//           </p>
//         </div>
//       </div>
//       <div className="py-10">
//         <div className="container mx-auto px-4">
//           <h2 className="text-lg font-sans mb-4 text-white">
//             We are experts in the following:
//           </h2>
//           <div className="flex flex-wrap justify-center">
//             {items.map((item, index) => (
//               <div
//                 key={index}
//                 className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 <div
//                   className={`rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105 bg-white`}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="rounded-lg w-full h-48 object-cover mb-4"
//                   />
//                   <div className="text-center">
//                     <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//                     {hoveredIndex === index && (
//                       <>
//                         <p className="text-base">{item.description}</p>
//                         <ul className="mt-4 text-sm text-left">
//                           {item.points.map((point, idx) => (
//                             <li key={idx} className="flex items-center">
//                               <svg
//                                 className="w-4 h-4 mr-2"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                                 xmlns="http://www.w3.org/2000/svg"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth="2"
//                                   d="M5 13l4 4L19 7"
//                                 />
//                               </svg>
//                               <span>{point}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Business;
