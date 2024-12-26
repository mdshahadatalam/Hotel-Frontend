import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Link } from 'react-router-dom'
import family from '../assets/images/familyRoom/family.png'

export const Booking = () => {
  return (
    <>
    <section className='aboutSec h-[300px] '>
                  <div className="container">
                      <Navbar />
                       <div className='font-serif text-center py-5'>
                               <h3 className='about'>Booking</h3>
                               <p className='title py-2'><Link to={'/'} className='no-underline text-white'>Home</Link> / Booking</p>
                           </div>      
                 
                  </div>
              </section>


<section className='py-5'>
  <div className="container bg-[#b0d3e7] rounded-md shadow-md">
    <div className="row">
      <div className="col-lg-5 col-md-6 col-sm-12 p-0">
        <img className='img-fluid ps-2' src={family} alt="Family Room" />
      </div>
      <div className="col-lg-7 col-md-6 col-sm-12 p-0">
        <div className='d-flex justify-content-between align-items-center pt-3'>
          <h3 className='famiRom'>Family Room</h3>
          <a className='no-underline much me-2' href="">$799</a>
        </div>

        <div className="container pt-5 pe-4">
          <table className="table table-striped m-0">
            <thead>
              <tr>
                <th>Check-In Time</th>
                <th>Check-In Time</th>
                <th>Guests</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10:00 AM</td>
                <td>10:00 AM</td>
                <td>4</td>
              </tr>
              <tr>
                <td>09/03/2021</td>
                <td>09/03/2021</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='pt-4 text-right me-2'>
          <button className='booking'>Confirm</button>
         </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
