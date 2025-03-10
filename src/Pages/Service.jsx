import React from 'react'
import { Navbar } from '../Component/Navbar'
import service1 from '../assets/images/service/service (1).png'
import service2 from '../assets/images/service/service (2).png'

import { BiSolidDrink } from "react-icons/bi";
import { MdEmojiTransportation } from "react-icons/md";
import { FaUniversalAccess } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
import { FaPersonSwimming } from "react-icons/fa6";
import { RiDrinks2Fill } from "react-icons/ri";
import { PiVideoConference } from "react-icons/pi";
import { IoGameControllerSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';

export const Service = () => {

   const [list, setList] = useState([])


  useEffect(()=>{
    async function data(){
      let data = await axios.get('https://hotel-backend-git-main-md-shahadat-alams-projects.vercel.app/serviceItem')
      console.log(data.data)
      setList(data.data)
      
    }
    data()
  },[])
  return (
   <>
   <section className='aboutSec h-[300px] '>
          <div className="container">
              <Navbar />
               <div className='font-serif text-center py-5'>
                       <h3 className='about'>Services</h3>
                       <p className='title py-2'><Link to={'/'} className='no-underline text-white'>Home</Link> / Service</p>
                   </div>      
         
          </div>
      </section>


      <section className='py-5'>
        <div className="container">
          <div className="row justify-center align-items-center pt-5">
            <div className="col-lg-6">
              <img className='img-fluid shadow-md rounded-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' src={service1} alt="" />
            </div>
            <div className="col-lg-6">
              <h3 className='serHead'>Services</h3>
              <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
              </p>


              <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
              </p>
            </div>
          </div>
      
          <div className="row justify-center align-items-center pt-5">
            <div className="col-lg-6">
              <h3 className='serHead'>Reception</h3>
              <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
              </p>


              <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
              </p>
            </div>

            <div className="col-lg-6">
              <img className='img-fluid shadow-md rounded-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' src={service2} alt="" />
            </div>
          </div>

        {
          list.map((item)=>(
            <div className="row justify-center align-items-center pt-5">
            <div className="col-lg-6">
              <h3 className='serHead'>{item.subHead}</h3>
              <p className='serDami'> {item.paragraph} 
              </p>


              
            </div>

            <div className="col-lg-6">
              <img className='img-fluid shadow-md rounded-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' src={`http://localhost:3000/${item.serImg}`} alt="image" />
            </div>
          </div>
          ))
        }
          
          
        </div>
      </section>


      <section className='py-5'>
            <div className="container">
              <div className="row pt-4">
                   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                     <div className='shadow-lg rounded-md p-3 mt-4 cursor-pointer transition duration-300 ease-in-out transform            hover:scale-105 hover:shadow-lg'>
                       <span className='w-[44px] h-[44px] shadow-md bg-[#F28E13] d-flex justify-center align-items-center            rounded-full text-white text-xl'>
                         <BiSolidDrink />
                       </span>
                       <Link className='no-underline' to={'/resturent'}> <h3 className='resturant pt-2 hover:underline'>Restaurant</h3></Link>
                       <p className='restuDami pt-2'>Lorem ipsum dolor sit amet, consectetur</p>
                     </div>
                   </div>
                   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                     <div className='shadow-lg rounded-md p-3 mt-4 cursor-pointer transition duration-300 ease-in-out transform            hover:scale-105 hover:shadow-lg'>
                       <span className='w-[44px] h-[44px] shadow-md bg-[#F28E13] d-flex justify-center align-items-center            rounded-full text-white text-xl'>
                         <MdEmojiTransportation />
                       </span>
                       <Link className='no-underline' to={'/transport'}> <h3 className='resturant pt-2 hover:underline'>Transport Facility</h3></Link>
                       <p className='restuDami pt-2'>Lorem ipsum dolor sit amet, consectetur</p>
                     </div>
                   </div>
                   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                     <div className='shadow-lg rounded-md p-3 mt-4 cursor-pointer transition duration-300 ease-in-out transform            hover:scale-105 hover:shadow-lg'>
                       <span className='w-[44px] h-[44px] shadow-md bg-[#F28E13] d-flex justify-center align-items-center            rounded-full text-white text-xl'>
                         <FaUniversalAccess />
                       </span>
                       <Link className='no-underline' to={'/spa'}><h3 className='resturant pt-2 hover:underline'>Spa & Salon</h3></Link>
                       <p className='restuDami pt-2'>Lorem ipsum dolor sit amet, consectetur</p>
                     </div>
                   </div>
                   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                     <div className='shadow-lg rounded-md p-3 mt-4 cursor-pointer transition duration-300 ease-in-out transform            hover:scale-105 hover:shadow-lg'>
                       <span className='w-[44px] h-[44px] shadow-md bg-[#F28E13] d-flex justify-center align-items-center            rounded-full text-white text-xl'>
                         <FaWifi />
                       </span>
                       <Link className='no-underline' to={'/freeWifi'}><h3 className='resturant pt-2 hover:underline'>Free Wifi</h3></Link>
                       <p className='restuDami pt-2'>Lorem ipsum dolor sit amet, consectetur</p>
                     </div>
                   </div>
                 </div>
      
                 <div className="row pt-4">
                   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                     <div className='shadow-lg rounded-md p-3 mt-4 cursor-pointer transition duration-300 ease-in-out transform            hover:scale-105 hover:shadow-lg'>
                       <span className='w-[44px] h-[44px] shadow-md bg-[#F28E13] d-flex justify-center align-items-center            rounded-full text-white text-xl'>
                       <FaPersonSwimming />
                       </span>
                       <Link className='no-underline' to={'/pool'}><h3 className='resturant pt-2 hover:underline'>Swimming Pool</h3></Link>
                       <p className='restuDami pt-2'>Lorem ipsum dolor sit amet, consectetur</p>
                     </div>
                   </div>
                   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                     <div className='shadow-lg rounded-md p-3 mt-4 cursor-pointer transition duration-300 ease-in-out transform            hover:scale-105 hover:shadow-lg'>
                       <span className='w-[44px] h-[44px] shadow-md bg-[#F28E13] d-flex justify-center align-items-center            rounded-full text-white text-xl'>
                       <RiDrinks2Fill />
                       </span>
                      <Link  className='no-underline' to={'/miniBar'}> <h3 className='resturant pt-2 hover:underline'>Mini Bar</h3></Link>
                       <p className='restuDami pt-2'>Lorem ipsum dolor sit amet, consectetur</p>
                     </div>
                   </div>
                   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                     <div className='shadow-lg rounded-md p-3 mt-4 cursor-pointer transition duration-300 ease-in-out transform            hover:scale-105 hover:shadow-lg'>
                       <span className='w-[44px] h-[44px] shadow-md bg-[#F28E13] d-flex justify-center align-items-center            rounded-full text-white text-xl'>
                       <PiVideoConference />
                       </span>
                      <Link className='no-underline' to={'/confo'}> <h3 className='resturant pt-2 hover:underline'>Conference Room </h3></Link>
                       <p className='restuDami pt-2'>Lorem ipsum dolor sit amet, consectetur</p>
                     </div>
                   </div>
                   <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                     <div className='shadow-lg rounded-md p-3 mt-4 cursor-pointer transition duration-300 ease-in-out transform            hover:scale-105 hover:shadow-lg'>
                       <span className='w-[44px] h-[44px] shadow-md bg-[#F28E13] d-flex justify-center align-items-center            rounded-full text-white text-xl'>
                       <IoGameControllerSharp />
                       </span>
                      <Link className='no-underline' to={'/game'}> <h3 className='resturant pt-2 hover:underline
                      '>Game Room</h3></Link>
                       <p className='restuDami pt-2'>Lorem ipsum dolor sit amet, consectetur</p>
                     </div>
                   </div>
                 </div>
            </div>
          </section>
   </>
  )
}
