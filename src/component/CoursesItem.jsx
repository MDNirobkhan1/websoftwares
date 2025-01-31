import React, { useState } from "react";

const CoursesItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = category => {
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
    <>
    <div className="md:flex">
      <div className="mt-7">
          <div>
          {/* Courses Category Header */}
          <div className="shadow-md bg-[#f0f0f0] w-[90%] md:w-64 px-4 py-4  border-b border-gray-300">
            <div className="flex bg-white rounded-full shadow-lg p-3 items-center justify-between w-[100%] md:w-56">
              <h1 className="text-xl ">Courses Category</h1>
              <i
                onClick={() => setIsOpen(!isOpen)}
                className="zmdi zmdi-chevron-down mr-2 cursor-pointer"
              />
            </div>
          </div>

          {/* Category List */}
          {isOpen &&
            <div className="mt-4">
              {[
                "Accounting & Finance",
                "Art & Design",
                "Built Environment & Architecture",
                "Business & Management",
                "Computer Science & IT",
                "Construction & Project Management",
                "Economics & Banking",
                "Education & Teaching"
              ].map((category, index) =>
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

                  {/* Show Inputs If Category is Open */}
                  {openCategory === category &&
                    <div className="mt-2 grid grid-rows-1">
                      <label>
                        <input type="radio" name={category} />
                        <span className="ml-2">
                          {category}
                        </span>
                      </label>
                      <label>
                        <input type="radio" name={category} />
                        <span className="ml-2">
                          {category}
                        </span>
                      </label>
                      <label>
                        <input type="radio" name={category} />
                        <span className="ml-2">
                          {category}
                        </span>
                      </label>
                    </div>}
                </div>
              )}
            </div>}
          </div>
          <div className="mt-4">
            {/* Courses Category Header */}
            <div className="shadow-md bg-[#f0f0f0] w-[90%] md:w-64 px-4 py-4 border-b border-gray-300">
              <div className="flex bg-white rounded-full shadow-lg p-3 items-center justify-between w-[100%] md:w-56">
                <h1 className="text-xl">Courses Category</h1>
                <i
                  onClick={() => setIsOpen(!isOpen)}
                  className="zmdi zmdi-chevron-down mr-2 cursor-pointer"
                />
              </div>
            </div>

            {/* Category List */}
            {isOpen &&
              <div className="mt-4">
                {[
                  "Accounting & Finance",
                  "Art & Design",
                  "Built Environment & Architecture",
                  "Business & Management",
                  "Computer Science & IT",
                  "Construction & Project Management",
                  "Economics & Banking",
                  "Education & Teaching"
                ].map((category, index) =>
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

                    {/* Show Inputs If Category is Open */}
                    {openCategory === category &&
                      <div className="mt-2 grid grid-rows-1">
                        <label>
                          <input type="radio" name={category} />
                          <span className="ml-2">
                            {category}
                          </span>
                        </label>
                        <label>
                          <input type="radio" name={category} />
                          <span className="ml-2">
                            {category}
                          </span>
                        </label>
                        <label>
                          <input type="radio" name={category} />
                          <span className="ml-2">
                            {category}
                          </span>
                        </label>
                      </div>}
                  </div>
                )}
              </div>}
          </div>
          <div className="mt-4">
            {/* Courses Category Header */}
            <div className="shadow-md bg-[#f0f0f0] w-[90%] md:w-64 px-4 py-4 border-b border-gray-300">
              <div className="flex bg-white rounded-full shadow-lg p-3 items-center justify-between w-[100%] md:w-56">
                <h1 className="text-xl">Courses Category</h1>
                <i
                  onClick={() => setIsOpen(!isOpen)}
                  className="zmdi zmdi-chevron-down mr-2 cursor-pointer"
                />
              </div>
            </div>

            {/* Category List */}
            {isOpen &&
              <div className="mt-4">
                {[
                  "Accounting & Finance",
                  "Art & Design",
                  "Built Environment & Architecture",
                  "Business & Management",
                  "Computer Science & IT",
                  "Construction & Project Management",
                  "Economics & Banking",
                  "Education & Teaching"
                ].map((category, index) =>
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

                    {/* Show Inputs If Category is Open */}
                    {openCategory === category &&
                      <div className="mt-2 grid grid-rows-1">
                        <label>
                          <input type="radio" name={category} />
                          <span className="ml-2">
                            {category}
                          </span>
                        </label>
                        <label>
                          <input type="radio" name={category} />
                          <span className="ml-2">
                            {category}
                          </span>
                        </label>
                        <label>
                          <input type="radio" name={category} />
                          <span className="ml-2">
                            {category}
                          </span>
                        </label>
                      </div>}
                  </div>
                )}
              </div>}
          </div>
      </div>

      {/* table section  */}
      
      <div className="overflow-x-auto p-6">
          <div className="flex justify-between">
            <div><h1 className="text-3xl">Our Courses</h1></div>
            <div>
            <select className="border-2 border-indigo-800 rounded hover:bg-[#001059] hover:text-white cursor-pointer px-3 py-1" name="cars" id="cars">
              <option value="volvo">All Courses</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            </div>
          
          </div>
      <table className="w-full   shadow-lg rounded-lg">
        <thead>
          <tr className=" text-center ">
            <th className="px-6 py-3">Course Name</th>
            <th className="px-6 py-3">Awarding Body</th>
            <th className="px-6 py-3">Course Fees</th>
          </tr>
        </thead>
        <tbody className=" bg-[#f7f9fa] ">
          {courses.map((course, index) => (
            <tr
              key={index}
              className={`border-b border-gray-200 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="px-6 py-4  ">{course.name}</td>
              <td className="px-6 py-4">{course.awardingBody}</td>
              <td className="px-6 py-4">{course.fees}</td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>

    </>
  );
};

export default CoursesItem;
