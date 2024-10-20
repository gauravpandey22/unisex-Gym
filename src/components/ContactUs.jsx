import React from 'react'
import conimg from '../assets/contact.jpg'

const ContactUs = () => {
  return (
    <div className='container-fluid commonBg' id='contact'>
      <h1 className='text-white text-center pt-3 fw-bold'>Contact<span className='text-info'>Us</span></h1>
        <div className='bg-img mt-3'>
            <img height='500px' src={conimg} alt="Profile picture" className='card-img'></img>
            <div className='info' style={{ height: "400px", top: "10%" }}>

                  <div className="row mb-3">

                    <div className="col-md-6  md-4 p-lg-4">
                      <h3>Meet <span className='text-info'>Us !</span></h3>
                      
                      <div className="d-flex gap-3 mt-5 mb-3">
                        <box-icon name='phone-call' animation='burst' color='#fff'></box-icon>
                        <p>9026083782</p>

                      </div>
                      
                        {/* email section */}
                      <div className="d-flex gap-3  mb-3">
                          <box-icon name='envelope' animation='tada' color='#fdfffa' ></box-icon>
                          <p className='text-lowercase'>gp9026083782<span className='text-info'>@gmail.com</span></p>
                      </div>

                        {/* location */}
                        
                        <div className="d-flex gap-3 mb-3">
                        <box-icon name='current-location' animation='flashing' color='#f9f9f4' ></box-icon>
                          <p>1103-K1 Eco Village 1, Bishrakh, Greater Noida, <span className='text-info'>201318</span> </p>
                        </div>
                    </div>

                    <div className="col-md-6 p-4">

                      <h3>Pitch <span className='text-info'>Us</span></h3>
                      <p className='text-secondary'>Please filled the Contact form by clicking the below contact button we will reach out to you as soon as possible Thank you!</p>

                      <div className='mb-3'>
                        <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#contactModal" data-bs-whatever="@mdo">Contact</button>
                      </div>
                    </div>


                  </div>



            </div>

         
          </div>

    </div>
  )
}

export default ContactUs
