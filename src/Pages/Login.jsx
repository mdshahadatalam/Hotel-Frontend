import React, { useState } from 'react'
import { useFormik } from 'formik'
import { signIn, signUp } from '../Validation.jsx/Validation'
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loggedInUser } from '../Fueature/Slice/Login';
import { Navbar } from '../Component/Navbar';

import { RxCross2 } from "react-icons/rx";
import { ShowNav } from '../Component/ShowNav';

import room1 from '../assets/images/room/room (3).png'
import room2 from '../assets/images/room/room (5).png'
import room3 from '../assets/images/room/room (6).png'
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineFitScreen } from "react-icons/md";
import { PropagateLoader } from 'react-spinners';


export const Login = () => {
 
  const [show,setShow] = useState(true)
  const auth = getAuth();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loader,setLoader] = useState(false)

  const handleClose =()=>{
    setShow(false)
  }

  const handleShow =()=>{
    setShow(true)
  }
   

  
       const  initialValues ={
          name:"",
          email:"",
          password:""
          
       }
  
      const formik = useFormik({
          initialValues,
          onSubmit:(values,{resetForm})=>{
            createdNewUserSignIn()
              resetForm({values:''})
          },
          validationSchema:signIn
      })
      // console.log(formik);
  
      const createdNewUserSignIn =()=>{
        setLoader(true)

        signInWithEmailAndPassword(auth, formik.values.email, formik.values.password)
       .then((user) => {
        setLoader(false)
     console.log("Sign In");

     if(user.user.emailVerified == true){
      dispatch(loggedInUser(user))
                
      localStorage.setItem("user",JSON.stringify(user))
      navigate('/')
     }else{
       toast.error('Your email is not verified', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              // transition: Bounce,
              });
     }
     
  })
  .catch((error) => {
    setLoader(false)
   console.log(error);
   if(error.message.includes('auth/invalid-credential')){
    toast.error('Email or Password Incorrect', {
       position: "top-right",
       autoClose: 1000,
       hideProgressBar: true,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       
       });
 }
   
  });
        
      }
  return (
    <>
    <section className='inputFeild'>
       
        <ShowNav setShow={setShow}/>
      <div id='loginSec' className='formSec pt-5'>
      {
        show && <form  onSubmit={formik.handleSubmit} className='formSection font-serif' action="/submit_registration" method="POST">

           <div className='position-relative'>
           <span onClick={handleClose} className='crossIcon cursor-pointer'><RxCross2 /></span>
           </div>

        <h2>Sign in</h2>
        <div class="form-control shadow-md">
            <label for="email">Email</label>
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
             type="email" 
             id="email" 
             name="email"
             required/>
               {
            formik.errors.email && formik.touched.email &&   <div className="text-red-500">{formik.errors.email}</div>
    
           }
        </div>
        <div class="form-control shadow-md">
            <label for="password">Password</label>
            <input
             onChange={formik.handleChange}
             value={formik.values.password}
             type="password"
             id="password"
             name="password"
            required/>
              {
            formik.errors.password && formik.touched.password &&   <div className="text-red-500">{formik.errors.password}</div>
    
           }
        </div>
        
        <button className='rounded-sm shadow-md' type="submit">
          {
            loader ? <PropagateLoader size={5} color='white' /> : "Sign in"
          }
          </button>

          <Link to={'/forget'} className='no-underline text-black'> <p className='m-0 hover:underline font-serif tracking-wide hover:text-blue-500 cursor-pointer pt-2'>Forget password?</p></Link>
    
        <p className='py-2'>Don't have a account? <Link className='no-underline hover:underline' to={'/rejistration'}>Sign up</Link> </p>
    </form>
       }
      </div>
       </section>

       <section className='py-5'>
             <div className="container">
               <div className='text-center'>
               <h3 className='OurRoom py-4'>  <span className='text-blue-700'>Our</span> Room </h3>
               <p className='roomDami pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor viverra  parturient diam sagittis nec cras.</p>
               </div>
               <div className="row roomRes">
                 
                 <div className="col-lg-4 roomSet justify-center d-flex">
                   <a className='no-underline' href="#loginSec">
                   <div onClick={handleShow}  className='roomBox my-3  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
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
                   </a>
                 </div>
                 <div className="col-lg-4 roomSet justify-center d-flex">
                 <a className='no-underline' href="#loginSec"><div onClick={handleShow}  className='roomBox my-3  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
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
       
                   </div></a>
                 </div>
                 <div className="col-lg-4 roomSet justify-center d-flex">
                 <a className='no-underline' href="#loginSec"><div onClick={handleShow}  className='roomBox my-3 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
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
       
                   </div></a>
                 </div>
       
               </div>
       
                   <div className='pt-5 text-center'>
                     
                    <a href="#loginSec">
                    <button onClick={handleShow}  className='w-[140px] h-[45px] bg-[#0083CA] rounded-md shadow-md tracking-wide transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>More</button>
                    </a>
                     
                   </div>
             </div>
           </section>
       

       <ToastContainer/>
    </>
  )
}
