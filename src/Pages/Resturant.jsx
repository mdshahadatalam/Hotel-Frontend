import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Link } from 'react-router-dom'
import resturent1 from '../assets/images/resturent/resturent (1).png'
import resturent2 from '../assets/images/resturent/resturent (2).png'
import resturent3 from '../assets/images/resturent/resturent (3).png'

import resItem1 from '../assets/images/resItem/resItem (1).png'
import resItem2 from '../assets/images/resItem/resItem (2).png'
import resItem3 from '../assets/images/resItem/resItem (3).png'
import resItem4 from '../assets/images/resItem/resItem (4).png'
import resItem5 from '../assets/images/resItem/resItem (5).png'
import resItem6 from '../assets/images/resItem/resItem (6).png'
import resItem7 from '../assets/images/resItem/resItem (7).png'
import resItem8 from '../assets/images/resItem/resItem (8).png'


export const Resturant = () => {
  return (
    <>
    <section className='aboutSec h-[300px] '>
              <div className="container">
                  <Navbar/>
                   <div className='font-serif text-center py-5'>
                           <h3 className='about'>Restuarant </h3>
                           <p className='title py-2'><Link to={'/'} className='no-underline text-white'>Home</Link> / Service / Restuarant </p>
                       </div>      
             
              </div>
          </section>


   <section className='py-5'>
                  <div className="container">
                    <div className="row justify-center align-items-center pt-5">
                      <div className="col-lg-6">
                        <img className='img-fluid shadow-md rounded-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' src={resturent1} alt="" />
                      </div>
                      <div className="col-lg-6">
                        <h3 className='serHead'>Restuarant</h3>
                        <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                        </p>
          
          
                        <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                        </p>
                      </div>
                    </div>
                
                    <div className="row justify-center align-items-center pt-5">
                      <div className="col-lg-6">
                        <h3 className='serHead'>Salad</h3>
                        <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                        </p>
          
          
                        <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                        </p>
                      </div>
          
                      <div className="col-lg-6">
                        <img className='img-fluid shadow-md rounded-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' src={resturent2} alt="" />
                      </div>
                    </div>

                    <div className="row justify-center align-items-center pt-5">
                      <div className="col-lg-6">
                        <img className='img-fluid shadow-md rounded-md  transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer' src={resturent3} alt="" />
                      </div>
                      <div className="col-lg-6">
                        <h3 className='serHead'>Stack </h3>
                        <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                        </p>
          
          
                        <p className='serDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit ac lectus integer ac morbi egestas nunc. Tempus, nisl, tellus cum euismod nisi molestie a. Nullam luctus vulputate urna, gravida aliquet non orci, sit sit. Feugiat ullamcorper arcu sed magna. 
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </section>


    <section>
      <div className="container">
        <ul className="nav nav-tabs justify-center" id="myTab" role="tablist">
  <li className="nav-item mx-0" role="presentation">
    <button class="nav-link active navTab " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Breakfast Foods</button>
  </li>
  <li className="nav-item mx-0" role="presentation">
    <button class="nav-link navTab" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Meat and Seafood</button>
  </li>
  <li className="nav-item mx-0" role="presentation">
    <button class="nav-link navTab" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Pasta and Rice</button>
  </li>

  <li className="nav-item mx-0" role="presentation">
    <button class="nav-link navTab" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Frozen" type="button" role="tab" aria-controls="contact" aria-selected="false">Frozen Foods</button>
  </li>

  <li className="nav-item mx-0" role="presentation">
    <button class="nav-link navTab" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Sauces" type="button" role="tab" aria-controls="contact" aria-selected="false">Sauces</button>
  </li>

  <li className="nav-item mx-0" role="presentation">
    <button class="nav-link navTab" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Oils" type="button" role="tab" aria-controls="contact" aria-selected="false">Oils</button>
  </li>

</ul>

<div className="tab-content py-5" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  <div className="row">
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem1} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Coffee.................  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem2} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Tea................. <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem3} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Brad.................  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem4} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>French toast........  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem5} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Yogurt .................  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem6} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Waffles ............... <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem7} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Pancakes............. <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem8} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>bagel............. <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>

  </div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

  <div className="row">
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem3} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Brad.................  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem4} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>French toast........  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem5} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Yogurt .................  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem6} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Waffles ............... <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>

  </div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
  <div className="row">
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem3} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Brad.................  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem4} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>French toast........  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem5} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Yogurt .................  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem6} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Waffles ............... <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>
  </div>
  <div className="tab-pane fade" id="Frozen" role="tabpanel" aria-labelledby="contact-tab">
  <div className="row">
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem3} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Brad.................  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem4} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>French toast........  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem5} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Yogurt .................  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem6} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Waffles ............... <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>
  </div>
  <div className="tab-pane fade" id="Sauces" role="tabpanel" aria-labelledby="contact-tab">
  <div className="row">
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem3} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Brad.................  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem4} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>French toast........  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem5} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Yogurt .................  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem6} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Waffles ............... <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>
  </div>
  <div className="tab-pane fade" id="Oils" role="tabpanel" aria-labelledby="contact-tab">
  <div className="row">
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem3} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Brad.................  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem4} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>French toast........  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem5} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Yogurt .................  <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  <div className="col-12 col-sm-6 col-lg-6">
    <div className='d-flex mt-3 bg-white rounded-md shadow-lg justify-content-center align-items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg'>
      <div>
        <img className='img-fluid p-2' src={resItem6} alt="image" />
      </div>
      <div className='p-4'>
        <p className='resItemHead'>Waffles ............... <span>Price: $20</span></p>
        <p className='resItemDami'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
          </div>
         </section>       
          
          
    </>
  )
}
