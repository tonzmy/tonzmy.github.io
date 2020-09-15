import React from 'react'
import {Link} from 'react-router-dom'
import '../css/header.css'
import Button from '@material-ui/core/Button';

const Header = () => (
    <div className="header-container">
        <Button href="#/home" size="large">Home</Button>
        <Button href="#/education" size="large">Education</Button>
        <Button href="#/skills" size="large">Skills</Button>
        <Button href="#/projects" size="large">Projects</Button>
        <Button href="#/connect" size="large">Connect</Button>
    </div>
)


export default Header