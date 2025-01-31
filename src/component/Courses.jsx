import React from "react";
import NavList from "./NavList";
import Navbar from "./Navbar";
import CoursesItem from "./CoursesItem";
import Footer from "./Footer";

const Courses = () => {
  return (
      <>
    <div>
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <div className="block sm:hidden">
        <NavList />
      </div>
    </div>
      <div>
        <div
          className="h-screen bg-cover  bg-center"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/ccnkzjxW/istockphoto-1066991874-612x612-1.jpg )",
              height: "400px",
            
          }}
        >
          <div className="flex text-center  flex-col sm:flex-row px-6 sm:px-30 gap-6 sm:gap-44 sm:items-start">
            <div className="mt-10">
              <h1 className=" sm:text-4xl text-[#002e6e] p-2 mt-10 ">
              <span className="text-5xl font-extrabold text-white">Study</span> <span className="text-[#e32040] text-5xl font-extrabold">UK courses</span>
              </h1>
              <p className="text-2xl  text-white font-bold mt-6">
              Foundation, undergraduate, postgraduate taught & research and professional courses to study in the UK
              </p>
            
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#ababab] flex mx-auto mt-16 w-full md:w-[550px] p-4 ">
        <input type="text" className="bg-white p-2 rounded-l-xl w-[500px] " name="" id="" placeholder="Find Courses Here.." />
      </div>
      <div className="ml-4  mt-4">
      <CoursesItem/>
      </div>
      <Footer/>
      </>
  );
};

export default Courses;
