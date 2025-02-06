import React, { useEffect, useState } from 'react'
import { Navbar } from '../Component/Navbar'
import { CgCalendarDates } from "react-icons/cg";
import { LuSquareUser } from "react-icons/lu";
import { FaChildren } from "react-icons/fa6";
import room1 from '../assets/images/room/room (3).png'
import room2 from '../assets/images/room/room (5).png'
import room3 from '../assets/images/room/room (6).png'
import { BsArrowRight } from "react-icons/bs";

import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineFitScreen } from "react-icons/md";
import { BiSolidDrink } from "react-icons/bi";
import { MdEmojiTransportation } from "react-icons/md";
import { FaUniversalAccess } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
import { FaPersonSwimming } from "react-icons/fa6";
import { RiDrinks2Fill } from "react-icons/ri";
import { PiVideoConference } from "react-icons/pi";
import { IoGameControllerSharp } from "react-icons/io5";

import hotel from '../assets/images/hotel room/hotel.jpg'
import hotel1 from '../assets/images/hotel room/hotel1 (1).jpg'
import hotel2 from '../assets/images/hotel room/hotel1 (2).jpg'
import hotel3 from '../assets/images/hotel room/hotel1 (3).jpg'
import hotel4 from '../assets/images/hotel room/hotel1 (4).jpg'
import hotel5 from '../assets/images/hotel room/hotel1 (5).jpg'
// import hotel6 from '../assets/images/hotel room/hotel1 (6).jpg'


import lobby1 from '../assets/images/lobby/lobby (1).jpg'
import lobby2 from '../assets/images/lobby/lobby (2).jpg'
import lobby3 from '../assets/images/lobby/lobby (3).jpg'
import lobby4 from '../assets/images/lobby/lobby (4).jpg'
import lobby5 from '../assets/images/lobby/lobby (5).jpg'


import reciption1 from '../assets/images/reciption/reciption (1).jpg'
import reciption2 from '../assets/images/reciption/reciption (2).jpg'
import reciption3 from '../assets/images/reciption/reciption (3).jpg'
import reciption4 from '../assets/images/reciption/reciption (4).jpg'
import reciption5 from '../assets/images/reciption/reciption (5).jpg'

import dining1 from '../assets/images/dining/dining (1).jpg'
import dining2 from '../assets/images/dining/dining (2).jpg'
import dining3 from '../assets/images/dining/dining (3).jpg'
import dining4 from '../assets/images/dining/dining (4).jpg'
import dining5 from '../assets/images/dining/dining (5).jpg'

import pool1 from '../assets/images/pool/pool (1).jpg'
import pool2 from '../assets/images/pool/pool (2).jpg'
import pool3 from '../assets/images/pool/pool (3).jpg'
import pool4 from '../assets/images/pool/pool (4).jpg'
import pool5 from '../assets/images/pool/pool (5).jpg'

import apa1 from '../assets/images/apa/apa (1).jpg'
import apa2 from '../assets/images/apa/apa (2).jpg'
import apa3 from '../assets/images/apa/apa (3).jpg'
import apa4 from '../assets/images/apa/apa (4).jpg'
import apa5 from '../assets/images/apa/apa (5).jpg'

import start1 from '../assets/images/start/Star 12.png'
import start2 from '../assets/images/start/Star 13.png'

import people1 from '../assets/images/people/Ellipse 85.png'
import people2 from '../assets/images/people/Ellipse 86.png'
import people3 from '../assets/images/people/Ellipse 87.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'




export const Home = () => {

  const [subHead,setSubHead] =useState("")
  const [head,setHead] =useState("")
  const [title,setTittle] = useState("")
  const [buttonText,setButtonText] =useState("")
  const [showButton,setShowButton] =useState(false)

  const navigate = useNavigate()


  useEffect(()=>{
    async function data(){
      let data = await axios.get('https://hotel-booking-delta-henna.vercel.app/bannerItem')
      console.log(data.data)
      setSubHead(data.data.subHead)
      setHead(data.data.head)
      setTittle(data.data.tittle)
      setButtonText(data.data.buttonText)
      setShowButton(data.data.showButton)
      
    }
    data()
  },[])

  const handleNavigate = () => {
    navigate('/booking')
  }

  return (
   <>
    
   {/* Banner section  */}
   <section className='homeSec h-[800px] bg-light'>
    <div className="container">
        <Navbar />
        <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-6 col-md-8 col-sm-10 text-center">
                <div className='mt-5'>
                    <h3 className='hotel py-4 text-left text-decoration-underline'>{subHead}</h3>
                    <h4 className='upTo pt-4 text-left'>{head}</h4>
                    <p className='ON pt-2 text-left'>{title}</p>

                    <div className='pt-4 text-left'>
                        {
                          showButton === true ? <Link to={'/booking'}> <button className='booking'>{buttonText}</button></Link> : null
                        }
                    </div>
                </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
                
            </div>
        </div>
    </div>
</section>
   
   {/* cheek section  */}
   <section className='position-relative h-[200px]'>
        <div className="container py-10 cheek position-absolute left-0 right-0 top-[-60px]">
        <div className="row justify-content-center">
    <div className="col-lg-2 col-md-4 col-sm-6">
        <div onClick={handleNavigate} className='cheekBox d-flex justify-content-between align-items-center px-2 mt-2 cursor-pointer'>
            <div><p className='m-0 text-[#747474]'>Check in</p></div>
            <div><span className='text-[#F28E13] text-xl'><CgCalendarDates /></span></div>
        </div>
    </div>
    <div className="col-lg-2 col-md-4 col-sm-6">
        <div onClick={handleNavigate} className='cheekBox d-flex justify-content-between align-items-center px-2 mt-2 cursor-pointer'>
            <div><p className='m-0 text-[#747474]'>Check out</p></div>
            <div><span className='text-[#F28E13] text-xl'><CgCalendarDates /></span></div>
        </div>
    </div>
    <div className="col-lg-2 col-md-4 col-sm-6">
        <div onClick={handleNavigate} className='cheekBox d-flex justify-content-between align-items-center px-2 mt-2 cursor-pointer'>
            <div><p className='m-0 text-[#747474]'>Adults</p></div>
            <div><span className='text-[#F28E13] text-xl'><LuSquareUser  /></span></div>
        </div>
    </div>
    <div className="col-lg-2 col-md-4 col-sm-6">
        <div onClick={handleNavigate} className='cheekBox d-flex justify-content-between align-items-center px-2 mt-2 cursor-pointer'>
            <div><p className='m-0 text-[#747474]'>Children</p></div>
            <div><span className='text-[#F28E13] text-xl'><FaChildren /></span></div>
        </div>
    </div>
    <div className="col-lg-2 col-md-4 col-sm-6">
        <div className='mt-2 cursor-pointer'>
            <Link to={'/booking'}> <button className='bookingNow2 w-100'>Booking Now</button></Link>
        </div>
    </div>
 </div>
        </div>
    </section>


    {/* room section  */}

    <section className='py-5'>
      <div className="container">
        <div className='text-center'>
        <h3 className='OurRoom py-4'>  <span className='text-blue-700'>Our</span> Room </h3>
        <p className='roomDami pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra  parturient diam sagittis nec cras.</p>
        </div>
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

                 <Link className='no-underline' to={'/booking'}> <div className='d-flex  bookingText justify-end align-items-center px-3 py-2 text-[#F28E13] cursor-pointer'>
                 <p className='m-0 text-lg'>Booking </p> 
                 <span className='pt-1 text-xl'><BsArrowRight /> </span>
                 </div></Link>
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

                 <Link className='no-underline' to={'/booking'}> <div className='d-flex  bookingText justify-end align-items-center px-3 py-2 text-[#F28E13] cursor-pointer'>
                 <p className='m-0 text-lg'>Booking </p> 
                 <span className='pt-1 text-xl'><BsArrowRight /> </span>
                 </div></Link>
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

                 <Link className='no-underline' to={'/booking'}><div className='d-flex bookingText justify-end align-items-center px-3 py-2 text-[#F28E13] cursor-pointer'>
                 <p className='m-0 text-lg'>Booking </p> 
                 <span className='pt-1 text-xl'><BsArrowRight /> </span>
                 </div></Link>
              </div>

            </div>
          </div>

        </div>

            <div className='pt-5 text-center'>
              <Link to={'/room'}>
              <button className='w-[140px] h-[45px] bg-[#0083CA] rounded-md shadow-md tracking-wide transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>More</button>
              </Link>
            </div>
      </div>
    </section>


{/* service section  */}

    <section className='py-5'>
      <div className="container">
        <div className='pt-2'>
          <h4 className='serviceHead'>Our  <span className='text-[#F28E13] font-bold'>Service</span> </h4>
          <p className='serDami pt-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra  parturient diam sagittis nec cras.</p>
        </div>
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
                 <Link className='no-underline' to={'/transport'}>  <h3 className='resturant pt-2 hover:underline'>Transport Facility</h3></Link>
                 <p className='restuDami pt-2'>Lorem ipsum dolor sit amet, consectetur</p>
               </div>
             </div>
             <div className="col-12 col-sm-6 col-md-4 col-lg-3">
               <div className='shadow-lg rounded-md p-3 mt-4 cursor-pointer transition duration-300 ease-in-out transform            hover:scale-105 hover:shadow-lg'>
                 <span className='w-[44px] h-[44px] shadow-md bg-[#F28E13] d-flex justify-center align-items-center            rounded-full text-white text-xl'>
                   <FaUniversalAccess />
                 </span>
                 <Link className='no-underline' to={'/spa'}> <h3 className='resturant pt-2 hover:underline'>Spa & Salon</h3></Link>
                 <p className='restuDami pt-2'>Lorem ipsum dolor sit amet, consectetur</p>
               </div>
             </div>
             <div className="col-12 col-sm-6 col-md-4 col-lg-3">
               <div className='shadow-lg rounded-md p-3 mt-4 cursor-pointer transition duration-300 ease-in-out transform            hover:scale-105 hover:shadow-lg'>
                 <span className='w-[44px] h-[44px] shadow-md bg-[#F28E13] d-flex justify-center align-items-center            rounded-full text-white text-xl'>
                   <FaWifi />
                 </span>
                <Link className='no-underline' to={'/freeWifi'}>  <h3 className='resturant pt-2 hover:underline'>Free Wifi</h3></Link>
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
                <Link className='no-underline' to={'/miniBar'}>  <h3 className='resturant pt-2 hover:underline'>Mini Bar</h3></Link>
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
                 <Link className='no-underline' to={'/game'}><h3 className='resturant pt-2 hover:underline'>Game Room</h3></Link>
                 <p className='restuDami pt-2'>Lorem ipsum dolor sit amet, consectetur</p>
               </div>
             </div>
           </div>
      </div>
    </section>

    {/* gallary section  */}

    <section className='py-5'>
      <div className="container">
      <div className='pt-3'>
          <h4 className='serviceHead'>Our  <span className='text-[#F28E13] font-bold'>Gallery</span> </h4>
          <p className='serDami pt-2 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra  parturient diam sagittis nec cras.</p>
        </div>
        <ul className="nav nav-tabs pt-4" id="myTab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active navTab" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">All</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link navTab" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Room</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link navTab" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Lobby</button>
  </li>

  <li className="nav-item" role="presentation">
    <button className="nav-link navTab" id="Reception-tab" data-bs-toggle="tab" data-bs-target="#Reception" type="button" role="tab" aria-controls="Reception" aria-selected="false">Reception</button>
  </li>

  <li className="nav-item" role="presentation">
    <button className="nav-link navTab" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Dining" type="button" role="tab" aria-controls="contact" aria-selected="false">Dining </button>
  </li>

  <li className="nav-item" role="presentation">
    <button className="nav-link navTab" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Pool" type="button" role="tab" aria-controls="contact" aria-selected="false">Pool</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link navTab" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Spa" type="button" role="tab" aria-controls="contact" aria-selected="false">Spa</button>
  </li>
</ul>
<div className="tab-content pt-10" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  <div className="container">
    <div className="grid grid-cols-4 gap-2">
      <img
        src={hotel}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
      <img
        src={hotel4}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={hotel1}
        alt=""
        className="w-full h-full object-cover row-span-2"
      />
      <img
        src={hotel5}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={hotel3}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
    </div>

    <div className="grid grid-cols-4 gap-2">
      <img
        src={lobby1}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
      <img
        src={lobby2}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={lobby3}
        alt=""
        className="w-full h-full object-cover row-span-2"
      />
      <img
        src={lobby4}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={lobby5}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
    </div>

    <div className="grid grid-cols-4 gap-2">
      <img
        src={dining1}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
      <img
        src={dining2}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={dining3}
        alt=""
        className="w-full h-full object-cover row-span-2"
      />
      <img
        src={dining4}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={dining5}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
    </div>

    <div className="grid grid-cols-4 gap-2">
      <img
        src={apa1}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
      <img
        src={apa2}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={apa3}
        alt=""
        className="w-full h-full object-cover row-span-2"
      />
      <img
        src={apa4}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={apa5}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
    </div>
    
    </div>
  </div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <div className="container">
    <div className="grid grid-cols-4 gap-2">
      <img
        src={hotel}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
      <img
        src={hotel4}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={hotel1}
        alt=""
        className="w-full h-full object-cover row-span-2"
      />
      <img
        src={hotel5}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={hotel3}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
    </div>
    </div>
  </div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
    <div className="container">
    <div className="grid grid-cols-4 gap-2">
      <img
        src={lobby1}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
      <img
        src={lobby2}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={lobby3}
        alt=""
        className="w-full h-full object-cover row-span-2"
      />
      <img
        src={lobby4}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={lobby5}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
    </div>
    </div>
  </div>
  <div className="tab-pane fade" id="Reception" role="tabpanel" aria-labelledby="Reception-tab">
    <div className="container">
    <div className="grid grid-cols-4 gap-2">
      <img
        src={reciption1}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
      <img
        src={reciption2}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={reciption3}
        alt=""
        className="w-full h-full object-cover row-span-2"
      />
      <img
        src={reciption4}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={reciption5}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
    </div>
    </div>
  </div>
  <div className="tab-pane fade" id="Dining" role="tabpanel" aria-labelledby="Reception-tab">
    <div className="container">
    <div className="grid grid-cols-4 gap-2">
      <img
        src={dining1}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
      <img
        src={dining2}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={dining3}
        alt=""
        className="w-full h-full object-cover row-span-2"
      />
      <img
        src={dining4}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={dining5}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
    </div>
    </div>
  </div>
  <div className="tab-pane fade" id="Pool" role="tabpanel" aria-labelledby="Reception-tab">
    <div className="container">
    <div className="grid grid-cols-4 gap-2">
      <img
        src={pool1}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
      <img
        src={pool2}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={pool3}
        alt=""
        className="w-full h-full object-cover row-span-2"
      />
      <img
        src={pool4}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={pool5}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
    </div>
    </div>
  </div>
  <div className="tab-pane fade" id="Spa" role="tabpanel" aria-labelledby="Reception-tab">
    <div className="container">
    <div className="grid grid-cols-4 gap-2">
      <img
        src={apa1}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
      <img
        src={apa2}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={apa3}
        alt=""
        className="w-full h-full object-cover row-span-2"
      />
      <img
        src={apa4}
        alt=""
        className="w-full h-full object-cover"
      />
      <img
        src={apa5}
        alt=""
        className="col-span-2 w-full h-full object-cover"
      />
    </div>
    </div>
  </div>
</div>
      </div>
    </section>

  {/* people say  */}
    <section className='py-5'>
      <div className="container">
      <div className='pt-3'>
          <h4 className='serviceHead '>What <span className='text-[#F28E13] font-bold'>People Say </span> </h4>
          <p className='serDami pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra  parturient diam sagittis nec cras.</p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className='mt-3 shadow-lg rounded-md py-4 px-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer'>
           <p className='sayDami'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus consectetur amet, diam pellentesque lectus sit morbi.</p>
                
                <div className='d-flex justify-center'>
                    <img className='img-fluid px-1 ' src={start1} alt="" />
                    <img className='img-fluid px-1 ' src={start1} alt="" />
                    <img className='img-fluid px-1 ' src={start1} alt="" />
                    <img className='img-fluid px-1 ' src={start1} alt="" />
                    <img className='img-fluid px-1 ' src={start2} alt="" />
                </div>
                 
            </div>
          </div>
          <div className="col-lg-4">
          <div className='mt-3 shadow-lg rounded-md py-4 px-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer'>
           <p className='sayDami'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus consectetur amet, diam pellentesque lectus sit morbi.</p>
                
                <div className='d-flex justify-center'>
                    <img className='img-fluid px-1 ' src={start1} alt="" />
                    <img className='img-fluid px-1 ' src={start1} alt="" />
                    <img className='img-fluid px-1 ' src={start1} alt="" />
                    <img className='img-fluid px-1 ' src={start1} alt="" />
                    <img className='img-fluid px-1 ' src={start2} alt="" />
                </div>
                 
            </div>
          </div>
          <div className="col-lg-4">
          <div className='mt-3 shadow-lg rounded-md py-4 px-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer'>
           <p className='sayDami'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus consectetur amet, diam pellentesque lectus sit morbi.</p>
                
                <div className='d-flex justify-center'>
                    <img className='img-fluid px-1 ' src={start1} alt="" />
                    <img className='img-fluid px-1 ' src={start1} alt="" />
                    <img className='img-fluid px-1 ' src={start1} alt="" />
                    <img className='img-fluid px-1 ' src={start1} alt="" />
                    <img className='img-fluid px-1 ' src={start2} alt="" />
                </div>
                 
            </div>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-lg-4">
            <div className='text-center'>
              <div className='d-flex justify-center'><img className='img-fluid' src={people1} alt="" /></div>
              <h3 className='jane'>Jane Cooper</h3>
              <span className='cooper'>@Jane Cooper</span>
            </div>
          </div>
          <div className="col-lg-4">
          <div className='text-center'>
              <div className='d-flex justify-center'><img className='img-fluid' src={people2} alt="" /></div>
              <h3 className='jane'>Esther Howard</h3>
              <span className='cooper'>@Esther Howard</span>
            </div>
          </div>
          <div className="col-lg-4">
          <div className='text-center'>
              <div className='d-flex justify-center'><img className='img-fluid' src={people3} alt="" /></div>
              <h3 className='jane'>Kathryn Murphy</h3>
              <span className='cooper'>@Kathryn Murphy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}
