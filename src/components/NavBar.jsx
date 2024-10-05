import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import Buttons from "./Buttons";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "FEATURES", path: "/features" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-auto w-auto max-h-12" />
            </Link>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex items-center justify-center flex-grow -0 lg:ml-[20px] md:ml-0">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`py-4 px-4 text-lg xl:text-xl font-semibold transition duration-300 ${
                  location.pathname === item.path
                    ? "text-blue-800 border-b-2 border-blue-800"
                    : "text-dark hover:text-purple-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex ml-0 lg:ml-[20px] md:ml-0">
            <Buttons />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              className="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6 text-gray-500 hover:text-purple-500 transition duration-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="bg-white shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block py-2 px-4 text-sm transition duration-300 ${
                location.pathname === item.path
                  ? "bg-purple-500 text-white"
                  : "text-dark hover:bg-purple-500 hover:text-white"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          {/* Mobile Buttons */}
          <div className="py-4 px-4">
            <Buttons />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
