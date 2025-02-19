import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion for animation
import { Link, useNavigate } from "react-router";


const CoursesItem = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleNavigation = path => {
      setLoading(true);
      setTimeout(() => {
        navigate(path);
        setLoading(false);
      }, 1000); // Simulated loading time
    };
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);


  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const courses = [
    {
      name: "Advanced Diploma in Accounting and Finance (ACCA route)",
      awardingBody: "BPP University",
      fees: "£8,010.00 full fees",
    },
    
  ];

  return (
    <div className="md:flex gap-4  mb-4">
      {/* Sidebar for Categories */}
      <div className="md:mt-36 mt-7  w-full md:w-[20%] ">
        <div className="shadow-md bg-[#f0f0f0] w-[367px]  md:w-[100%] py-2   md:px-2 border-b border-gray-300">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex bg-white rounded-full cursor-pointer shadow-lg h-10 px-2 md:px-2 items-center justify-between w-[100%]"
          >
            <h1 className="text-xl">Courses Category</h1>
            <i className="zmdi zmdi-chevron-down mr-2 cursor-pointer" />
          </div>
        </div>
      
        

        {/* Smooth Opening Category List */}
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            {[
              "Accounting & Finance",
              "Art & Design",
              "Built Environment & Architecture",
              "Business & Management",
              "Computer Science & IT",
              "Construction & Project Management",
              "Economics & Banking",
              "Education & Teaching",
            ].map((category, index) => (
              <div key={index} className="mb-4">
                <p>
                  {category}{" "}
                  <span
                    className="text-[#25447d] font-bold cursor-pointer"
                    onClick={() => toggleCategory(category)}
                  >
                    {openCategory === category ? "hide" : "view more"}
                  </span>
                </p>

                {/* Smoothly Open Subcategories */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={openCategory === category ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-2 grid grid-rows-1"
                >
                  {openCategory === category && (
                    <>
                      <label>
                        <input type="radio" name={category} />
                        <span className="ml-2">{category} Option 1</span>
                      </label>
                      <label>
                        <input type="radio" name={category} />
                        <span className="ml-2">{category} Option 2</span>
                      </label>
                      <label>
                        <input type="radio" name={category} />
                        <span className="ml-2">{category} Option 3</span>
                      </label>
                    </>
                  )}
                </motion.div>
              </div>
            ))}
          </motion.div>
        )}
        <div className="mt-4 ">
          <img className="w-[367px] md:w-[20%]" src="/icon/11.PNG" alt="" />
        </div>
      </div>
      

      {/* Table Section */}
      
      <div className="md:mt-[-15px] mt-10 w-0 md:w-[80%]">
         <div className="  bg-[#ababab] flex  mt-16 w-[367px]  md:w-[700px]  p-4 ">
                <input type="text" className="bg-white p-2 rounded-l w-[620px] " name="" id="" placeholder="Find Courses Here.." />
                <button className="bg-[#db3027] p-2 px-4 text-white cursor-pointer rounded-r-sm hover:text-black">SEARCH</button>
        </div>
          <div className="md:flex mt-4 md:mt-4 md:px-4  md:justify-between">
            <h1 className="text-3xl md:w-full md:ml-0 ml-24 w-44">Our Courses</h1>
            <select className="border-2 ml-24 md:mr-0 text-center w-44 md:w-44 md:mt-0 mt-8 border-indigo-800 rounded hover:bg-[#001059] hover:text-white cursor-pointer px-3 py-1">
              <option value="all">All Courses</option>
              <option value="finance">Finance</option>
              <option value="it">IT</option>
              <option value="management">Management</option>
            </select>
          </div>

          <table className="md:w-full w-[380px] md:mt-0 mt-8">
            <thead>
              <tr className="text-center md:text-left">
                <th className="md:px-6 text-center md:py-3">Course Name</th>
                <th className="px-6 py-3 md:block hidden">Awarding Body</th>
                <th className="md:px-6 md:py-3">Course Fees</th>
              </tr>
            </thead>
            <tbody>
                {courses.map((course, index) => (
                  <>
                    {/* Main Row */}
                    <tr
                      key={index}
                      className={`  cursor-pointer ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      }`}
                      onClick={() => toggleExpand(index)}
                    >
                      <td className="md:px-6 px-2 md:py-4">{course.name}</td>
                      <td className="px-6 py-4 md:block hidden">{course.awardingBody}</td>
                      <td className="md:px-6 px-2 py-2 md:py-4">{course.fees}</td>
                    </tr>

                    {/* Collapsible Row */}
                    <tr>
                      <td colSpan="3" className="p-0">
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: expandedIndex === index ? "auto" : 0, opacity: expandedIndex === index ? 1 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden  "
                        >
                      <div class=" md:mb-6 mb-4 ">
                          <div class=" w-full  ">
                              <div className="border-b mx-auto border-gray-200 mt-10 gap-32 md:flex items-center justify-center ">

                                <h2 class="text-2xl font-semibold text-center text-blue-800 md:ml-14 mb-4">Advanced Diploma in Accounting and Finance (ACCA route)</h2>
                                <div className="flex gap-2 md:ml-0 ml-32 bg-[#101559] text-white font-medium p-1 :px-4  w-[100px] rounded shadow mb-4 items-center"> 
                                  <p>Share</p>
                                  <p><i className="zmdi zmdi-share"></i></p>
                                </div>

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
                              <div className="flex justify-center mt-14 space-x-4">
                                  
                                  <Link onClick={() => handleNavigation("/view-details")} ><button className="px-4 py-2 border rounded hover:bg-[#101559] hover:text-white cursor-pointer ">View Details</button></Link>
                                  <Link onClick={() => handleNavigation("/admissionquery")} ><button className="px-4 py-2 border rounded hover:bg-[#101559] hover:text-white cursor-pointer ">Send Query</button></Link>
                              </div>
                          </div>
                      </div>
                        </motion.div>
                      </td>
                    </tr>
                  </>
                ))}
           </tbody>
          </table>
        </div>
        {loading &&
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 opacity-60 z-50">
          <div className="text-white text-lg font-semibold">Loading...</div>
        </div>}
    </div>
  );
};

export default CoursesItem;
