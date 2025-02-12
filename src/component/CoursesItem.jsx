import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion for animation

const CoursesItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const courses = [
    {
      name: "Advanced Diploma in Accounting and Finance (ACCA route)",
      awardingBody: "BPP University",
      fees: "£8,010.00 full fees",
    },
    {
      name: "ACCA Professional Level Papers",
      awardingBody: "BPP University",
      fees: "£7,500.00 full fees",
    },
    {
      name: "BSc (Hons) Accounting and Finance",
      awardingBody: "BPP University",
      fees: "£9,000.00 per year",
    },
    {
      name: "BSc (Hons) Accounting and Finance (accelerated)",
      awardingBody: "BPP University",
      fees: "£13,500.00 per year",
    },
    {
      name: "BSc (Hons) Healthcare Practice (Diploma to Degree)",
      awardingBody: "BPP University",
      fees: "£10,000.00 full fees",
    },
  ];

  return (
    <div className="md:flex gap-4">
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
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="md:px-6 px-2 md:py-4">{course.name}</td>
                  <td className="px-6 py-4 md:block hidden">{course.awardingBody}</td>
                  <td className="md:px-6 px-2 py-2 md:py-4">{course.fees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
    </div>
  );
};

export default CoursesItem;
