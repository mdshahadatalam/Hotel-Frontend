import React from 'react'
import aboutImg1 from '../assets/images/aboutUS/aboutImg (1).png'
import aboutImg2 from '../assets/images/aboutUS/aboutImg(2).png'
import { Navbar } from '../Component/Navbar'
import man1 from '../assets/images/man/man (1).png'
import man2 from '../assets/images/man/man (2).png'
import man3 from '../assets/images/man/man (3).png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom'
export const About = () => {
  return (
    <>

     <section className='aboutSec h-[300px] '>
              <div className="container">
                  <Navbar />
                   <div className='font-serif text-center py-5'>
                           <h3 className='about'>About Us</h3>
                           <p className='title py-2'><Link to={'/'} className='no-underline text-white'>Home</Link> / About Us</p>
                       </div>      
             
              </div>
          </section>

          <section className='py-5'>
                  <div className="container">
                    <div className="row justify-center align-items-center pt-5">
                      <div className="col-lg-6">
                        <img className='img-fluid shadow-md rounded-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' src={aboutImg2} alt="" />
                      </div>
                      <div className="col-lg-6">
                        <h3 className='serHead'>About Us</h3>
                        <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                          </p>
                        <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                        </p>
                      </div>
                    </div>
                
                    <div className="row justify-center align-items-center pt-5">
                      <div className="col-lg-6">
                        <h3 className='serHead'>Hotel</h3>
                        <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
 
                        </p>
          
          
                        <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
 
                        </p>
                      </div>
          
                      <div className="col-lg-6">
                        <img className='img-fluid shadow-md rounded-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' src={aboutImg1} alt="" />
                      </div>
                    </div>
                    
                  </div>
                </section>


                 <section className='py-5'>
                      <div className="container">
                      
                        <div className="row roomRes">
                          
                          <div className="col-lg-4 roomSet justify-center d-flex">
                            <div className='manBox my-3  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                              <div className='d-flex justify-center  roomImg cursor-pointer'>
                                <img className='img-fluid pt-2 ' src={man1} alt="image" />
                                  
                              </div>
                
                              <div>
                                <div className=' justify-center pt-3 ps-1'>
                                  <h4 className='family m-0'>Robert Fox </h4>
                                   <p className='possition m-0 pb-2 '>managing director</p>
                                   
                                   <div className='d-flex gap-x-14 align-items-center pb-3'>
                                   <span className='possition'>(316) 555-0116</span>
                                   <div className='d-flex align-items-center'>
                                                           <div><span className='w-[32px] mx-1 text-white justify-center d-flex align-items-center h-[32px] d-inline-block rounded-full shadow-md bg-[#39353533] transition-transform duration-300 hover:scale-110 hover:bg-[#7e7b7b33] cursor-pointer'><FaInstagram /></span></div>
                                                           <div><span className='w-[32px] mx-1 text-white justify-center d-flex align-items-center h-[32px] d-inline-block rounded-full shadow-md bg-[#39353533] transition-transform duration-300 hover:scale-110 hover:bg-[#7e7b7b33] cursor-pointer'> <FaFacebookF /></span></div>
                                                      
                                                           <div><span className='w-[32px] mx-1 text-white justify-center d-flex align-items-center h-[32px] d-inline-block rounded-full shadow-md bg-[#39353533] transition-transform duration-300 hover:scale-110 hover:bg-[#7e7b7b33] cursor-pointer'><FaTwitter /></span></div>
                                                        </div>
                                   </div>
                                </div>
   
                              </div>
                
                            </div>
                          </div>
                          <div className="col-lg-4 roomSet justify-center d-flex">
                          <div className='manBox my-3  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                              <div className='d-flex justify-center  roomImg cursor-pointer'>
                                <img className='img-fluid pt-2 ' src={man3} alt="image" />
                                  
                              </div>
                
                              <div>
                                <div className=' justify-center pt-3 ps-1'>
                                  <h4 className='family m-0'>Wade Warren</h4>
                                   <p className='possition m-0 pb-2 '>Chef</p>
                                   
                                   <div className='d-flex gap-x-10 align-items-center pb-3'>
                                   <span className='possition'>(480) 555-0103</span>
                                   <div className='d-flex align-items-center'>
                                                           <div><span className='w-[32px] mx-1 text-white justify-center d-flex align-items-center h-[32px] d-inline-block rounded-full shadow-md bg-[#39353533] transition-transform duration-300 hover:scale-110 hover:bg-[#7e7b7b33] cursor-pointer'><FaInstagram /></span></div>
                                                           <div><span className='w-[32px] mx-1 text-white justify-center d-flex align-items-center h-[32px] d-inline-block rounded-full shadow-md bg-[#39353533] transition-transform duration-300 hover:scale-110 hover:bg-[#7e7b7b33] cursor-pointer'> <FaFacebookF /></span></div>
                                                      
                                                           <div><span className='w-[32px] mx-1 text-white justify-center d-flex align-items-center h-[32px] d-inline-block rounded-full shadow-md bg-[#39353533] transition-transform duration-300 hover:scale-110 hover:bg-[#7e7b7b33] cursor-pointer'><FaTwitter /></span></div>
                                                        </div>
                                   </div>
                                </div>
   
                              </div>
                
                            </div>
                          </div>
                          <div className="col-lg-4 roomSet justify-center d-flex">
                          <div className='manBox my-3  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                              <div className='d-flex justify-center  roomImg cursor-pointer'>
                                <img className='img-fluid pt-2 ' src={man2} alt="image" />
                                  
                              </div>
                
                              <div>
                                <div className=' justify-center pt-3 ps-1'>
                                  <h4 className='family m-0'>Jenny Wilson</h4>
                                   <p className='possition m-0 pb-2 '>Reception</p>
                                   
                                   <div className='d-flex gap-x-10 align-items-center pb-3'>
                                   <span className='possition'>(239) 555-0108</span>
                                   <div className='d-flex align-items-center'>
                                                           <div><span className='w-[32px] mx-1 text-white justify-center d-flex align-items-center h-[32px] d-inline-block rounded-full shadow-md bg-[#39353533] transition-transform duration-300 hover:scale-110 hover:bg-[#7e7b7b33] cursor-pointer'><FaInstagram /></span></div>
                                                           <div><span className='w-[32px] mx-1 text-white justify-center d-flex align-items-center h-[32px] d-inline-block rounded-full shadow-md bg-[#39353533] transition-transform duration-300 hover:scale-110 hover:bg-[#7e7b7b33] cursor-pointer'> <FaFacebookF /></span></div>
                                                      
                                                           <div><span className='w-[32px] mx-1 text-white justify-center d-flex align-items-center h-[32px] d-inline-block rounded-full shadow-md bg-[#39353533] transition-transform duration-300 hover:scale-110 hover:bg-[#7e7b7b33] cursor-pointer'><FaTwitter /></span></div>
                                                        </div>
                                   </div>
                                </div>
   
                              </div>
                
                            </div>
                          </div>
                
                        </div>
                
                      </div>
                    </section>

    </>
  )
}
