import React, { useState } from "react";
import { Link } from "react-router";

const NavList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm px-6 py-2">
        <div className="flex justify-center items-center space-x-2">
          <span>
            Call us: +88 (0) 1712969390, +44 (0) 7495942849, +44 (0) 7459725824
          </span>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            Sign in
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-300">
            Sign up
          </a>
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-center mb-2 mt-2">
        <img className="h-24" src="/image/soft.PNG" alt="Logo" />
      </div>

      {/* Main Navbar */}
      <div className="px-12">
        <nav className="bg-[#135494] text-white mb-4">
          <div className="container mx-auto flex justify-between items-center py-2 px-4">
            <div className="text-lg font-bold">TSC MENU</div>

            {/* Mobile Menu Button */}
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "▲" : "▼"}
            </button>
          </div>
        </nav>

        {/* Menu Items - Show only if isOpen is true */}
        {isOpen &&
          <ul className="text-sm p-3 ">
            <li className="mb-2 ">
              <Link to="/">
                <a href="#" className="hover:text-red-500  ">
                  HOME
                </a>
              </Link>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-red-500">
                ABOUT
              </a>
            </li>
            <li className="mb-2">
              <Link to="/courses">
                <a href="#" className="hover:text-red-500">
                  COURSES
                </a>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/university">
                <a href="#" className="hover:text-red-500">
                  UNIVERSITIES
                </a>
              </Link>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-red-500">
                SCHOLARSHIPS
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-red-500">
                ASSOCIATES
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-red-500">
                STUDENT SERVICE
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                CONTACT
              </a>
            </li>
          </ul>}
      </div>
      <div className="flex justify-center mb-4 items-center space-x-2">
        <img
          src="https://flagcdn.com/w40/gb.png"
          alt="UK Flag"
          className="h-4 w-5"
        />
        <select className="border border-gray-300 p-1 rounded text-sm">
          <option>United Kingdom</option>
          <option>USA</option>
          <option>Canada</option>
        </select>
      </div>
    </div>
  );
};

export default NavList;
