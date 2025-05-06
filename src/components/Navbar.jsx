import React, { useState } from "react";
import { FaSearch, FaUser, FaHome, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#fffaf6] shadow-md sticky top-0 z-50 px-6 py-4 md:px-12">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl md:text-3xl font-extrabold tracking-wide text-gray-900">
          <FaHome className="text-orange-500" />
          <span>AR</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-10 text-[1.1rem] font-semibold text-gray-800">
          <li className="hover:text-orange-500 cursor-pointer transition-all duration-200">Home</li>
          <li className="hover:text-orange-500 cursor-pointer transition-all duration-200">Service</li>
          <li className="hover:text-orange-500 cursor-pointer transition-all duration-200">Agents</li>
          <li className="hover:text-orange-500 cursor-pointer transition-all duration-200">Contact</li>
        </ul>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-6 text-[1.3rem] text-gray-700">
          <FaSearch className="cursor-pointer hover:text-orange-400 transition-all duration-200" />
          <FaUser className="cursor-pointer hover:text-orange-400 transition-all duration-200" />
          <button className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 shadow-md transition-all duration-300">
            Get Started
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl text-gray-700 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-800 text-lg font-semibold">
          <div className="flex flex-col gap-3 font-bold">
            <span className="hover:text-orange-500 cursor-pointer">Home</span>
            <span className="hover:text-orange-500 cursor-pointer">Service</span>
            <span className="hover:text-orange-500 cursor-pointer">Agents</span>
            <span className="hover:text-orange-500 cursor-pointer">Contact</span>
          </div>
          <div className="flex gap-4 mt-4 items-center">
            <FaSearch className="hover:text-orange-400 cursor-pointer text-xl" />
            <FaUser className="hover:text-orange-400 cursor-pointer text-xl" />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 shadow-md transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;