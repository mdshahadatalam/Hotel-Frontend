// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsppspg9bPGlwDj1taFSXfdF-dseBWm7s",
  authDomain: "hotel-booking-cc62a.firebaseapp.com",
  projectId: "hotel-booking-cc62a",
  storageBucket: "hotel-booking-cc62a.firebasestorage.app",
  messagingSenderId: "process.env.REACT_APP_MESSAGEID",
  appId: "process.env.REACT_APP_APPID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig