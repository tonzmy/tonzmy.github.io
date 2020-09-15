import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education';
import Experiences from './Experiences'
import Connect from './Connect'
import "../css/main.css"

const Main = () => {

    const location = useLocation()

    useEffect(() => {
        // get current path
        let currentPath = location.pathname.substring(1);
        // console.log("current path", currentPath)
        // find the div same name 
        const element = document.getElementById(`${currentPath}`);
        // console.log(element)
        if (element !== null && element !== undefined) {
            // console.log(element);
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    })

    return (    
        <div className="main-container">
            <div id="header"><Header /></div>
            <div id="home"><Home /></div>
            <div id="education"><Education /></div>
            <div id="experiences"><Experiences /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
            <div id="connect"><Connect /></div>
        </div>
    )
}
    

export default Main;