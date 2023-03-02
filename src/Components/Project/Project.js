import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Data } from './ProjectData'
import ProjectList from './ProjectList'
import './Project.css'

const Project = () => {
    return (
        <>
            <Navbar />
            <div className="container allproject">
                {
                    Data.map((item) => {

                        return (
                            <>
                                <ProjectList gitLink={item.gitLink} name={item.Name} hostedLink={item.UrlLink} />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Project
