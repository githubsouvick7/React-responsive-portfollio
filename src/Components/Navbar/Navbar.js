import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo">

                </div>
                <div className="navsection">
                    <div>
                        <Link to='/'>
                            <p>Home</p>
                        </Link>
                    </div>
                    <div>
                        <NavLink to='/about'>
                            <p>About</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/skill'>
                            <p>Skill</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/project'>
                            <p>Project</p>
                        </NavLink>
                    </div>
                </div>
                <div className="menu">

                </div>
            </div>
        </>
    )
}

export default Navbar