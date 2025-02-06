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
      <div className="mt-[260px] md:mt-0">
        <div
          className="md:h-[400px] h-[200px] bg-cover  bg-center"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/ccnkzjxW/istockphoto-1066991874-612x612-1.jpg )",
              
            
          }}
        >
          <div className=" flex justify-center">
            <div className="mt-20">
              <h1 className=" text-center text-[#002e6e] p-2 md:mt-10 ">
              <span className="md:text-5xl text-3xl font-extrabold text-white mr-3">Study</span> <span className="text-[#e32040] md:text-5xl text-3xl font-extrabold">UK courses</span>
              </h1>
              <p className=" md:text-xl text-sm md:px-0 px-4 md:ml-0 ml-6  text-white font-bold md:mt-6">
              Foundation, undergraduate, postgraduate taught & research and professional courses to study in the UK
              </p>
            
            </div>
          </div>
        </div>
      </div>
      
      <div className="ml-4  mt-4">
      <CoursesItem/>
      </div>
      <Footer/>
      </>
  );
};

export default Courses;
