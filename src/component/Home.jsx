import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NavList from "./NavList";


const Home = () => {
  return (
    <>
      {/* Show Navbar on large screens and NavList on small screens */}
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <div className="block sm:hidden">
        <NavList />
      </div>

      <div>
        <div
          className="h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('https://i.ibb.co/pj7Znx6t/soft1.webp')",
            height: "400px",
          }}
        >
          <div className="flex flex-col sm:flex-row px-6 sm:px-30 gap-6 sm:gap-44 sm:items-start">
            <div>
              <h1 className="text-3xl sm:text-4xl text-[#002e6e] p-2 mt-10">
                Start your study journey now
              </h1>
              <p className="text-lg sm:text-xl font-bold mt-6">
                Check it to make it
              </p>
              <button className="bg-[#e32040] mt-10 border-2 border-[#e32040] hover:bg-white hover:text-red-600 cursor-pointer text-lg sm:text-xl rounded-full p-3 font-bold text-white">
                <span className="p-2">Check Your admission eligibility</span>
              </button>
            </div>
            <div>
              <h1 className="flex gap-2 sm:gap-4 mt-2">
                <p className="text-[60px] font-extrabold text-[#002e6e]">UK</p>
                <p className="text-[#e32040] font-bold text-xl sm:text-2xl">
                  University <br /> Admission <br /> Expert
                </p>
              </h1>
            </div>
          </div>
        </div>
      </div>
      

      <Footer />
    </>
  );
};

export default Home;
