import React from 'react'
import { Navbar } from '../Component/Navbar'

import room1 from '../assets/images/room/room (3).png'
import room2 from '../assets/images/room/room (5).png'
import room3 from '../assets/images/room/room (6).png'
import room4 from '../assets/images/room/room (1).png'
// import room5 from '../assets/images/room/room (2).png'
import room6 from '../assets/images/room/room (4).png'
import room7 from '../assets/images/room/room (7).png'
import room8 from '../assets/images/room/room (8).png'
import room9 from '../assets/images/room/room (9).png'
import room10 from '../assets/images/room/room (10).png'

import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineFitScreen } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom'

export const Room = () => {
  return (

    <>
    <section className='aboutSec h-[300px] '>
       <div className="container">
           <Navbar />
            <div className='font-serif text-center py-5'>
                    <h3 className='about'>Our Room</h3>
                    <p className='title py-2'><Link className='no-underline text-white' to={'/'}>Home </Link>/ Room& Suites</p>
                </div>      
      
       </div>
   </section>

   <section className='py-5'>
         <div className="container">
           <div className="row roomRes">
             
             <div className="col-lg-4 roomSet justify-center d-flex">
               <div className='roomBox my-3  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                 <div className='d-flex justify-center position-relative roomImg cursor-pointer'>
                   <img className='img-fluid pt-2 ' src={room1} alt="image" />
                     
                   <div className=' roomIcon d-flex position-absolute text-white gap-x-36 top-64'>
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineBedroomParent /></span>
                          <p className='m-0'>4Guest</p>
                        </div>
   
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineFitScreen /></span>
                          <p className='m-0'>90Ft</p>
                        </div>
                   </div>
                 </div>
   
                 <div>
                   <div className='d-flex gap-x-20 justify-center py-2'>
                     <h4 className='family'>Family Room</h4>
                     <span className='w-[70px] shadow-md h-[26px] bg-[#0083CA] rounded-sm text-white d-flex justify-center align-items-center'>$799</span>
                   </div>
                   <p className='px-2 roomBOxDami '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo et</p>
   
                    <div className='d-flex  bookingText justify-end align-items-center px-3 py-2 text-[#F28E13] cursor-pointer'>
                    <p className='m-0 text-lg'>Booking </p> 
                    <span className='pt-1 text-xl'><BsArrowRight /> </span>
                    </div>
                 </div>
   
               </div>
             </div>
             <div className="col-lg-4 roomSet justify-center d-flex">
             <div className='roomBox my-3  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                 <div className='d-flex justify-center position-relative roomImg cursor-pointer'>
                   <img className='img-fluid pt-2 ' src={room2} alt="image" />
                     
                   <div className=' roomIcon d-flex position-absolute text-white gap-x-36 top-64'>
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineBedroomParent /></span>
                          <p className='m-0'>4Guest</p>
                        </div>
   
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineFitScreen /></span>
                          <p className='m-0'>90Ft</p>
                        </div>
                   </div>
                 </div>
   
                 <div>
                   <div className='d-flex gap-x-20 justify-center py-2'>
                     <h4 className='family'>Family Room</h4>
                     <span className='w-[70px] shadow-md h-[26px] bg-[#0083CA] rounded-sm text-white d-flex justify-center align-items-center'>$799</span>
                   </div>
                   <p className='px-2  roomBOxDami '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo et</p>
   
                    <div className='d-flex  bookingText justify-end align-items-center px-3 py-2 text-[#F28E13] cursor-pointer'>
                    <p className='m-0 text-lg'>Booking </p> 
                    <span className='pt-1 text-xl'><BsArrowRight /> </span>
                    </div>
                 </div>
   
               </div>
             </div>
             <div className="col-lg-4 roomSet justify-center d-flex">
             <div className='roomBox my-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                 <div className='d-flex justify-center position-relative roomImg cursor-pointer'>
                   <img className='img-fluid pt-2 ' src={room3} alt="image" />
                     
                   <div className=' roomIcon d-flex position-absolute text-white gap-x-36 top-64'>
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineBedroomParent /></span>
                          <p className='m-0'>4Guest</p>
                        </div>
   
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineFitScreen /></span>
                          <p className='m-0'>90Ft</p>
                        </div>
                   </div>
                 </div>
   
                 <div>
                   <div className='d-flex gap-x-20 justify-center py-2'>
                     <h4 className='family'>Family Room</h4>
                     <span className='w-[70px] shadow-md h-[26px] bg-[#0083CA] rounded-sm text-white d-flex justify-center align-items-center'>$799</span>
                   </div>
                   <p className='px-2 roomBOxDami '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo et</p>
   
                    <div className='d-flex bookingText justify-end align-items-center px-3 py-2 text-[#F28E13] cursor-pointer'>
                    <p className='m-0 text-lg'>Booking </p> 
                    <span className='pt-1 text-xl'><BsArrowRight /> </span>
                    </div>
                 </div>
   
               </div>
             </div>
   
           </div>
        
           <div className="row roomRes">
             
             <div className="col-lg-4 roomSet justify-center d-flex">
               <div className='roomBox my-3  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                 <div className='d-flex justify-center position-relative roomImg cursor-pointer'>
                   <img className='img-fluid pt-2 ' src={room4} alt="image" />
                     
                   <div className=' roomIcon d-flex position-absolute text-white gap-x-36 top-64'>
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineBedroomParent /></span>
                          <p className='m-0'>4Guest</p>
                        </div>
   
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineFitScreen /></span>
                          <p className='m-0'>90Ft</p>
                        </div>
                   </div>
                 </div>
   
                 <div>
                   <div className='d-flex gap-x-20 justify-center py-2'>
                     <h4 className='family'>Family Room</h4>
                     <span className='w-[70px] shadow-md h-[26px] bg-[#0083CA] rounded-sm text-white d-flex justify-center align-items-center'>$799</span>
                   </div>
                   <p className='px-2 roomBOxDami '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo et</p>
   
                    <div className='d-flex  bookingText justify-end align-items-center px-3 py-2 text-[#F28E13] cursor-pointer'>
                    <p className='m-0 text-lg'>Booking </p> 
                    <span className='pt-1 text-xl'><BsArrowRight /> </span>
                    </div>
                 </div>
   
               </div>
             </div>
             <div className="col-lg-4 roomSet justify-center d-flex">
             <div className='roomBox my-3  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                 <div className='d-flex justify-center position-relative roomImg cursor-pointer'>
                   <img className='img-fluid pt-2 ' src={room10} alt="image" />
                     
                   <div className=' roomIcon d-flex position-absolute text-white gap-x-36 top-64'>
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineBedroomParent /></span>
                          <p className='m-0'>4Guest</p>
                        </div>
   
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineFitScreen /></span>
                          <p className='m-0'>90Ft</p>
                        </div>
                   </div>
                 </div>
   
                 <div>
                   <div className='d-flex gap-x-20 justify-center py-2'>
                     <h4 className='family'>Family Room</h4>
                     <span className='w-[70px] shadow-md h-[26px] bg-[#0083CA] rounded-sm text-white d-flex justify-center align-items-center'>$799</span>
                   </div>
                   <p className='px-2  roomBOxDami '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo et</p>
   
                    <div className='d-flex  bookingText justify-end align-items-center px-3 py-2 text-[#F28E13] cursor-pointer'>
                    <p className='m-0 text-lg'>Booking </p> 
                    <span className='pt-1 text-xl'><BsArrowRight /> </span>
                    </div>
                 </div>
   
               </div>
             </div>
             <div className="col-lg-4 roomSet justify-center d-flex">
             <div className='roomBox my-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                 <div className='d-flex justify-center position-relative roomImg cursor-pointer'>
                   <img className='img-fluid pt-2 ' src={room6} alt="image" />
                     
                   <div className=' roomIcon d-flex position-absolute text-white gap-x-36 top-64'>
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineBedroomParent /></span>
                          <p className='m-0'>4Guest</p>
                        </div>
   
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineFitScreen /></span>
                          <p className='m-0'>90Ft</p>
                        </div>
                   </div>
                 </div>
   
                 <div>
                   <div className='d-flex gap-x-20 justify-center py-2'>
                     <h4 className='family'>Family Room</h4>
                     <span className='w-[70px] shadow-md h-[26px] bg-[#0083CA] rounded-sm text-white d-flex justify-center align-items-center'>$799</span>
                   </div>
                   <p className='px-2 roomBOxDami '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo et</p>
   
                    <div className='d-flex bookingText justify-end align-items-center px-3 py-2 text-[#F28E13] cursor-pointer'>
                    <p className='m-0 text-lg'>Booking </p> 
                    <span className='pt-1 text-xl'><BsArrowRight /> </span>
                    </div>
                 </div>
   
               </div>
             </div>
   
           </div>


           <div className="row roomRes">
             
             <div className="col-lg-4 roomSet justify-center d-flex">
               <div className='roomBox my-3  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                 <div className='d-flex justify-center position-relative roomImg cursor-pointer'>
                   <img className='img-fluid pt-2 ' src={room7} alt="image" />
                     
                   <div className=' roomIcon d-flex position-absolute text-white gap-x-36 top-64'>
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineBedroomParent /></span>
                          <p className='m-0'>4Guest</p>
                        </div>
   
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineFitScreen /></span>
                          <p className='m-0'>90Ft</p>
                        </div>
                   </div>
                 </div>
   
                 <div>
                   <div className='d-flex gap-x-20 justify-center py-2'>
                     <h4 className='family'>Family Room</h4>
                     <span className='w-[70px] shadow-md h-[26px] bg-[#0083CA] rounded-sm text-white d-flex justify-center align-items-center'>$799</span>
                   </div>
                   <p className='px-2 roomBOxDami '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo et</p>
   
                    <div className='d-flex  bookingText justify-end align-items-center px-3 py-2 text-[#F28E13] cursor-pointer'>
                    <p className='m-0 text-lg'>Booking </p> 
                    <span className='pt-1 text-xl'><BsArrowRight /> </span>
                    </div>
                 </div>
   
               </div>
             </div>
             <div className="col-lg-4 roomSet justify-center d-flex">
             <div className='roomBox my-3  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                 <div className='d-flex justify-center position-relative roomImg cursor-pointer'>
                   <img className='img-fluid pt-2 ' src={room8} alt="image" />
                     
                   <div className=' roomIcon d-flex position-absolute text-white gap-x-36 top-64'>
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineBedroomParent /></span>
                          <p className='m-0'>4Guest</p>
                        </div>
   
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineFitScreen /></span>
                          <p className='m-0'>90Ft</p>
                        </div>
                   </div>
                 </div>
   
                 <div>
                   <div className='d-flex gap-x-20 justify-center py-2'>
                     <h4 className='family'>Family Room</h4>
                     <span className='w-[70px] shadow-md h-[26px] bg-[#0083CA] rounded-sm text-white d-flex justify-center align-items-center'>$799</span>
                   </div>
                   <p className='px-2  roomBOxDami '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo et</p>
   
                    <div className='d-flex  bookingText justify-end align-items-center px-3 py-2 text-[#F28E13] cursor-pointer'>
                    <p className='m-0 text-lg'>Booking </p> 
                    <span className='pt-1 text-xl'><BsArrowRight /> </span>
                    </div>
                 </div>
   
               </div>
             </div>
             <div className="col-lg-4 roomSet justify-center d-flex">
             <div className='roomBox my-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
                 <div className='d-flex justify-center position-relative roomImg cursor-pointer'>
                   <img className='img-fluid pt-2 ' src={room9} alt="image" />
                     
                   <div className=' roomIcon d-flex position-absolute text-white gap-x-36 top-64'>
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineBedroomParent /></span>
                          <p className='m-0'>4Guest</p>
                        </div>
   
                        <div className='d-flex align-items-center'>
                          <span className='text-xl'><MdOutlineFitScreen /></span>
                          <p className='m-0'>90Ft</p>
                        </div>
                   </div>
                 </div>
   
                 <div>
                   <div className='d-flex gap-x-20 justify-center py-2'>
                     <h4 className='family'>Family Room</h4>
                     <span className='w-[70px] shadow-md h-[26px] bg-[#0083CA] rounded-sm text-white d-flex justify-center align-items-center'>$799</span>
                   </div>
                   <p className='px-2 roomBOxDami '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt leo et</p>
   
                    <div className='d-flex bookingText justify-end align-items-center px-3 py-2 text-[#F28E13] cursor-pointer'>
                    <p className='m-0 text-lg'>Booking </p> 
                    <span className='pt-1 text-xl'><BsArrowRight /> </span>
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
