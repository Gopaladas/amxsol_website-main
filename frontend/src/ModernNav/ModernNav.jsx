import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./ModernNav.css";
import AnnouncementBar from "../newNav/Navbar/AnnouncementBar";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function ModernNav() {
  const navRef = useRef();
  const [showDropdown, setShowDropdown] = useState({
    myWork: false,
    blog: false,
  });

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const toggleDropdown = (section) => {
    setShowDropdown((prev) => ({
      myWork: section === "myWork" ? !prev.myWork : false,
      blog: section === "blog" ? !prev.blog : false,
    }));
  };

  const closeDropdowns = () => {
    setShowDropdown({ myWork: false, blog: false });
  };

  return (
    <>
      {/* <AnnouncementBar /> */}
      <header>
        {/* <h3>LOGO</h3> */}
        <a href="/">
          <img src={logo} className="w-[100px]" />
        </a>
        <nav ref={navRef}>
          <a href="/" onClick={closeDropdowns}>
            Home
          </a>
          <div className="dropdown">
            <Link onClick={() => toggleDropdown("myWork")}>Who we are</Link>
            {showDropdown.myWork && (
              <div className="dropdown-content shadow-box">
                <a href="/aboutus" onClick={closeDropdowns}>
                  About Us
                </a>
                <a href="/carrer" onClick={closeDropdowns}>
                  Build a Career with Us
                </a>
                <a href="/academy" onClick={closeDropdowns}>
                  Amxsol Academy
                </a>
                <a href="/foundation" onClick={closeDropdowns}>
                  Amxsol Foundation
                </a>
              </div>
            )}
          </div>
          <div className="dropdown">
            <Link onClick={() => toggleDropdown("blog")}>What we do</Link>
            {showDropdown.blog && (
              <div className="dropdown-content shadow-box">
                <a href="/services" onClick={closeDropdowns}>
                  Business Solution
                </a>
                <a href="/tech" onClick={closeDropdowns}>
                  Technology Solution
                </a>
                <a href="/business" onClick={closeDropdowns}>
                  Business Impact
                </a>
                <a href="/industries" onClick={closeDropdowns}>
                  Industries
                </a>
                <a href="/talent" onClick={closeDropdowns}>
                  Talent Services
                </a>
              </div>
            )}
          </div>
          <a href="/contact" onClick={closeDropdowns}>
            Contact us
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default ModernNav;
