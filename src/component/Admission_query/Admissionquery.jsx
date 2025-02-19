import React from 'react'
import Navbar from '../Navbar'
import NavList from '../NavList'
import Footer from '../Footer'

const Admissionquery = () => {
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
          {/* banner part  */}
        <div className="mt-[280px] k md:mt-0 mb-4">
              {/* image part */}
            <div
            className="md:h-[440px] h-[400px] bg-gray-500 bg-cover bg-blend-multiply  bg-center bg-fixed"
            style={{
                backgroundImage: "url('https://i.ibb.co.com/pvR9vrns/pp.jpg' )",
                
                
            }}
            >
            <div className=" flex justify-center  ">
                <div className=" mt-28">
                <h1 className=" md:flex md:justify-center text-center text-[#002e6e] p-2 md:mt-10 ">
                    <p className="text-[70px]    font-medium text-white ">Admission query</p>
                    
                </h1>
                
                
                </div>
            </div>
              </div>
              
              {/* table part */}
              
                <div>
                  <div className=" md:p-6 p-2  mt-4">
                      <h1 className='text-center'>Please fill out the form below for your query. One of our experienced advisors will contact you soon for admission help.</h1>
                        <div className="max-w-6xl mt-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className=" md:p-6 p-4 ">
                                <h2 className="text-lg font-semibold bg-[#002569] text-white p-1">
                                    Study in UK: Key information
                                </h2>
                                <ul className="mt-8 space-y-2 text-gray-700 border-r-2  border-dashed dotted-r border-gray-400">
                                  <li className=''>
                                      <p className='text-black font-bold'>Available academic levels:</p>
                                      <p className='text-[13px]'>RQF Level 3 to Level 8</p>
                                  </li>
                                  <li className='mt-4'><p className='text-black font-bold'>Available courses:</p>
                                      <p className='text-[13px]'>English, Foundation, Undergraduate, Postgraduate, and Doctorate</p></li>
                                  <li className='mt-4'>
                                      <p className='text-black font-bold'>Course duration:</p>
                                      <p className='text-[13px]'>3 months to 4+ years</p>
                                  </li>
                                    <li className='mt-4'><p className='text-black font-bold'> Intake:</p> <p className='text-[13px]'>All year round</p></li>
                                    <li className='mt-4'><p className='text-black font-bold'>Work placement:</p> <p className='text-[13px]'>Available</p></li>
                                    <li className='mt-4'><p className='text-black font-bold'>Scholarship:</p> <p  className='text-[13px]'>Available up to £6000.00 (No full scholarship)</p></li>
                                    <li className='mt-4'><p className='text-black font-bold'>Admission application:</p> <p className='text-[13px]'>Open</p></li>
                                    <li className='mt-4'><p className='text-black font-bold'>Places at universities:</p> <p className='text-[13px]'>Available</p></li>
                                    <li className='mt-4'><p className='text-black font-bold'>Places at universities:</p> <p className='text-[13px]'>Available</p></li>
                                    <li className='mt-4'><p className='text-black font-bold'>Places at universities:</p> <p className='text-[13px]'>Available</p></li>
                                    <li className='mt-4'><p className='text-black font-bold'>Places at universities:</p> <p className='text-[13px]'>Available</p></li>
                                    
                                </ul>
                            </div>

                            <div className="md:p-6 p-4 ">
                                <h2 className="text-lg font-semibold bg-[#002569] text-white p-1">
                                    Submit Study UK admission query
                                </h2>
                                <form className="mt-4 space-y-4 ">
                                    <div className='md:flex items-center justify-between'>
                                      <p>Your full name</p>
                                      <input type="text" placeholder="Your full name" className="  border p-2 md:w-[50%] w-full border-gray-300 rounded-md" />
                                    </div>
                                     <div className='md:not-only:flex items-center justify-between'>
                                      <p>WhatsApp number</p>
                                      <input type="Number" placeholder="WhatsApp number" className="p-2 md:w-[50%] w-full border border-gray-300 rounded-md" />
                                    </div>
                                  <div className='md:flex items-center justify-between'>
                                        <p>Email address</p>
                                        <input type="email" placeholder="Email address" className="p-2 md:w-[50%] w-full border border-gray-300 rounded-md" />
                                   </div>
                                  <div className='md:flex items-center justify-between'>
                                      <p>Course interested to study</p>
                                        <select className="p-2 text-gray-500 md:w-[50%] w-full border border-gray-300 rounded-md">
                                        <option className=''>Select Course</option>
                                        </select>
                                    </div>
                                  <div className='md:flex items-center justify-between'>
                                        <p>Subject interested to study</p>
                                        <input type="text" placeholder="Subject interested to study" className="p-2 md:w-[50%] w-full border border-gray-300 rounded-md" />
                                    </div>
                                  <div className='md:md:flex items-center justify-between'>
                                      <p>Current qualification</p>
                                    <select className="p-2 text-gray-500 md:w-[50%] w-full border border-gray-300 rounded-md">
                                        <option>Select one</option>
                                        </select>
                                    </div>
                                   <div className='md:flex items-center justify-between'>
                                        <p>Your nationality</p>
                                       <select className="p-2 text-gray-500 md:w-[50%] w-full border border-gray-300 rounded-md">
                                        <option>United Kingdom</option>
                                        </select>
                                    </div>
                                  <div className='md:flex items-center justify-between'>
                                      <p>Your current location</p>
                                    <select className="p-2 text-gray-500 md:w-[50%] w-full border border-gray-300 rounded-md">
                                        <option>United Kingdom</option>
                                        </select>
                                    </div>
                                  <div className="md:flex items-center justify-between">
                                  <p>Your query</p>
                                   <textarea placeholder="Write your message here" className=" md:w-[50%] w-full p-3 border border-gray-300 rounded-md"></textarea>
                                    </div>
                                    <div className="md:flex items-center space-x-2">
                                    <input type="checkbox" className="h-4 w-4" />
                                    <label className="text-gray-700">I have read and understood the Terms & Conditions and Privacy Policy.</label>
                                    </div>
                                    <div className="md:flex items-center space-x-2">
                                    <input type="checkbox" className="h-4 w-4" />
                                    <label className="text-gray-700">I give consent to receive newsletters and offers.</label>
                                    </div>
                                  <div className='text-center '>
                                    <button className="md:w-[40%] w-[50%] mt-8 hover:bg-[#002569] cursor-pointer bg-[#e32040] text-white p-1 rounded-md">Send admission query</button>
                                    </div>
                                </form>
                                </div>
                            </div>
                    </div>
                </div>

              {/* cart part */}
                <div>
                  <div className="md:p-10 p-4 bg-white mt-6 text-gray-800">
                      <h1 className='text-[#002569] font-medium text-3xl text-center'>Why choose Total Student Care (TSC) to study in the UK</h1>
                      {/* About Us Section */}
                        <div className='md:flex items-center mt-24 justify-center  gap-44'>
                            <div className="mb-10">
                                <h2 className="text-lg font-bold text-blue-900">About us</h2>
                                <p>Best Independent Global Education Agency 2020 award winner</p>
                                <p>Most Supportive Education Consultancy 2021 award winner</p>
                                <p>An education agent you can rely and trust</p>
                                <p>We are different, we are unique</p>
                            </div>

                            {/* Award Winner Box */}
                            <div className="relative md:w-[390px] w-[300px] md:h-[150px] h-[200px] md:ml-0 ml-10 bg-[#ededed] p-6 border-2 text-center border-gray-300">
                                <div className="absolute top-[-20px] md:right-[-20px] right-[-60px] border-t-3 border-r-3 border-red-500 w-10 h-10"></div>
                                <div className="absolute bottom-[-20px] md:left-[-20px] left-[-58px] border-b-3 border-l-3 border-red-500 w-10 h-10"></div>
                                <h3 className="text-2xl font-bold text-[#e32040] mt-2">Awards winner</h3>
                                <p className="text-gray-700 text-3xl ">Education agency</p>
                            </div>
                        </div>

                        {/* High Quality Student Services */}
                        <div className="md:flex items-center justify-center gap-44 mt-30">
                               <div className="relative md:w-[390px] w-[300px] md:h-[150px] h-[200px] md:ml-0 ml-10 bg-[#ededed] p-6 border-2 text-center border-gray-300">
                                    <div className="absolute top-[-20px] md:right-[-20px] right-[-60px] border-t-3 border-r-3 border-red-500 w-10 h-10"></div>
                                    <div className="absolute bottom-[-20px] md:left-[-20px] left-[-58px] border-b-3 border-l-3 border-red-500 w-10 h-10"></div>
                                    <h3 className="text-2xl font-bold text-[#e32040] mt-2">High quality</h3>
                                    <p className="text-gray-700 text-3xl">student services</p>
                                </div>

                                {/* Our Service Section */}
                                <div className="md:mt-0 mt-5">
                                    <h2 className="text-lg font-bold text-blue-900 md:ml-10">Our Service</h2>
                                    <p className='md:ml-10'>Student services to design your future</p>
                                    <p className='md:ml-10'>You ask, we guide - you choose, we serve</p>
                                    <p className='md:ml-10'>Guaranteeing high quality, creating amazing value</p>
                                    <p className='md:ml-10'>Complete guidance on your study, student life, and career goals</p>
                                </div>
                        </div>
                    </div>
                </div>

          </div>
          <Footer/>
      </>
  )
}

export default Admissionquery
