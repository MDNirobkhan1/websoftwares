import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";

const NavList = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  const handleNavigation = path => {
    setLoading(true);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 1000); // Simulated loading time
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide top bar when scrolling down, show when scrolling up
      setHideTopBar(currentScrollY > lastScrollY && currentScrollY > 50);

      // Navbar moves up when scrolling down
      setScrolling(currentScrollY > 50);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div
        className={`bg-[#131921] text-white text-sm px-6 py-2 transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${hideTopBar
          ? "-translate-y-full"
          : "translate-y-0"}`}
      >
        <div className="flex justify-center items-center space-x-2">
          <span className="text-center text-sm">
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

      {/* Main Navbar */}
      <div
        className={`fixed top-0  left-0 w-full bg-white shadow-md z-40 transition-all duration-300 px-5 cursor-pointer  ${scrolling
          ? "py-2 mt-0"
          : "py-4 mt-8"}`}
      >
        <div className="mt-10">
          <div
            className={` flex justify-center h-${scrolling
              ? "12"
              : "24"} transition-all duration-300`}
          >
            <Link onClick={() => handleNavigation("/")}>
              <img className="h-24" src="/image/soft.PNG" alt="Logo" />
            </Link>
          </div>
          <nav
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#135494] text-white"
          >
            <div className="container mx-auto flex justify-between items-center py-[5px] px-4">
              <div className="text-sm font-bold">TSC MENU</div>

              {/* Mobile Menu Button */}
              <button className="text-white focus:outline-none">
                {isOpen ? "▲" : "▼"}
              </button>
            </div>
          </nav>

          {/* Menu Items - Show only if isOpen is true */}
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`overflow-hidden text-[11px] font-bold p-3 ${isOpen
              ? "block"
              : "hidden"}`}
          >
            <li className="mb-3">
              <Link
                onClick={() => handleNavigation("/")}
                className="hover:text-red-500"
              >
                HOME
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/about" className="hover:text-red-500">
                ABOUT
              </Link>
            </li>
            <li className="mb-3">
              <Link
                onClick={() => handleNavigation("/courses")}
                className="hover:text-red-500"
              >
                COURSES
              </Link>
            </li>
            <li className="mb-3">
              <Link
                onClick={() => handleNavigation("/university")}
                className="hover:text-red-500"
              >
                UNIVERSITIES
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/scholarships" className="hover:text-red-500">
                SCHOLARSHIPS
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/associates" className="hover:text-red-500">
                ASSOCIATES
              </Link>
            </li>
            <li className="mb-3">
              <Link to="/student-service" className="hover:text-red-500">
                STUDENT SERVICE
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500">
                CONTACT
              </Link>
            </li>
          </motion.ul>
        </div>
        <div className="flex justify-center mb-4 items-center space-x-2">
          <img
            src="https://flagcdn.com/w40/gb.png"
            alt="UK Flag"
            className="h-4 w-5"
          />
          <select className="border border-gray-300 p-1 rounded text-sm mt-3">
            <option>United Kingdom</option>
            <option>USA</option>
            <option>Canada</option>
          </select>
        </div>
      </div>
      {/* Loading Indicator */}
      {loading &&
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 opacity-60 z-50">
          <div className="text-white text-lg font-semibold">Loading...</div>
        </div>}
    </div>
  );
};

export default NavList;
