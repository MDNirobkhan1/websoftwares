import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NavList from "./NavList";
import AdmissionForm from "./AdmissionForm";
import { Link, useNavigate } from "react-router";
import CountryPage from "./CountryPage";
import BannerSmart from "./BannerSmart";


const Home = () => {
  const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleNavigation = path => {
        setLoading(true);
        setTimeout(() => {
          navigate(path);
          setLoading(false);
        }, 1000); // Simulated loading time
      };
  return (
    <>
      {/* Show Navbar on large screens and NavList on small screens */}
      <div className="hidden  sm:block">
        <Navbar />
      </div>
      <div className="block sm:hidden">
        <NavList />
      </div>

      <div className="mt-[280px] md:mt-0">
        <div
          className="md:h-[450px] h-[450px] bg-cover bg-center "
          style={{
            backgroundImage: "url('https://i.ibb.co/pj7Znx6t/soft1.webp')",
            
          }}
        >
          <div className="flex justify-center  flex-col sm:flex-row px-6 sm:px-30 gap-6 sm:gap-44 sm:items-start">
            <div className="md:mt-10 mt-0">
              <h1 className="md:text-4xl text-4xl   text-[#002e6e] md:p-2 p-0 md:mt-24 mt-10">
                Start your study journey now
              </h1>
              <p className="text-lg sm:text-xl font-bold md:mt-12 mt-10">
                Check it to make it
              </p>
              <button className="bg-[#e32040] md:mt-8 mt-6 border-2 border-[#e32040] hover:text-red-600 transition duration-300 ease-in-out hover:bg-transparent cursor-pointer text-lg sm:text-xl rounded-full p-3 font-bold text-white">
                <Link  onClick={() => handleNavigation("/admissionform")}>
                <span className="p-2">Check Your admission eligibility</span>
                </Link>
              </button>
            </div>
            <div>
              <h1 className="flex items-center md:gap-4 gap-6 md:mt-14 mt-4">
                <p className="text-[100px] font-extrabold text-[#002e6e]">UK</p>
                <p className="text-[#e32040] mt-3 font-bold text-xl ">
                  University <br /> Admission <br /> Expert
                </p>
              </h1>
            </div>
          </div>
        </div>
        {loading &&
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 opacity-60 z-50">
          <div className="text-white text-lg font-semibold">Loading...</div>
        </div>}
      </div>
      <CountryPage />
      <BannerSmart/>
      <Footer />
    </>
  );
};

export default Home;
