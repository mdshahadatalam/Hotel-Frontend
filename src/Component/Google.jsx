import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import firebaseConfig from './../DB/Firebase';
import { initializeApp } from 'firebase/app';
import { useDispatch } from 'react-redux';
import { loggedInUser } from '../Fueature/Slice/Login';
import { useNavigate } from 'react-router-dom';
export const Google = () => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const  dispatch = useDispatch()
    const navigate = useNavigate()
    initializeApp(firebaseConfig)

    const handleGoogleSignIn =()=>{ 

        auth.languageCode = 'it';
        signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
    dispatch(loggedInUser(result?.user))
                    
          localStorage.setItem("user",JSON.stringify(result?.user))
          navigate('/')
    
  }).catch((error) => {
    console.log(error);
    
  });
    }
  return (
    <>
     <div className='justify-center'>
         <h2 className='m-0 py-2 font-serif text-3xl'>or</h2>
          <div className=''>
          <button
                onClick={handleGoogleSignIn}
                className="border border-[#e5eaf2] bg-white rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] text-[#424242] hover:bg-gray-300 transition-all duration-200">
                <img src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png" alt="google logo"
                     className="w-[23px]"/>
                Sign in with Google
            </button>
          </div>
     </div>
    </>
  )
}
