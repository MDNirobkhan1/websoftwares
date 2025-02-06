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
     <div className="mt-[260px] md:mt-0">
            <div
            className="md:h-[400px] h-[200px] bg-cover  bg-center"
            style={{
                backgroundImage: "url('https://i.ibb.co.com/ccnkzjxW/istockphoto-1066991874-612x612-1.jpg )",
                
                
            }}
            >
            <div className="flex justify-center">
            <div className="mt-20">
              <h1 className=" text-center text-[#002e6e] p-2 md:mt-10 ">
              <span className="md:text-5xl text-3xl font-extrabold text-white mr-3">UK</span> <span className="text-[#e32040] md:text-5xl text-3xl font-extrabold">Universities</span>
              </h1>
              <p className="  md:text-xl text-sm  md:px-0 px-4 md:ml-0 ml-6  text-white font-bold md:mt-6">
              Foundation, undergraduate, postgraduate taught & research and professional courses to study in the UK
              </p>
            
            </div>
          </div>
            </div>
     </div>
        <div>
            <div className=" md:flex md:h-28  h-[300px] text-center  md:items-center md:justify-center gap-12 bg-[#2b4c82]">
                <div>
                <select className=" mb-2 bg-white w-[80%]  md:ml-0 ml-7  md:mt-4 mt-9 md:w-60 rounded h-10 cursor-pointer px-3 py-1" name="cars" id="cars">
                <option value="volvo">--Any---</option>
                <option value="volvo">University</option>
                <option value="saab">Collage</option>
                
                </select>
                </div>
                <div>
                <select className=" mb-2 bg-white w-[80%] md:ml-0 ml-7  mt-4 md:w-60  rounded h-10 cursor-pointer px-3 py-1" name="cars" id="cars">
                <option value="volvo">United Kingdom</option>
                <option value="volvo">Bangladesh</option>
                <option value="saab">Canada</option>
                
                </select>
                </div>
                <div>
                <select className=" mb-2 bg-white w-[80%] md:ml-0 ml-7  mt-4 md:w-60  rounded h-10 cursor-pointer px-3 py-1" name="cars" id="cars">
                <option value="volvo">City</option>
                <option value="volvo">London</option>
                <option value="saab">Bangor</option>
                
                </select>
                  </div>
                  <div className="flex  justify-center ">
                    <div className="bg-[#e32040] md:mb-2 mb-2  w-[80%] md:ml-0 ml-7  mt-4 md:w-60  rounded h-10   md:text-center cursor-pointer px-3 py-1">
                        <button className=" text-white text-xl mb-3">Filter</button>
                    </div>
                  </div>
            
            </div>
        </div>
                 {/* University card  */}
        <div>
            <div className="bg-[#dfe4ed] mb-6  md:mx-auto md:max-w-6xl mx-auto md:w-full w-[90%]   mt-10 border-2 border-dashed border-[#cbddf7]">
                <div className="md:flex md:px-10 gap-12 py-4   mt-3 mb-2">
                    <div className="mb-3 flex justify-center">
                        <img className=" border-3 border-dashed border-[#cbddf7] w-[300px] h-[190px] md:w-[320px] md:h-[192px]" src="/image/images.png" alt="Bangor University Logo" />
                    </div>
                    <div className="mb-3 mt-[-4px] md:l-0 ml-3">
                        <h1 className="text-2xl font-bold text-[#002569] md:mt-0  mb-2   md:mb-3">Bangor University</h1>
                        <table className="md:w-[700px] text-sm border-collapse border bg-white border-gray-300">
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
            <div className="bg-[#dfe4ed] mb-6  md:mx-auto md:max-w-6xl mx-auto md:w-full w-[90%]   mt-3 border-2 border-dashed border-[#cbddf7]">
                <div className="md:flex md:px-10 gap-12 py-4   mt-3 mb-2">
                    <div className="mb-3 flex justify-center">
                        <img className=" border-3 border-dashed border-[#cbddf7] w-[300px] h-[190px] md:w-[320px] md:h-[192px]" src="/image/images (1).png" alt="Bangor University Logo" />
                    </div>
                    <div className="mb-3 mt-[-4px] md:l-0 ml-3">
                        <h1 className="text-2xl font-bold text-[#002569] md:mt-0  mb-2   md:mb-3">Birmingham City University</h1>
                        <table className="md:w-[700px] text-sm border-collapse border bg-white border-gray-300">
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
            
        </div>
        
          <Footer/>
      </>
  );
};

export default Universities;

