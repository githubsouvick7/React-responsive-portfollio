import React from 'react'
import './ProjectList.css'

const ProjectList = (props) => {
    return (
        <>
            <div className="container content">
                <div className="img">

                </div>
                <h4>{props.name}</h4>
                <div className="link">
                    <button className='hostLink btn btn-primary'>
                        <a href={props.hostedLink} target="_blank" style={{ color: 'white', textDecoration: "none" }}>Hosted Link</a>
                    </button>
                    <button className='gitLink btn btn-primary'>
                        <a href={props.gitLink} target="_blank" style={{ color: 'white', textDecoration: "none" }}>Github Link</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProjectList