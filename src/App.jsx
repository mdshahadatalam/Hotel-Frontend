import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './Component/Navbar';
import { Rejistration } from './Pages/Rejistration';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { RootLayout } from './RootLayout';
import { Login } from './Pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import LoggedInUser from './PrivateRoute/LoggedInUser';
import LoggedOutUser from './PrivateRoute/LogOutUser';
import { Room } from './Pages/Room';
import { Service } from './Pages/Service';
import { Booking } from './Pages/Booking';
import { Resturant } from './Pages/Resturant';
import { Transport } from './Pages/Transport';
import { Spa } from './Pages/Spa';
import { FreeWifi } from './Pages/FreeWifi';
import { Pool } from './Pages/Pool';
import { MiniBar } from './Pages/MiniBar';
import { Conference } from './Pages/Conference';
import { Game } from './Pages/Game';
import { Forget } from './Component/Forget';



function App() {
   const router = createBrowserRouter(createRoutesFromElements(
    <Route>

      

      {/* <Route path='/rejistration' element={<Rejistration/>}></Route> */}
      {/* <Route path='/login' element={ <Login/> }></Route> */}

      <Route element={<LoggedInUser/>}>
      <Route path="/booking" element={<Booking />}></Route>
      </Route>

      <Route element={<RootLayout/>}>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/room" element={<Room />}></Route>
      <Route path="/service" element={<Service />}></Route>
     
      <Route path="/resturent" element={<Resturant />}></Route>
      <Route path="/transport" element={<Transport />}></Route>
      <Route path="/spa" element={<Spa />}></Route>
      <Route path="/freeWifi" element={<FreeWifi />}></Route>
      <Route path="/pool" element={<Pool />}></Route>
      <Route path="/miniBar" element={<MiniBar />}></Route>
      <Route path="/confo" element={<Conference />}></Route>
      <Route path="/game" element={<Game />}></Route>

      </Route>
   
       

       <Route element={<LoggedOutUser/>}>
       </Route>
       
       <Route path='/rejistration' element={<Rejistration/>}></Route>
       <Route path='/login' element={ <Login/> }></Route>
       <Route path='/forget' element={ <Forget/> }></Route>
       

    </Route>
   ))
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
