import React from 'react'
import footer from '../assets/images/footer/footer.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { MdOutlineMail } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { IoLocationSharp } from "react-icons/io5";

export const Footer = () => {
  return (
    <>
    <section className='bg-[#0B0D17] py-5'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mt-2">
                    <div className='d-flex align-items-center'>
                        <div><img src={footer} alt="" /></div>
                        <h1 className='hotelFooter pl-3'>Hotel</h1>
                    </div>
                     <p className='footerDami py-3'>Lorem ipsum dolor sit amet, consectetur </p>

                     <div className='d-flex align-items-center'>
                        <div><span className='w-[32px] text-white justify-center d-flex align-items-center mx-2 h-[32px] d-inline-block rounded-full shadow-md bg-[#ffffff33] transition-transform duration-300 hover:scale-110 hover:bg-[#ffffff33] cursor-pointer'><FaInstagram /></span></div>
                        <div><span className='w-[32px] text-white justify-center d-flex align-items-center mx-2 h-[32px] d-inline-block rounded-full shadow-md bg-[#ffffff33] transition-transform duration-300 hover:scale-110 hover:bg-[#ffffff33] cursor-pointer'> <FaFacebookF /></span></div>
                        <div><span className='w-[32px] text-white justify-center d-flex align-items-center mx-2 h-[32px] d-inline-block rounded-full shadow-md bg-[#ffffff33] transition-transform duration-300 hover:scale-110 hover:bg-[#ffffff33] cursor-pointer'><FaYoutube /></span></div>
                        <div><span className='w-[32px] text-white justify-center d-flex align-items-center mx-2 h-[32px] d-inline-block rounded-full shadow-md bg-[#ffffff33] transition-transform duration-300 hover:scale-110 hover:bg-[#ffffff33] cursor-pointer'><FaTwitter /></span></div>
                     </div>

                     <div className='mt-5'>
                        <input className='InpoEmail' type="text" placeholder='Your email address' />
                     </div>

                     <div className='mt-3'>
                     <button className='w-[80px] h-[40px] rounded-md  shadow-md bg-[#F28E13] text-white transition-transform duration-300 hover:scale-110 hover:bg-[#ffffff33] font-serif '>Send</button>
                     </div>

                </div>
                <div className="col-lg-2 mt-3">
                    <div>
                        <h3 className='useFull'>Usefull Link </h3>
                        <span className='linkFo mt-2 d-inline-block cursor-pointer'>Gallery</span> <br/>
                        <span className='linkFo mt-2 d-inline-block cursor-pointer'>Blogs </span>  <br/>
                        <span className='linkFo mt-2 d-inline-block cursor-pointer'>About </span> <br/>
                        <span className='linkFo mt-2 d-inline-block cursor-pointer'>Image  </span> <br/>
                        <span className='linkFo mt-2 d-inline-block cursor-pointer'>Rooms </span> <br/>
                    </div>
                </div>
                <div className="col-lg-2 mt-3">
                <div>
                        <h3 className='useFull'>Services</h3>
                        <span className='linkFo mt-2 d-inline-block cursor-pointer'>Restaurat </span> <br/>
                        <span className='linkFo mt-2 d-inline-block cursor-pointer'>Coffe Shop </span>  <br/>
                        <span className='linkFo mt-2 d-inline-block cursor-pointer'>Car Wash</span> <br/>
                        <span className='linkFo mt-2 d-inline-block cursor-pointer'>Cycle Rent</span> <br/>
                        <span className='linkFo mt-2 d-inline-block cursor-pointer'>Car Rent</span> <br/>
                    </div>
                </div>
                <div className="col-lg-4 mt-3">
                    <div>
                    <h3 className='useFull'>Reach Us </h3>

                      <div className='d-flex align-items-center mt-3 cursor-pointer'>
                          <div><span className='text-[#0083CA] text-lg'><MdOutlineMail /></span></div>
                          <h3 className='emailFo m-0 ps-3'>6391 Elgin St. </h3>
                      </div>

                      <div className='d-flex align-items-center mt-3 cursor-pointer'>
                          <div><span className='text-[#0083CA] text-lg'><TbDeviceLandlinePhone /></span></div>
                          <h3 className='emailFo m-0 ps-3'>(239) 555-0108</h3>
                      </div>

                      <div className='d-flex align-items-center mt-3 cursor-pointer'>
                          <div><span className='text-[#0083CA] text-lg'><IoLocationSharp /></span></div>
                          <h3 className='emailFo m-0 ps-3'>6391 Elgin St. Celina, 
                          Delaware 10299</h3>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
