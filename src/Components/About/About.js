import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.css'

const About = () => {
    return (
        <>
            <Navbar />
            <div className="container" id="about-us">
                <div className="row">
                    <div className="col-md-6 left-col">
                        <div className="image2">
                            <img src='/image.webp' alt="image" />
                        </div>
                    </div>
                    <div className="col-md-6 right-col">
                        <p style={{ fontSize: '20px', textAlign: 'justify' }}>
                            I intend to shape my career with a challenging and rewarding position in an esteemed
                            organization,
                            which will enable me to
                            utilize my technical skills &amp; abilities to help me evolve in my professional and personal life.
                            I
                            declare that all the furnished information above is free from any mistakes to the best of my
                            knowledge and belief.
                        </p>
                        <div className="contact-one"><a className="resume" style={{ width: '200px' }} target="_blank" href="https://drive.google.com/file/d/1ZIoJOl14v7UffBtjgpgUfvT00Rqm0nFk/view">Download
                            Resume</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About