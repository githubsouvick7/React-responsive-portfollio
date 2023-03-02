import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Home.css'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container home">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-md-20">
                            <div className="feature-box">
                                <h1>Hello, <br /> I am <span className="title-name">Souvick Chakraborty</span>
                                    <br /> Frontend Developer
                                </h1>
                                <div className="small">
                                    <a href="tel:8617565583" className="hello">
                                        <i className="fa fa-phone"></i>
                                    </a>

                                    <a href="mailto:hellosouvickk@gmail.com?subject=Hey&body=Hi%20There%0D%0A%0D%0AYou%20I%20created%20your%20email.%0D%0ACongrats!%20"
                                        className="hello">
                                        <i className="fa fa-envelope"></i>
                                    </a>

                                    <a href="https://wa.me/8617565583" className="hello">
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                </div>
                                <NavLink to='/contact'>
                                    <div className="contact-one"><a className="contact" href="#contact">Contact me</a></div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 right-col">
                        <div className="image">
                            <img src="/image.avif" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home