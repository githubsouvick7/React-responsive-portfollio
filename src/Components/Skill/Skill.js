import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Skill.css'

const Skill = () => {
    return (
        <>
            <Navbar />
            <div className="container" id="skills">
                <div className="row">
                    <div className="col-md-6 skills-left-col" id="class">
                        <h2>Proffesional Skills</h2>
                        <p>I declare that all the furnished information above is free from any mistakes to the best of my
                            knowledge and belief!!</p>
                        <div className="programming">
                            <div className="card skill-card">
                                <div className="card-body skill-card-body">
                                    <div className="skill-name">
                                        <i className="fa-regular fa-c" />
                                        <span className="s-name">C-Language</span>
                                        <span className="s-percent" />
                                    </div>
                                </div>
                            </div>
                            <div className="card skill-card">
                                <div className="card-body skill-card-body">
                                    <div className="skill-name">
                                        <i className="fab fa-java" />
                                        <span className="s-name">Java</span>
                                        <span className="s-percent" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="programming2">
                            <div className="card skill-card">
                                <div className="card-body skill-card-body">
                                    <div className="skill-name">
                                        <i className="fa-brands fa-html5" />
                                        <span className="s-name">HTML</span>
                                        <span className="s-percent" />
                                    </div>
                                </div>
                            </div>
                            <div className="card skill-card">
                                <div className="card-body skill-card-body">
                                    <div className="skill-name">
                                        <i className="fa-brands fa-css3-alt" />
                                        <span className="s-name">CSS</span>
                                        <span className="s-percent" />
                                    </div>
                                </div>
                            </div>
                            <div className="card skill-card">
                                <div className="card-body skill-card-body">
                                    <div className="skill-name">
                                        <i className="fa-brands fa-js" />
                                        <span className="s-name">JavaScript</span>
                                        <span className="s-percent" />
                                    </div>
                                </div>
                            </div>
                            <div className="card skill-card">
                                <div className="card-body skill-card-body">
                                    <div className="skill-name">
                                        <i className="fa-brands fa-react" />
                                        <span className="s-name">React js</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card skill-card">
                                <div className="card-body skill-card-body">
                                    <div className="skill-name">
                                        <i class="fa-brands fa-bootstrap"></i>
                                        <span className="s-name">Bootstrap</span>
                                        <span className="s-percent" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 skills-right-col" id="class">
                        <img src="https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966" className="right-img" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Skill