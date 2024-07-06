import React, { useState, useEffect } from "react";
import logo from "./logonew.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const handleSearch = () => {
    console.log("Search:", searchTerm);
    setSearchTerm("");
  };

  return (
    <div>
      {/* Main Navbar */}
      <nav className="bg-black p-4 relative z-10">
        <div className="container mx-auto flex flex-col">
          <div className="flex justify-between items-center">
            <div className="relative flex items-center">
              <img
                src={logo} // Path to your logo image
                alt="Logo"
                className="h-8 w-auto transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="hidden md:flex space-x-8 justify-center flex-1">
              <Link
                to="/"
                onClick={closeDropdown}
                className="text-gray-300 hover:text-white px-3 py-2 hover:bg-blue-300"
              >
                Home
              </Link>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("whoWeAre")}
                  className={`text-gray-300 hover:text-white px-3 py-2 flex items-center ${
                    activeDropdown === "whoWeAre"
                      ? "bg-blue-500"
                      : "hover:bg-blue-300"
                  }`}
                >
                  Who we are
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("whatWeDo")}
                  className={`text-gray-300 hover:text-white px-3 py-2 flex items-center ${
                    activeDropdown === "whatWeDo"
                      ? "bg-blue-500"
                      : "hover:bg-blue-300"
                  }`}
                >
                  What we do
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <Link
                to="/carrer"
                onClick={closeDropdown}
                className="text-gray-300 hover:text-white px-3 py-2 hover:bg-blue-300"
              >
                Build a career with us
              </Link>
              <Link
                to="/contact"
                onClick={closeDropdown}
                className="text-gray-300 hover:text-white px-3 py-2 hover:bg-blue-300"
              >
                Contact Us
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleSearch}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <i className="fas fa-search"></i>
              </button>
              {showSearch && (
                <div className="flex items-center ml-4">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search..."
                    className="px-2 py-1 rounded-md border border-gray-700 bg-gray-900 text-white"
                  />
                  <button
                    onClick={handleSearch}
                    className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                  >
                    Search
                  </button>
                </div>
              )}
            </div>
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navbar Container */}
      <div className="relative">
        {/* Secondary Navbar for 'Who we are' */}
        {!isMobile && activeDropdown === "whoWeAre" && (
          <div className="absolute bg-gray-800 mt-1 inset-x-0 top-full z-20">
            {/* <div className="container mx-auto flex space-x-4">
              <Link
                onClick={closeDropdown}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900 flex items-center"
              >
                Our Services
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <div className="flex-1 flex justify-center">
                <Link
                  to="/services"
                  onClick={closeDropdown}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900"
                >
                  Business Solution
                </Link>
                <Link
                  to="/tech"
                  onClick={closeDropdown}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900"
                >
                  Technology Solution
                </Link>
                <Link
                  to="/business"
                  onClick={closeDropdown}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900"
                >
                  Business Impact
                </Link>

                <Link
                  to="/industries"
                  onClick={closeDropdown}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900"
                >
                  Industries
                </Link>
                <Link
                  to="talent"
                  onClick={closeDropdown}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900"
                >
                  Talent Services
                </Link>
              </div>
            </div> */}

            <div className="container mx-auto flex space-x-4">
              <Link
                onClick={closeDropdown}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900 flex items-center"
              >
                Capabilities
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <div className="flex-1 flex justify-center">
                <Link
                  to="/aboutus"
                  onClick={closeDropdown}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900"
                >
                  About Us
                </Link>
                <Link
                  to="/academy"
                  onClick={closeDropdown}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900"
                >
                  Amxsol Academy
                </Link>
                <Link
                  to="/foundation"
                  onClick={closeDropdown}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900"
                >
                  Amxsol Foundation
                </Link>
              </div>
            </div>
          </div>
        )}
        {/* Secondary Navbar for 'What we do' */}
        {!isMobile && activeDropdown === "whatWeDo" && (
          <div className="absolute bg-gray-800 mt-1 inset-x-0 top-full z-20">
            {/* <div className="container mx-auto flex space-x-4">
              <Link
                onClick={closeDropdown}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900 flex items-center"
              >
                Capabilities
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <div className="flex-1 flex justify-center">
                <Link
                  to="/aboutus"
                  onClick={closeDropdown}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900"
                >
                  About Us
                </Link>
                <Link
                  to="/academy"
                  onClick={closeDropdown}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900"
                >
                  Amxsol Academy
                </Link>
                <Link
                  to="/foundation"
                  onClick={closeDropdown}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900"
                >
                  Amxsol Foundation
                </Link>
              </div>
            </div> */}

            <div className="container mx-auto flex space-x-4">
              <Link
                onClick={closeDropdown}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900 flex items-center"
              >
                Our Services
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <div className="flex-1 flex justify-center">
                <Link
                  to="/services"
                  onClick={closeDropdown}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900"
                >
                  Business Solution
                </Link>
                <Link
                  to="/tech"
                  onClick={closeDropdown}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900"
                >
                  Technology Solution
                </Link>
                <Link
                  to="/business"
                  onClick={closeDropdown}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900"
                >
                  Business Impact
                </Link>

                <Link
                  to="/industries"
                  onClick={closeDropdown}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900"
                >
                  Industries
                </Link>
                <Link
                  to="talent"
                  onClick={closeDropdown}
                  className="px-4 py-2 text-gray-300 hover:text-white hover:bg-blue-900"
                >
                  Talent Services
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && isOpen && (
        <div className="absolute bg-gray-800 w-full p-4 z-20">
          <Link
            to="/"
            onClick={closeDropdown}
            className="block px-4 py-2 text-gray-300 hover:text-white"
          >
            Home
          </Link>
          <button
            onClick={() => toggleDropdown("whoWeAre")}
            className={`block px-4 py-2 text-gray-300 hover:text-white w-full text-left flex items-center ${
              activeDropdown === "whoWeAre" ? "bg-blue-500" : ""
            }`}
          >
            Who we are
            {/* What we do */}
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeDropdown === "whoWeAre" && (
            <div className="pl-4">
              <Link
                to="/aboutus"
                onClick={closeDropdown}
                className="block px-4 py-2 text-gray-300 hover:text-white"
              >
                About Us
              </Link>
              <Link
                to="/academy"
                onClick={closeDropdown}
                className="block px-4 py-2 text-gray-300 hover:text-white"
              >
                Amxsol Academy
              </Link>
              <Link
                to="/foundation"
                onClick={closeDropdown}
                className="block px-4 py-2 text-gray-300 hover:text-white"
              >
                Amxsol Foundation
              </Link>
            </div>
          )}
          <button
            onClick={() => toggleDropdown("whatWeDo")}
            className={`block px-4 py-2 text-gray-300 hover:text-white w-full text-left flex items-center ${
              activeDropdown === "whatWeDo" ? "bg-blue-500" : ""
            }`}
          >
            What we do
            {/* who we are */}
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeDropdown === "whatWeDo" && (
            // <div className="pl-4">
            //   {/* <Link
            //     onClick={closeDropdown}
            //     className="block px-4 py-2 text-gray-300 hover:text-white flex items-center"
            //   >
            //     Capabilities
            //     <svg
            //       className="ml-1 h-4 w-4"
            //       fill="none"
            //       viewBox="0 0 24 24"
            //       stroke="currentColor"
            //     >
            //       <path
            //         strokeLinecap="round"
            //         strokeLinejoin="round"
            //         strokeWidth="2"
            //         d="M9 5l7 7-7 7"
            //       />
            //     </svg>
            //   </Link> */}
            //   <Link
            //     to="/aboutus"
            //     onClick={closeDropdown}
            //     className="block px-4 py-2 text-gray-300 hover:text-white"
            //   >
            //     About Us
            //   </Link>
            //   <Link
            //     to="/academy"
            //     onClick={closeDropdown}
            //     className="block px-4 py-2 text-gray-300 hover:text-white"
            //   >
            //     Amxsol Academy
            //   </Link>
            //   <Link
            //     to="/foundation"
            //     onClick={closeDropdown}
            //     className="block px-4 py-2 text-gray-300 hover:text-white"
            //   >
            //     Amxsol Foundation
            //   </Link>
            // </div>
            <div className="pl-4">
              <Link
                to="/services"
                onClick={closeDropdown}
                className="block px-4 py-2 text-gray-300 hover:text-white"
              >
                Business Solution
              </Link>
              <Link
                to="/tech"
                onClick={closeDropdown}
                className="block px-4 py-2 text-gray-300 hover:text-white"
              >
                Technology Solution
              </Link>
              <Link
                to="/business"
                onClick={closeDropdown}
                className="block px-4 py-2 text-gray-300 hover:text-white"
              >
                Business Impact
              </Link>
              <Link
                to="/industries"
                onClick={closeDropdown}
                className="block px-4 py-2 text-gray-300 hover:text-white"
              >
                Industries
              </Link>
              <Link
                to="/talent"
                onClick={closeDropdown}
                className="block px-4 py-2 text-gray-300 hover:text-white"
              >
                Talent Services
              </Link>
            </div>
          )}
          <Link
            to="/carrer"
            onClick={closeDropdown}
            className="block px-4 py-2 text-gray-300 hover:text-white"
          >
            Build a career with us
          </Link>
          <Link
            to="/contact"
            onClick={closeDropdown}
            className="block px-4 py-2 text-gray-300 hover:text-white"
          >
            Contact Us
          </Link>
          <button
            onClick={toggleSearch}
            className="block px-4 py-2 text-gray-300 hover:text-white"
          >
            <i className="fas fa-search"></i>
          </button>
          {showSearch && (
            <div className="flex items-center mt-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="px-2 py-1 rounded-md border border-gray-700 bg-gray-900 text-white"
              />
              <button
                onClick={handleSearch}
                className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
              >
                Search
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
