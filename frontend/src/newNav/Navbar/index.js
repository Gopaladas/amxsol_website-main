import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { FaBars, FaTimes, FaCaretDown, FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavLogoIcon, SideDropDownIcon, MobileIcon } from "../iconsElement";
import "./Navbar.css";

import Button from "../Button";
import DropDown from "../DropDown";
import AnnouncementBar from "../Navbar/AnnouncementBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  //state of the scroll set initially to false
  const [scroll, setScroll] = useState(false);
  const [click, setClick] = useState(false);
  // const [subclick, setSubClick] = useState(false);
  //state to show the dropdown Menu component, initially set to false
  const [showDropDown, setShowDropDown] = useState(false);
  // console.log(subclick);
  const ChangeNavBackground = () => {
    if (window.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    console.log(window.scrollY);
  };
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleMultiple = () => {
    closeMobileMenu();
    setShowDropDown(false);
  };

  // const MouseHover = () => {
  //   if (window.innerWidth > 960) {
  //     setShowDropDown(true);
  //   } else {
  //     setShowDropDown(true);
  //   }
  // };

  // const MouseLeave = () => {
  //   if (window.innerWidth > 960) {
  //     setShowDropDown(false);
  //   } else {
  //     setShowDropDown(false);
  //   }
  // };

  const dropdownstatus = () => {
    setShowDropDown((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeNavBackground);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <AnnouncementBar />

        <nav className={scroll ? "nav-bar active" : "nav-bar"}>
          <Link className="nav-logo" to="/">
            AMXSOL
            {/* <NavLogoIcon /> */}
          </Link>

          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                onClick={handleMultiple}
                activeStyle
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/aboutus"
                onClick={handleMultiple}
                activeStyle
              >
                Aboutus
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/carrer"
                onClick={handleMultiple}
                // onClick={dropdownstatus}
                activeStyle
              >
                Carrer
              </Link>
            </li>

            <li
              className="nav-item"
              // onMouseEnter={MouseHover}
              // onMouseLeave={MouseLeave}
            >
              <Link
                className="nav-link flex"
                // to="/services"
                onClick={dropdownstatus}
                activeStyle
              >
                Solutions
                {showDropDown ? (
                  <FaCaretDown className="far" />
                ) : (
                  <FaCaretRight className="far" />
                )}
                {/* <SideDropDownIcon /> */}
              </Link>
              {/* This condition says that if the DropDown component  State is set to true it will display,if false it will not show */}
              {showDropDown && (
                <DropDown
                  closeMobileMenu={closeMobileMenu}
                  setShowDropDown={setShowDropDown}
                />
              )}
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/products"
                onClick={handleMultiple}
                activeStyle
              >
                Industries
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/talent"
                onClick={handleMultiple}
                activeStyle
              >
                Talent Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                onClick={handleMultiple}
                activeStyle
              >
                contact us
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className="nav-mobile-link"
                to="/sign-up"
                onClick={closeMobileMenu}
                activeStyle
              >
                sign up
              </Link>
            </li> */}
          </ul>
          {/* <Button /> */}
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
