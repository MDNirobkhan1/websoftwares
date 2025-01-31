import React from "react";
import NavList from "./NavList";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Universities = () => {
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
                <span className="text-5xl font-extrabold text-white">UK</span> <span className="text-[#e32040] text-5xl font-extrabold"> University</span>
                </h1>
                <p className="text-2xl  text-white font-bold mt-6">
                Foundation, undergraduate, postgraduate taught & research and professional courses to study in the UK
                </p>
                
                </div>
            </div>
            </div>
        </div>
          <div>
            <div className=" md:flex md:h-24 h-68  items-center justify-center gap-24 bg-[#2b4c82]">
                <div>
                <select className=" mb-2 bg-white w-[90%] md:ml-0 ml-7  mt-4 md:w-52 rounded h-10 cursor-pointer px-3 py-1" name="cars" id="cars">
                <option value="volvo">--Any---</option>
                <option value="volvo">University</option>
                <option value="saab">Collage</option>
                
                </select>
                </div>
                <div>
                <select className=" mb-2 bg-white w-[90%] md:ml-0 ml-7  mt-4 md:w-52 rounded h-10 cursor-pointer px-3 py-1" name="cars" id="cars">
                <option value="volvo">United Kingdom</option>
                <option value="volvo">Bangladesh</option>
                <option value="saab">Canada</option>
                
                </select>
                </div>
                <div>
                <select className=" mb-2 bg-white w-[90%] md:ml-0 ml-7  mt-4 md:w-52 rounded h-10 cursor-pointer px-3 py-1" name="cars" id="cars">
                <option value="volvo">City</option>
                <option value="volvo">London</option>
                <option value="saab">Bangor</option>
                
                </select>
                  </div>
                  <div className="bg-[#e32040] md:mb-2 mb-2  w-[90%] md:ml-0 ml-7  mt-4 md:w-52 rounded h-10   text-center cursor-pointer px-3 py-1">
                      <button className="mt-1 text-white text-xl mb-3">Filter</button>
                  </div>
            
            </div>
          </div>

            <div className="bg-[#dfe4ed] mb-6 mx-18 md:mx-auto md:max-w-3xl p-4 mt-10 border border-dotted border-[#cbddf7]">
                <div className="md:flex gap-8 items-center justify-center mt-3 mb-2 ">
                    <div className="">
                        <img className="  md:ml-0 ml-22 border-3 border-dashed border-[#cbddf7]" src="/image/images.png" alt="Bangor University Logo" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-800 md:mt-0 mt-3 mb-2  md:mb-1">Bangor University</h1>
                        <table className="w-full border-collapse border bg-white border-gray-300">
                            <tbody>
                                <tr className="border-b border-gray-300">
                                    <td className="p-2 border-r border-gray-300 font-semibold text-gray-700">Main Campus Location</td>
                                    <td className="p-2 text-gray-600">Bangor, United Kingdom</td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <td className="p-2 border-r border-gray-300 font-semibold text-gray-700">About Bangor University</td>
                                    <td className="p-2 text-blue-500 hover:underline cursor-pointer">View Profile</td>
                                </tr>
                                <tr className="border-b border-gray-300">
                                    <td className="p-2 border-r border-gray-300 font-semibold text-gray-700">Scholarships</td>
                                    <td className="p-2 text-gray-600">Available</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border-r border-gray-300 font-semibold text-gray-700">Find Courses</td>
                                    <td className="p-2 text-blue-500 hover:underline cursor-pointer">View all (0)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
        
          <Footer/>
      </>
  );
};

export default Universities;

