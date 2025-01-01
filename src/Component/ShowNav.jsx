import React, { useState } from 'react'
import {FaDiscord} from "react-icons/fa";
import {IoIosSearch} from "react-icons/io";
import {TbBrandGithubFilled} from "react-icons/tb";
import {CiMenuFries} from "react-icons/ci";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { getAuth, signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { loggedOutUser } from '../Fueature/Slice/Login';


export const ShowNav = ({setShow}) => {
    const [logShow, setLogShow] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const auth = getAuth();

    const handleShow =()=>{
        setShow(true)
    }
   
  return (
    <>
     <div className="container p-2 ">
     <nav className="flex items-center justify-between w-full relative">
            {/* <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo" className="w-[60px] "/> */}

            <CiMenuFries onClick={handleShow} className="text-[1.6rem] text-[#424242] cursor-pointer lg:hidden flex"
                             />
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden pt-3">

                <Link className='no-underline' to={'/rejistration'}>
                <li className="hover:border-b-[#3B9DF8] text-white tracking-wide text-xl mx-2  border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">home</li>
                </Link>

                <Link className='no-underline' to={'/rejistration'}>
                <li  className="hover:border-b-[#3B9DF8] text-white tracking-wide text-xl mx-2  border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">Rooms & Sultes 
                    us
                </li>
                </Link>

                <Link className='no-underline' to={'/rejistration'}>
                <li o className="hover:border-b-[#3B9DF8] text-white tracking-wide text-xl mx-2  border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">Services</li>
                </Link>

                <Link className='no-underline' to={'/rejistration'}>
                <li  className="hover:border-b-[#3B9DF8] text-white tracking-wide text-xl mx-2  border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">About US </li>
                </Link>
                <Link className='no-underline' to={'/rejistration'}>
                <li o className="hover:border-b-[#3B9DF8] text-white tracking-wide text-xl mx-2  border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">Booking</li>
                </Link>
            </ul>

            <div className="flex items-center gap-[10px]">
                

            <div className="flex">
                 <a target='none'  href="https://www.instagram.com/____md_shahadat_alam____?igsh=MXZleWQ2M3NjY3ZuYQ==">
                 <span onClick={handleShow} title='Instagram' className="mx-2 w-[32px] cursor-pointer hover:shadow-lg h-[32px] rounded-full text-lg bg-[#ffffff33] p-1 flex justify-center items-center text-[#ffff] transition-transform duration-300 hover:scale-110 hover:bg-[#ffffff33]">
                       <FaInstagram />
                 </span>
                 </a>
                 <a target='none' href="https://www.facebook.com/mdshahadat.alam.35380">
                 <span onClick={handleShow} title='Facebook' className="mx-2 w-[32px] cursor-pointer hover:shadow-lg h-[32px] rounded-full text-lg bg-[#ffffff33] p-1 flex justify-center items-center text-[#ffff] transition-transform duration-300 hover:scale-110 hover:bg-[#ffffff33]">
                       <FaFacebookF />
                 </span>
                 </a>
                <a target='none' href="https://youtu.be/UJEUwEJ6gH4?si=COgSNP-QwQK4jOJG">
                <span onClick={handleShow} title='Youtube' className="mx-2 w-[32px] cursor-pointer hover:shadow-lg h-[32px] rounded-full text-lg bg-[#ffffff33] p-1 flex justify-center items-center text-[#ffff] transition-transform duration-300 hover:scale-110 hover:bg-[#ffffff33]">
                       <FaYoutube />
                 </span>
                </a>
                 
                 
                 <span onClick={handleShow} title='Twitter' className="mx-2 w-[32px] cursor-pointer hover:shadow-lg h-[32px] rounded-full text-lg bg-[#ffffff33] p-1 flex justify-center items-center text-[#ffff] transition-transform duration-300 hover:scale-110 hover:bg-[#f5f2f233]">
                       <FaTwitter />
                    </span>
              

                     <Link to={'/rejistration'}>  <span  title='Sign in' className="mx-2 w-[32px] cursor-pointer hover:shadow-lg h-[32px] rounded-full text-lg bg-[#ffffff33] p-1 flex justify-center items-center text-[#ffff] transition-transform duration-300 hover:scale-110 hover:bg-[#f5f2f233]"><FaRegUserCircle /></span></Link> 
                    
                    
                </div>

              

            </div>

            
        </nav>
     </div>


   
     
    </>
  )
}
