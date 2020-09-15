import React from 'react'
import {Link} from 'react-router-dom'
import '../css/header.css'
import Button from '@material-ui/core/Button';

const Header = () => (
    <div className="header-container" style={{height: "150px"}}>
        <h1><Link to={'/header'} replace>Header</Link></h1>
        <Button href="#/home">Home</Button>
        <Button href="#/education">Education</Button>
        <Button href="#/skills">Skills</Button>
        <Button href="#/projects">Projects</Button>
    </div>
)


export default Header