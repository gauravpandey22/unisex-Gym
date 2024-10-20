import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="container-fluid bg-info">

                {/* NAV START FROM HERER */}
                <nav className="navbar navbar-expand-lg fixed-top  shadow-lg">
                    <div className="container">
                        <a className="navbar-brand text-white" href="#">Uni<span className='text-danger fw-bold'>Sex</span>Fastr<span className='text-danger fw-bold'>ack</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse d-lg-flex align-items-center justify-content-end  text-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link text-white  active" href='#home' aria-current="page">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#about">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#contact">Contact Us</a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </nav>
                

            </div>

        </div>
    )
}

export default Navbar
