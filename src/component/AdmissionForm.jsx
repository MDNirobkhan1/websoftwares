
import React from "react";
import Navbar from "./Navbar";
import NavList from "./NavList";
import Footer from "./Footer";

const AdmissionForm = () => {
    
  return (
      <>
          {/* navbar  */}
      <div>
     <div className="hidden  sm:block">
        <Navbar />
      </div>
      <div className="block sm:hidden">
        <NavList />
      </div>
       </div>
          
          {/* banner  */}
    <div className="mt-[280px] md:mt-0">
        <div
          className="md:h-[400px] h-[400px] bg-cover  bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://i.ibb.co.com/cKZxtxRC/aci-student-standing-outside-with-vr-goggles-on-hero-jpg.webp' )",
              
            
          }}
        >
          <div className=" flex justify-center">
            <div className="mt-20">
              <h1 className=" md:flex md:justify-center text-center text-[#002e6e] p-2 md:mt-10 ">
                <p className="md:text-5xl text-3xl font-extrabold text-white mr-3">UK University</p>
                <p className="text-[#e32040] md:text-5xl text-3xl font-extrabold">admission eligibility</p>
              </h1>
              <p className=" md:text-xl text-center text-sm md:px-0 px-4 md:ml-0 ml-6  text-white font-bold md:mt-6">
              Take a minute to check the academic entry requirements for undergraduate and postgraduate courses at UK universities <br /> and find out if you qualify for admission
              </p>
            
            </div>
          </div>
        </div>
              
              <div className="mt-12 md:mb-10">
                  <div className="md:flex md:justify-center gap-8 md:items-center md:px-0 px-2 ">
                      <h1 className="md:text-3xl text-2xl text-center  font-bold text-[#002e6e]">Free test for university offers</h1> 
                      <div className="md:mt-0 mt-4 "><img src="/image/Capture.PNG" alt="" /></div>
                  </div>
                  <div>
                        <div className="mt-14">
                          <h1 className="text-center font-bold text-[#212529] text-xl">Check your admission eligibility assessed immediately by qualified university admission advisers</h1>
                          <div className="md:flex items-center gap-6 justify-center mt-10 md:px-0 px-3">
                              <div className="bg-[#e32040] text-center md:w-[330px] py-4">
                                  <img className="flex mx-auto w-8 h-6 rounded mt-2" src="/icon/10.PNG" alt="" />
                                  <p className="text-white font-bold text-xl mt-4">100% visa success</p>
                              </div>
                              <div className="bg-[#e32040] text-center md:w-[330px] py-4">
                                  <p className="flex mx-auto text-white w-8 h-6 rounded mt-2"><i class="zmdi zmdi-account-calendar zmdi-hc-2x"></i></p>
                                  <p className="text-white font-bold text-xl mt-4">15+ years’ experience</p>
                              </div>
                              <div className="bg-[#e32040] text-center md:w-[330px] py-4">
                                  <p className="flex mx-auto text-white w-8 h-6 rounded mt-2"><i class="zmdi zmdi-star-outline zmdi-hc-2x"></i></p>
                                  <p className="text-white font-bold text-xl mt-4">95%+ 5 star reviews</p>
                              </div>
                          </div>
                          <h1 className="text-center  text-[#3e4045] text-[20px] md:px-24 px2 mt-24 md:mb-0 mb-6">Take a minute to check your admission eligibility for study in the UK – one of our university admission officers will contact you shortly to provide you admission advice and support.</h1>
                      </div>
                  </div>
              </div>
        <div className="flex flex-col md:flex-row gap-6 md:px-24 px-4 py-6 border-[#ccd2d9]">
            {/* Admission Form */}
            <div className="w-full ">
                <h2 className="bg-[#002569] text-xl text-white text-center p-2 font-semibold mb-6">
                Admission Eligibility Assessment Form
                </h2>
                <div className="   ">
                <table className="w-full ">
                    <tbody>
                    {[
                        {
                        label: "Course choice",
                        options: ["Foundation", "Bachelors", "Masters", "Doctorate"]
                        },
                        {
                        label: "Your current qualification",
                        options: ["O Levels", "Bachelors", "Masters", "Doctorate"]
                        },
                        {
                        label: "IELTS overall band score",
                        options: ["5.0", "5.5", "6.0", "6.5+"]
                        },
                        {
                        label: "Expected start date",
                        options: ["January", "February", "March", "April", "May"]
                        },
                        {
                        label: "Budget for tuition fees",
                        options: ["£10,000-£12,000", "£12,000-£15,000", "£15,000+"]
                        },
                        {
                        label: "Number of dependent/s",
                        options: ["None", "1", "2", "3+"]
                        },
                        {
                        label: "Bank funds availability",
                        options: ["£10,000-£12,000", "£12,000-£15,000", "£15,000+"]
                        },
                        {
                        label: "UK study location choice",
                        options: ["Inside London", "Outside London"]
                        },
                        { label: "Past visa refusal", options: ["Yes", "No"] },
                        {
                        label: "Number of years study gap",
                        options: ["No gap", "1 Year", "2 Years", "3+ Years"]
                        },
                        {
                        label: "Country of nationality",
                        options: ["UK", "Bangladesh", "India", "Pakistan"]
                        },
                        {
                        label: "Your current location",
                        options: ["UK", "Bangladesh", "India", "Pakistan"]
                        }
                    ].map((field, index) =>
                        <tr key={index}>
                        <td className="p-3 font-semibold border border-[#ccd2d9]  ">
                            {field.label}
                        </td>
                        <td className="p-3 md:w-56  border border-[#ccd2d9]">
                            <select className="w-full text-gray-400 border-[#ccd2d9] border-1 rounded p-1 outline-cyan-500">
                            <option value="">Select One</option>
                            {field.options.map((option, i) =>
                                <option key={i} value={option}>
                                {option}
                                </option>
                            )}
                            </select>
                        </td>
                        </tr>
                    )}
                    {[
                        { label: "Subject choice", type: "text" },
                        { label: "Your full name", type: "text" },
                        { label: "WhatsApp number", type: "text" },
                        { label: "Email address", type: "email" }
                    ].map((field, index) =>
                        <tr key={index}>
                        <td className="p-3 border border-[#ccd2d9]">
                            {field.label}
                        </td>
                        <td className="p-3 border border-[#ccd2d9]">
                            <input
                            type={field.type}
                            className="w-full border-[#ccd2d9] border-2 rounded p-1 outline-cyan-500"
                            />
                        </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <div className="flex gap-3 mt-3">
                    <p>
                    <input type="checkbox" name="" id="" />
                    </p>
                    <p>
                    I have read and understood the TSC’s Terms & Conditions and
                    Privacy Policy . I acknowledge by submitting this form my data is
                    available to TSC.
                    </p>
                </div>
                <button className="bg-[#002569] text-white mt-6  w-32 py-2 rounded font-semibold">
                    Submit Form
                </button>
                </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="w-full md:w-1/2 ">
                <h2 className="bg-[#002569] text-xl text-white text-center p-2 font-semibold mb-6">
                Study UK General Eligibility Criteria
                </h2>
                <div className="e p-6  border-[#ccd2d9] border-1 ">
                <div className="  text-gray-700">
                    <h3 className="text-lg mb-2 font-semibold bg-[#e32040] text-white px-2 py-1">
                    Academic Requirements
                    </h3>
                    
                    <h1><span className="text-black font-semibold mb-2 ">Foundation:</span> O Levels</h1>
                    <h1><span className="text-black font-semibold mb-2">Bachelors:</span> Minimum Higher Secondary Certificate</h1>
                    <h1> <span className="text-black font-semibold mb-2">Masters:</span> Minimum Bachelor's degree</h1>
                    <h1><span className="text-black font-semibold">Doctorate:</span> Master's degree or higher qualification</h1>
                    
                </div>
                <div className="text-gray-700">
                    <h3 className="text-lg font-semibold bg-[#e32040] text-white px-2 mb-2 py-1">
                    English Proficiency Requirements
                    </h3>
                    
                    <h1> <span className="text-black font-semibold">Foundation:</span> IELTS 5.0 (no component below 4.0)</h1>
                    <h1><span className="text-black font-semibold">Bachelors:</span> IELTS 5.5 (minimum 5.5 in all components)</h1>
                    <h1><span className="text-black font-semibold">Masters:</span> IELTS 6.0 (minimum 5.5 in all components)</h1>
                    
                </div>
                </div>
            </div>
        </div>
    </div>
      

    <Footer/>
      </>
  );
};

export default AdmissionForm;
