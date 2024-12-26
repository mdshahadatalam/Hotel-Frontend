import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Link } from 'react-router-dom'

import free1 from '../assets/images/wifi/wifi (1).jpg'
import free2 from '../assets/images/wifi/wifi (2).jpg'
export const FreeWifi = () => {
  return (
    <>
    <section className='aboutSec h-[300px] '>
              <div className="container">
                  <Navbar />
                   <div className='font-serif text-center py-5'>
                           <h3 className='about'>Free Wifi</h3>
                           <p className='title py-2'><Link to={'/'} className='no-underline text-white'>Home</Link> / Service / Free Wifi</p>
                       </div>      
             
              </div>
          </section>

          <section className='py-5'>
                  <div className="container">
                    <div className="row justify-center align-items-center pt-5">
                      <div className="col-lg-6">
                        <img className='img-fluid shadow-md rounded-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' src={free2} alt="" />
                      </div>
                      <div className="col-lg-6">
                        <h3 className='serHead'>Free Wifi</h3>
                        <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                        </p>
          
          
                        <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                        </p>
                      </div>
                    </div>
                
                    <div className="row justify-center align-items-center pt-5">
                      <div className="col-lg-6">
                        <h3 className='serHead'>High Speed Wifi</h3>
                        <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                        </p>
          
          
                        <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                        </p>
                      </div>
          
                      <div className="col-lg-6">
                        <img className='img-fluid shadow-md rounded-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' src={free1} alt="" />
                      </div>
                    </div>
                    
                  </div>
                </section>
    </>
  )
}
