import React, { useState } from "react";
import Navbar from "../Navbar";
import NavList from "../NavList";
import Footer from "../Footer";


const ViewDetails = () => {
    const courses = [
        { name: "Advanced Diploma in Accounting and Finance (ACCA route)", duration: "18 months (full time)", location: "London", fees: "8010 GBP" },
        { name: "ACCA Professional Level Papers", duration: "11 months (full time)", location: "London", fees: "7500 GBP" },
        { name: "AACA Skills Level", duration: "12 months (full time)", location: "Birmingham", fees: "7200 GBP" },
        { name: "AACA Professional Level", duration: "12 months (full time)", location: "Birmingham", fees: "7200 GBP" },
        { name: "MSc Accounting (ACCA)", duration: "12 months (full time)", location: "Brighton", fees: "15535 GBP" },
      ];

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        nationality: "",
        country: "",
        qualification: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    return (
        <>
             <div>{/* navbar  */}
               <div>
                    <div className="hidden  sm:block">
                        <Navbar />
                    </div>
                    <div className="block sm:hidden">
                        <NavList />
                    </div>
                </div>
            </div>

            {/* banner part */}
            <div className="md:mt-44 mt-76 md:flex gap-5">
                
                <div className="md:w-[75%]">
                    <div class=" md:mb-6 mb-4  ">
                            <div class=" w-full  ">
                                <div className="border-b  border-gray-200 mt-10 px-4 ">
                                    <p class="text-2xl font-semibold  text-blue-800  mb-4">Advanced Diploma in Accounting and Finance (ACCA route)</p>
  
                                </div>
                                <div className="border-b  border-gray-200 mt-4 px-4  ">
                                    <h2 class="text-2xl font-semibold  text-blue-800  mb-4">Key Information</h2>
  
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 mt-6 gap-6 text-center">
                                    <div>
                                        <p className="text-[#101559]">Course Subject</p>
                                        <p className="font-semibold text-[18px] text-gray-500">ACCA</p>
                                    </div>
                                    <div>
                                        <p className="text-[#101559]">Total Academic Credit</p>
                                        <p className="font-semibold text-[18px] text-gray-500">330</p>
                                    </div>
                                    <div>
                                        <p className="text-[#101559]">Qualification Awarded</p>
                                        <p className="font-semibold text-[18px] text-gray-500">Advanced Diploma</p>
                                    </div>
                                    <div>
                                        <p className="text-[#101559]">Awarding Body</p>
                                        <p className="font-semibold text-[18px] text-gray-500">BPP University</p>
                                    </div>
                                    <div>
                                        <p className="text-[#101559]">Professional Recognition</p>
                                        <p className="font-semibold text-[18px] text-gray-500">ACCA</p>
                                    </div>
                                    <div>
                                        <p className="text-[#101559]">Academic Level</p>
                                        <p className="font-semibold text-[18px] text-gray-500">Level 6</p>
                                    </div>
                                    <div>
                                        <p className="text-[#101559]">Study Mode</p>
                                        <p className="font-semibold text-[18px] text-gray-500">Full Time</p>
                                    </div>
                                    <div>
                                        <p className="text-[#101559]">Course Duration</p>
                                        <p className="font-semibold text-[18px] text-gray-500">18 months (full time)</p>
                                    </div>
                                    <div>
                                        <p className="text-[#101559]">Course Fees</p>
                                        <p className="font-semibold text-[18px] text-gray-500">£8,010 full fees</p>
                                    </div>
                                    <div>
                                        <p className="text-[#101559]">Intakes</p>
                                        <p className="font-semibold text-[18px] text-gray-500">September, March</p>
                                    </div>
                                    <div>
                                        <p className="text-[#101559]">Work Placement</p>
                                        <p className="font-semibold text-[18px] text-gray-500">Yes</p>
                                    </div>
                                    <div>
                                        <p className="text-[#101559]">Course Location</p>
                                        <p className="font-semibold text-[18px] text-gray-500">London</p>
                                    </div>
                                </div>
                                {/* <div className="flex justify-center mt-14 space-x-4">
                                    
                                    <Link onClick={() => handleNavigation("/view-details")} ><button className="px-4 py-2 border rounded hover:bg-[#101559] hover:text-white cursor-pointer ">View Details</button></Link>
                                    <Link onClick={() => handleNavigation("/admissionquery")} ><button className="px-4 py-2 border rounded hover:bg-[#101559] hover:text-white cursor-pointer ">Send Query</button></Link>
                                </div> */}
                            </div>
                    </div>
                    {/* table  */}

                        <div className="mt-16">
                            <div className=" mx-auto p-4   bg-gray-100 shadow-md rounded-lg">
                                    <h2 className="text-3xl font-semibold border-b border-white pb-2">Similar Courses</h2>
                                    <table className="  ">
                                        <thead>
                                        <tr className=" text-left">
                                            <th className=" font-semibold">Course Name</th>
                                            <th className="p-3 font-semibold">Course Duration</th>
                                            <th className="p-3 font-semibold">Course Location</th>
                                            <th className="p-3 font-semibold">Course Fees</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {courses.map((course, index) => (
                                            <tr key={index} className="border-t border-white">
                                            <td className="p-3">{course.name}</td>
                                            <td className="p-3">{course.duration}</td>
                                            <td className="p-3">{course.location}</td>
                                            <td className="p-3">{course.fees}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                        
                </div>
                <div className="md:w-[25%] md:px-0 px-4 mt-8 mb-4">
                    <h1 className="text-[#001059] font-medium text-center">Admission Query</h1>
                    <div className="max-w-md mt-4  p-6 bg-[#f0f0f0]  rounded shadow-2xl">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-1 mb-3 border rounded"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Enter number with country code"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-1 mb-3 border rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-1 mb-3 border rounded"
                    />
                    <input
                        type="text"
                        name="nationality"
                        placeholder="Your Nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        className="w-full p-1 mb-3 border rounded"
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Your Country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full p-1 mb-3 border rounded"
                    />
                    <input
                        type="text"
                        name="qualification"
                        placeholder="Current Qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        className="w-full p-1 mb-3 border rounded"
                    />
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="recaptcha" className="w-4 h-4" />
                        <label htmlFor="recaptcha">I'm not a robot</label>
                    </div>
                    </div>
                    <div>
                        <img className="mt-4 w-[395px]" src="/icon/11.PNG" alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
  );
};

export default ViewDetails;
