import React from 'react';

const AboutUS = () => {
    return (
        <div className='container-fluid commonBg ' id='about'>
            <h1 className='text-white text-center pt-3 fw-bold'>About<span className='text-info'>Us</span></h1>

            <div className="row mt-4 ">
                {/* Image Section */}
                <div className="col-md-6 mb-3">
                    <div className="card  w-100 h-50">
                        <img height='505px' src="https://cdn.pixabay.com/photo/2021/12/23/05/06/strength-6888635_1280.jpg" className="card-img-top " alt="Gym Image" />
                    </div>
                </div>
                

                {/* Text Section */}
                <div className="col-md-6 ">
                    <div className="card">
                        <div className="card-body ">
                            <h5 className="card-title text-center">About Us</h5>
                            <p className="card-text">
                                "Welcome to <span className='text-info'>Fastrack</span> fitness club, where fitness meets community.
                                Established with a passion for health and wellness, we strive to transform lives through tailored
                                fitness programs and a supportive environment."
                            </p>
                            {/* New Text Area */}
                            <div className="mt-2">
                                <h5 className="card-title">Our Mission</h5>
                                <p className="card-text">
                                    "At Fastrack Fitness Club, our mission is to inspire and empower individuals of all fitness levels to achieve their personal health goals.
                                    We offer a wide range of personalized training programs, and our expert staff is dedicated to providing top-notch support."
                                </p>
                                <div className="mt-2">
                                    <h5 className='card-title'>Services</h5>
                                    <p className='card-text'>
                                        1- Cardio sections<br />
                                        2- Weight training areas<br />
                                        3- Group fitness classes<br />
                                        4- Personal training sessions<br />
                                        5-Spa or relaxation services
                                       
                                    </p>
                                </div>
                            </div>
                            <a href="#" className="btn mt-3 btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUS;
