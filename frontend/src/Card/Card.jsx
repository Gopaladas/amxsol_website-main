import React, { useState } from "react";
import "./Card.css";

const Card = ({ title, content, imgSrc }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <div class="book  m-auto">
      <div class="p-8">
        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 ">
          {title}
        </h5>
        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {content}
        </p>
      </div>

      <div class="cover">
        <img className="h-full w-full" src={imgSrc} />

        <p className="absolute bg-green-10">Click Me</p>
      </div>
    </div>

    // <div className=" flex w-60 mx-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    //   <div
    //     className={`relative img_block  mx-4 mt-6 h-60 rounded-xl  bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 `}
    //   >
    //     <img className="h-60 w-full" src={imgSrc} />
    //   </div>
    //   <div class="p-8">
    //     <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 ">
    //       {title}
    //     </h5>
    //     <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    //       {content}
    //     </p>
    //   </div>
    //   <div class="p-6 pt-0">
    //     <button
    //       data-ripple-light="true"
    //       type="button"
    //       className=" rounded-lg bg-blue-500   text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    //     >
    //       <a href="####">Read More</a>
    //     </button>
    //   </div>
    // </div>

    // <div
    //   className="card"
    //   onTouchStart={handleTouchStart}
    //   onTouchEnd={handleTouchEnd}
    //   onMouseEnter={() => setIsHovered(true)}
    //   onMouseLeave={() => setIsHovered(false)}
    // >
    //   <div className="card-image" style={{ backgroundImage: `url(${imgSrc})` }}>
    //     <h3 className="heading">{title}</h3>
    //     {isHovered && (
    //       <div className="card-content">
    //         <div className="card-text">
    //           <p>{content}</p>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
  );
};

export default Card;
