import React from 'react'
import { Link } from 'react-router-dom'

export const HomeShow = () => {
  return (
    <>
    <div className='mt-5 '>
                        <h3 className=' text-center hotel py-4  text-decoration-underline'>HOTEL</h3>
                        <h4 className=' text-center upTo pt-4'>Up to 60% OFF</h4>
                        <p className=' text-center ON pt-2 '>On Hotel Booking Online</p>
    
                        <div className='pt-4 text-left'>
                            <Link to={'/booking'}> <button className='booking'>Booking Now</button></Link>
                        </div>
                    </div>
    </>
  )
}
