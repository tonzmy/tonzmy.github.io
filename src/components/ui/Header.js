import React from 'react'
import '../css/header.css'
import Button from '@material-ui/core/Button';

const Header = ({changeView}) => (
    <div className="header-container">
        <Button href="#/home" size="large" onClick={() =>{changeView('home')}}>Home</Button>
        <Button href="#/education" size="large" onClick={() =>{changeView('education')}}>Education</Button>
        <Button href="#/experiences" size="large" onClick={() =>{changeView('experiences')}}>Work Experience</Button>
        <Button href="#/skills" size="large" onClick={() =>{changeView('skills')}}>Skills</Button>
        <Button href="#/projects" size="large" onClick={() =>{changeView('projects')}}>Projects</Button>
        <Button href="#/connect" size="large" onClick={() =>{changeView('connect')}}>Connect</Button>
    </div>
)


export default Header