import React, { useState } from 'react'
import { useFormik } from 'formik'
import { signUp } from '../Validation.jsx/Validation'
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification  } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Navbar } from '../Component/Navbar';
import { ShowNav } from '../Component/ShowNav';
import { PropagateLoader } from 'react-spinners';

export const Rejistration = () => {
  const auth = getAuth();
  const navigate = useNavigate()
  const [loader,setLoader] = useState(false)

     const  initialValues ={
        name:"",
        email:"",
        password:""
        
     }

    const formik = useFormik({
        initialValues,
        onSubmit:(values,{resetForm})=>{
            createdNewUser()
            resetForm({values:''})
        },
        validationSchema:signUp
    })
    // console.log(formik);

    const createdNewUser =()=>{
        // console.log(formik.values)
        setLoader(true)
        createUserWithEmailAndPassword(auth,formik.values.email,formik.values.password)
  .then(() => {
  //  console.log('sign up');
  setLoader(false)
   sendEmailVerification(auth.currentUser).then(()=>{
    console.log('email sent');   
    toast.success('Email send for verification'), {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      }
      setTimeout(()=>{
        navigate('/login')
      },2000)

   })
   
  })
  .catch((error) => {
    console.log(error)
    setLoader(false)
    if(error.message.includes('auth/email-already-in-use')){
      toast.error('Email already use', {
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
    
  });
    }
    
  return (
  <>
   <section className='inputFeild'>
     <ShowNav/>
    <div className='formSec'>
    <form  onSubmit={formik.handleSubmit} className='formSection font-serif' action="/submit_registration" method="POST">
    <h2>Sign up</h2>
    <div class="form-control shadow-mdshadow-md">
        <label for="name">Name</label>
        <input
           onChange={formik.handleChange}
           value={formik.values.name}
           type="text"
           id="name"
           name="name"
           required/>
           {
        formik.errors.name && formik.touched.name &&   <div className="text-red-500">{formik.errors.name}</div>

       }
    </div>
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
        loader ?  <PropagateLoader size={5} color='white'  /> : "Sign up"
      }
      </button>

    <p className='py-2'>You have a account? <Link className='no-underline hover:underline' to={'/login'}>Sign In</Link> </p>
</form>
    </div>
   </section>

   <ToastContainer/>

  </>
  )
}
