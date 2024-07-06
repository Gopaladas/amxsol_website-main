import React, { useState, useEffect } from "react";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const intervalTime = 3000; // Interval time for automatic sliding

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, intervalTime);

    return () => clearInterval(autoSlide); // Cleanup interval on component unmount
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="relative flex justify-center items-center h-full w-full ">
      <button
        className="absolute top-1/2 left-8 text-2xl font-bold text-white bg-gray-800 rounded-full w-12 h-12 flex justify-center items-center"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-8 text-2xl font-bold text-white bg-gray-800 rounded-full w-12 h-12 flex justify-center items-center"
        onClick={nextSlide}
      >
        &#10095;
      </button>
      {slides.map((slide, index) => (
        <div
          className={
            index === current
              ? " opacity-100 transition duration-2000 ease-in-out scale-10"
              : " opacity-0 transition duration-2000 ease-in-out "
          }
          key={index}
        >
          {index === current && (
            <img
              src={slide.image}
              alt={slide.title}
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          )}
        </div>
      ))}
      <div className="absolute bottom-8 flex space-x-2">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
