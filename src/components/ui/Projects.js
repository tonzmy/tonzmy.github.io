import React from 'react'
import {Link} from 'react-router-dom'

const Projects = () => (
    <div style={{height: "1500px"}}>
        <h1><Link to={'/projects'} replace>Projects</Link></h1>
    </div>
)


export default Projects