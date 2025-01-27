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
import { toast, ToastContainer } from 'react-toastify';


export const Navbar = ({setShow}) => {
    const [logShow, setLogShow] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const auth = getAuth();

    const handleShow =()=>{
        setShow(true)
    }

    const handleLogOut =()=>{
        signOut(auth).then(()=>{
            console.log("logged out")
            navigate('/')
            localStorage.removeItem('user')
            dispatch(loggedOutUser());
             
        }).catch(()=>{
            console.log("error")
        })
    }


    const handleShowLog =()=>{
        setLogShow(true)
    }

    const handleLogClose =(e)=>{
        e.preventDefault()
        setLogShow(false)
    }
    
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  return (
    <>
     <div className="container p-0 ">
     <nav className="flex items-center justify-between w-full relative">
            {/* <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo" className="w-[60px] "/> */}

            <CiMenuFries onClick={()=>{setMobileSidebarOpen(!mobileSidebarOpen)}} className="text-[1.6rem] text-[#424242] cursor-pointer lg:hidden flex"
                             />
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden pt-3">

                <Link className='no-underline' to={'/'}>
                <li onClick={handleShow} className="hover:border-b-[#3B9DF8] text-white tracking-wide text-xl mx-2  border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">home</li>
                </Link>

                <Link className='no-underline' to={'/room'}>
                <li onClick={handleShow} className="hover:border-b-[#3B9DF8] text-white tracking-wide text-xl mx-2  border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">Rooms & Sultes 
                    us
                </li>
                </Link>

                <Link className='no-underline' to={'/service'}>
                <li onClick={handleShow} className="hover:border-b-[#3B9DF8] text-white tracking-wide text-xl mx-2  border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">Services</li>
                </Link>

                <Link className='no-underline' to={'/about'}>
                <li onClick={handleShow} className="hover:border-b-[#3B9DF8] text-white tracking-wide text-xl mx-2  border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">About US </li>
                </Link>
                <Link className='no-underline' to={'/booking'}>
                <li onClick={handleShow} className="hover:border-b-[#3B9DF8] text-white tracking-wide text-xl mx-2  border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">Booking</li>
                </Link>
            </ul>

            <div className="flex items-center gap-[10px]">
                

            <div className="flex">
                 <a target='none' href="https://www.instagram.com/____md_shahadat_alam____?igsh=MXZleWQ2M3NjY3ZuYQ==">
                 <span onClick={handleShow} title='Instagram' className="mx-2 w-[32px] cursor-pointer hover:shadow-lg h-[32px] rounded-full text-lg bg-[#ffffff33] p-1 flex justify-center items-center text-[#ffff] transition-transform duration-300 hover:scale-110 hover:bg-[#ffffff33]">
                       <FaInstagram />
                 </span>
                 </a>
                 <a target='none' href="https://www.facebook.com/mdshahadat.alam.35380">
                 <span onClick={handleShow} title='Facebook' className="mx-2 w-[32px] cursor-pointer hover:shadow-lg h-[32px] rounded-full text-lg bg-[#ffffff33] p-1 flex justify-center items-center text-[#ffff] transition-transform duration-300 hover:scale-110 hover:bg-[#ffffff33]">
                       <FaFacebookF />
                 </span>
                 </a>
                 <a target='none' href="https://youtu.be/UJEUwEJ6gH4?si=2zfHZvXRp0BlIElA">
                 <span onClick={handleShow} title='Youtube' className="mx-2 w-[32px] cursor-pointer hover:shadow-lg h-[32px] rounded-full text-lg bg-[#ffffff33] p-1 flex justify-center items-center text-[#ffff] transition-transform duration-300 hover:scale-110 hover:bg-[#ffffff33]">
                       <FaYoutube />
                 </span>
                 </a>
                 <span onClick={handleShow} title='Twitter' className="mx-2 w-[32px] cursor-pointer hover:shadow-lg h-[32px] rounded-full text-lg bg-[#ffffff33] p-1 flex justify-center items-center text-[#ffff] transition-transform duration-300 hover:scale-110 hover:bg-[#f5f2f233]">
                       <FaTwitter />
                    </span>

                  
                <span onClick={handleShowLog} title='Log out' className="mx-2 w-[32px] cursor-pointer hover:shadow-lg h-[32px] rounded-full text-lg bg-[#ffffff33] p-1 flex justify-center items-center text-[#ffff] transition-transform duration-300 hover:scale-110 hover:bg-[#f5f2f233]"><IoMdLogOut /></span> 
                    

                    
                </div>

              

            </div>

            <aside
                className={` ${mobileSidebarOpen ? "translate-y-0 opacity-100 z-20" : "translate-y-[200px] opacity-0 z-[-1]"} lg:hidden bg-[#3B9DF8] p-4 text-center absolute top-[60px] right-0 w-full sm:w-[300px] rounded-md transition-all duration-300`}>
                <div className="w-full relative mb-5">
                    <input
                        className="py-1.5 pr-4 pl-12 w-full rounded-full outline-none focus:border-[#3B9DF8]"
                        placeholder="Search..."/>
                    <IoIosSearch className="absolute top-[9px] left-5 text-[#424242] text-[1.3rem]"/>
                </div>
                <ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">
                    <Link className='no-underline text-white' to={'/'}>
                    <li onClick={()=>{setMobileSidebarOpen(!mobileSidebarOpen)}} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">home</li> 
                    </Link>
                    <Link className='no-underline text-white' to={'/room'}>
                    <li onClick={()=>{setMobileSidebarOpen(!mobileSidebarOpen)}} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">Rooms & Sultes 
                    </li>
                    </Link>

                    <Link className='no-underline text-white' to={'/service'}>
                    <li onClick={()=>{setMobileSidebarOpen(!mobileSidebarOpen)}} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">services</li>
                    </Link>
                    
                    <Link className='no-underline text-white' to={'/'}>
                    <li onClick={()=>{setMobileSidebarOpen(!mobileSidebarOpen)}} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">About Us</li>
                    </Link>

                    <Link className='no-underline text-white' to={'/booking'}>
                    <li onClick={()=>{setMobileSidebarOpen(!mobileSidebarOpen)}} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Booking</li>
                    </Link>
                </ul>
            </aside>
        </nav>
     </div>


     {
      logShow && <div className='formSec position-fixed m-0 d-flex justify-center align-items-center h-screen w-full text-white'>
      <div className='w-80 h-32 bg-slate-600 '>
        <p className='text-white text-center py-2'>Are you sure log out?</p>
        <div className='d-flex justify-between pt-7 px-4'>
        <a onClick={handleLogOut} className='text-white no-underline' href="">Yes</a>
        <a onClick={handleLogClose} className='text-white no-underline' href="">No</a>
        </div>
      </div>
   </div>
     }
     <ToastContainer/>
    </>
  )
}
