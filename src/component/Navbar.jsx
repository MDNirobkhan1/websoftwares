import React from "react";
import Courses from "./Courses";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm flex justify-between items-center px-6 py-2">
        <div className="flex items-center space-x-2">
          <span className="text-red-500">📞</span>
          <span>
            Call us: +88 (0) 1712969390, +44 (0) 7495942849, +44 (0) 7459725824
          </span>
        </div>
        <div className="flex items-center">
          <a href="#" className="hover:text-gray-300 mr-2">
            Sign in
          </a>{" "}
          |{" "}
          <a href="#" className="hover:text-gray-300 ml-2">
            Sign up
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/image/soft.PNG" alt="TSC Logo" className="h-18" />
          </div>

          {/* Menu Items */}
          <ul className="hidden md:flex space-x-6 text-sm font-semibold">
            <li>
              <Link to="/">
                <a href="#" className="hover:text-red-500">
                  HOME
                </a>
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                ABOUT
              </a>
            </li>
            <li>
              <Link to="/courses">
                <a className="hover:text-red-500">COURSES</a>
              </Link>
            </li>
            <li>
              <Link to="/university">
                <a className="hover:text-red-500">UNIVERSITIES</a>
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                SCHOLARSHIPS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                ASSOCIATES
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                STUDENT SERVICE
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                CONTACT
              </a>
            </li>
          </ul>

          {/* Country Selector */}
          <div className="flex items-center space-x-2">
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="UK Flag"
              className="h-5"
            />
            <select className="border border-gray-300 p-1 rounded text-sm">
              <option>United Kingdom</option>
              <option>USA</option>
              <option>Canada</option>
            </select>
          </div>
        </div>
      </nav>

      {/* Push content down to avoid overlap */}
      <div className="mt-16" />
    </div>
  );
};

export default Navbar;
