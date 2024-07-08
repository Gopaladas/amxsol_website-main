import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Card1.css";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const images = ["/a8.jpg", "/a6.jpg"];

const Card1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    setIsScrolling(true);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const scrollPosition = touch.clientY;
    if (scrollPosition > window.innerHeight / 2) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <div className="main-section">
      <div
        className="parent   grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10"
        onScroll={handleScroll}
        onTouchMove={handleTouchMove}
      >
        <div class="e-card  lg:h-[50vh]">
          <div class="cube-container relative m-auto">
            <div class="cube flex justify-center">
              <div class="face front  flex justify-center">
                <img src={logo} />
              </div>
              <div class="face back text-white flex justify-center">
                <img src={logo} />
              </div>
              <div class="face right text-white flex justify-center">
                <img src={logo} />
              </div>
              <div class="face left text-white flex justify-center">
                <img src={logo} />
              </div>
              <div class="face top text-white flex justify-center">
                <img src={logo} />
              </div>
              <div class="face bottom text-white flex justify-center">
                <img src={logo} />
              </div>
            </div>
          </div>

          <div className="bottom"></div>
        </div>

        <div class="infotop bg-white mx-auto">
          <div class="name">
            <div className="contentA">
              <span className="title text-green-10">
                WHAT WE CAN DO FOR YOU
              </span>
              <p className="card1_text  text text-2">
                AMXSOL provides cost-effective software solutions and consulting
                services.
              </p>
              <span className="text"></span>
              <div className="buttonscard  relative top-[5px]">
                <div className="card1btn">
                  <button className="btncard1 ">
                    <Link to="/services">BUSINESS SOLUTIONS</Link>
                  </button>
                </div>
                <div className="card1btn">
                  <button className="btncard1">
                    <Link to="/talent">TALENT SOLUTIONS</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
