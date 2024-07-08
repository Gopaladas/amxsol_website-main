import React, { useState, useEffect, useRef } from "react";
import "./Footer.css";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const SubContent = ({ title, subItems, links }) => {
  const [showContent, setShowContent] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowContent(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="subcontent pt-5" ref={contentRef}>
      <div className="subcontent-header">
        <h1
          className={`font-mono font-extrabold text-lg text-green-300 lg:mt-0 md:mt-5 sm:mt-5 ${
            showContent ? "slide-in" : ""
          }`}
        >
          {title}
        </h1>
        <button
          className={`toggle-button ${showContent ? "slide-in" : ""} lg:hidden`} // Hide on screens larger than lg (1024px)
          onClick={toggleShowMore}
        >
          {showMore ? (
            <FiChevronDown color="white" />
          ) : (
            <FiChevronRight color="white" />
          )}
        </button>
      </div>
      <ul className={`subcontent-list ${showMore ? "show" : ""}`}>
        {subItems.map((item, index) => (
          <li
            key={index}
            className={`subitem ${showContent ? "slide-in" : ""}`}
          >
            <Link to={links[index]} className="text-green-100">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubContent;
