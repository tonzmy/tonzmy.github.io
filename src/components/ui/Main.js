import React, {useEffect} from 'react';
import Second from './Second';
import {Link, useLocation} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education';
import Connect from './Connect'
import "../css/main.css"

const Main = () => {

    const location = useLocation()

    useEffect(() => {
        let currentPath = location.pathname.substring(1);
        // console.log("current path", currentPath)
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
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
            <div id="connect"><Connect /></div>
            
            {/* <div>
                <h1>THis is react app</h1>
                <Link to={'/second'} replace>second</Link>
                <div style={{height: "1500px"}}>
                    
                </div>
            </div>
            <div className="second" ref={El}>
                {<Second />}
            </div> */}
        </div>
    )
}
    

export default Main;