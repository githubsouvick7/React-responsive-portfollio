import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="container" id="contact">
                <div className="back">
                    <NavLink to='/'>
                        <div className="set">
                            <i class="fa-solid fa-arrow-left"></i>
                        </div>
                    </NavLink>
                </div>
                <div className="section-title">
                    <h2>Contact</h2>
                </div>
                <div className="contact-wrapper">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                        <input type="phone number" className="form-control" id="phone" placeholder={+91123456789} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Message</label>
                        <textarea className="form-control" id="massege" rows={3} placeholder="Write here somethings....." defaultValue={""} />
                    </div>
                    <div className="button">
                        <button type="button" className="btn btn-submit" id="submit" onclick="message()">Submit</button>
                        <button type="button" className="btn btn-submit" id="reset">Reset</button>
                    </div>
                    <div className="messege">
                        <div className="success" id="success">Your Message Successfully Sent!</div>
                        <div className="danger" id="danger">Feilds Can't be Empty!</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact