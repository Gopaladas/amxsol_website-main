import React, { useState } from "react";
import "./css/Navbar.css";
import AnnouncementBar from "./AnnouncementBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    closeDropdown();
  };

  return (
    <>
      <AnnouncementBar />

      <nav>
        <div className="logo">
          <img src={logo} alt="Amxsol Logo" />
        </div>
        <input
          type="checkbox"
          id="click"
          checked={menuOpen}
          onChange={toggleMenu}
        />
        <label htmlFor="click" className="menu-btn">
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </label>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <a className="active" href="#" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="services">
            <a href="#" onClick={toggleDropdown}>
              Services <FontAwesomeIcon icon={faCaretDown} />
            </a>
            <ul className={dropdownOpen ? "dropdown active" : "dropdown"}>
              <li>
                <a href="/aboutus" onClick={closeMenu}>
                  Project
                </a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>
                  Web
                </a>
              </li>
              <li>
                <a href="#" onClick={closeMenu}>
                  Digital
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              Contact
            </a>
          </li>
          <li>
            <a href="#" onClick={closeMenu}>
              Feedback
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
