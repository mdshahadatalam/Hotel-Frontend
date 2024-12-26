import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Link } from 'react-router-dom'
import spa1 from '../assets/images/spa2/spa (1).jpg'
import spa2 from '../assets/images/spa2/spa (2).jpg'
import spa3 from '../assets/images/spa2/spa (3).jpg'

export const Spa = () => {
  return (
    <>
    <section className='aboutSec h-[300px] '>
              <div className="container">
                  <Navbar />
                   <div className='font-serif text-center py-5'>
                           <h3 className='about'>Spa & Sallon</h3>
                           <p className='title py-2'><Link to={'/'} className='no-underline text-white'>Home</Link> / Service / Spa & Sallon</p>
                       </div>      
             
              </div>
          </section>

          <section className='py-5'>
                                      <div className="container">
                                        <div className="row justify-center align-items-center pt-5">
                                          <div className="col-lg-6">
                                            <img className='img-fluid shadow-md rounded-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' src={spa1} alt="" />
                                          </div>
                                          <div className="col-lg-6">
                                            <h3 className='serHead'>Spa & Sallon</h3>
                                            <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                                            </p>
                              
                              
                                            <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                                            </p>
                                          </div>
                                        </div>
                                    
                                        <div className="row justify-center align-items-center pt-5">
                                          <div className="col-lg-6">
                                            <h3 className='serHead'>Face Wash</h3>
                                            <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                                            </p>
                              
                              
                                            <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                                            </p>
                                          </div>
                              
                                          <div className="col-lg-6">
                                            <img className='img-fluid shadow-md rounded-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' src={spa2} alt="" />
                                          </div>
                                        </div>
                    
                                        <div className="row justify-center align-items-center pt-5">
                                          <div className="col-lg-6">
                                            <img className='img-fluid shadow-md rounded-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' src={spa3} alt="" />
                                          </div>
                                          <div className="col-lg-6">
                                            <h3 className='serHead'>Spa & Sallon Room</h3>
                                            <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                                            </p>
                              
                              
                                            <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                                            </p>
                                          </div>
                                        </div>
                                        
                                      </div>
               </section>
    </>
  )
}
