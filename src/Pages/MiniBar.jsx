import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Link } from 'react-router-dom'
import mini1 from '../assets/images/dining/dining (1).jpg'
import mini2 from '../assets/images/dining/dining (2).jpg'
import mini3 from '../assets/images/dining/dining (3).jpg'
export const MiniBar = () => {
  return (
    <>
     <section className='aboutSec h-[300px] '>
              <div className="container">
                  <Navbar />
                   <div className='font-serif text-center py-5'>
                           <h3 className='about'>Mini Bar</h3>
                           <p className='title py-2'><Link to={'/'} className='no-underline text-white'>Home</Link> / Service / Mini Bar</p>
                       </div>      
             
              </div>
          </section>

            <section className='py-5'>
                                                         <div className="container">
                                                           <div className="row justify-center align-items-center pt-5">
                                                             <div className="col-lg-6">
                                                               <img className='img-fluid shadow-md rounded-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' src={mini1} alt="" />
                                                             </div>
                                                             <div className="col-lg-6">
                                                               <h3 className='serHead'>Mini Bar</h3>
                                                               <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                                                               </p>
                                                 
                                                 
                                                               <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                                                               </p>
                                                             </div>
                                                           </div>
                                                       
                                                           <div className="row justify-center align-items-center pt-5">
                                                             <div className="col-lg-6">
                                                               <h3 className='serHead'>Mini Bar</h3>
                                                               <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                                                               </p>
                                                 
                                                 
                                                               <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                                                               </p>
                                                             </div>
                                                 
                                                             <div className="col-lg-6">
                                                               <img className='img-fluid shadow-md rounded-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' src={mini2} alt="" />
                                                             </div>
                                                           </div>
                                       
                                                           <div className="row justify-center align-items-center pt-5">
                                                             <div className="col-lg-6">
                                                               <img className='img-fluid shadow-md rounded-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' src={mini3} alt="" />
                                                             </div>
                                                             <div className="col-lg-6">
                                                               <h3 className='serHead'>Mini Bar</h3>
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
