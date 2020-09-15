import React from 'react'
import {Link} from 'react-router-dom'
import Project from './Project'
import "../css/projects.css"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// project lists
const projects_list = [
    {
        name: "Realtime Chat Application",
        period: "Aug 2020",
        stack: ["React", "NodeJS", "SocketIO"],
        link: "https://github.com/tonzmy/ChitChat"
    },
    {
        name: "Sentiment Analysis on Amazon Review Dataset",
        period: "May 2020",
        stack: ["Python", "scikit-learn", "NumPy"],
        link: "#"
    },
    {
        name: "Investigation on Feature Reduction in Sentiment Analysis",
        period: "Apr 2020",
        stack: ["Python", "scikit-learn", "NumPy"],
        link: "#"
    },
    {
        name: "React/Redux Bubble Tea Website",
        period: "May 2020",
        stack: ["React/Redux", "NodeJS", "Python", "Spring Boot", "MongoDB", "RabbitMQ", "Webpack", "Docker Compose"],
        link: "https://github.com/tonzmy/node-spring-mongo"
    },
    {
        name: "Andorid Shopping Application",
        period: "Jan 2020 - Mar 2020",
        stack: ["Java", "Android Studio", "Firebase"],
        link: "https://github.com/tonzmy/market"
    }, 
    {
        name: "REST APIs with Yelp Dataset",
        period: "Apr 2020",
        stack: ["Java", "Python", "Spring Boot", "MySQL"],
        link: "https://github.com/llbllbllbllb/yelpChallenge"
    },
    {
        name: "Human Pose Estimation using Deep Neural Networks",
        period: "Dec 2019",
        stack: ["Python", "Colab"],
        link: "#"
    },
    {
        name: "Traffic Management System",
        period: "Sept 2019 - Dec 2019",
        stack: ["Python", "C++", "IPC"],
        link: "https://gitlab.uwaterloo.ca/ece650-1199"
    },
    {
        name: "Pattern Recognition using Machine Learning",
        period: "Sept 2018 - Apr 2019",
        stack: ["Python", "TensorFlow", "CNN", "scikit-learn", "NumPy"],
        link: "https://github.com/tonzmy/FYP"
    },
    {
        name: "Online Shopping Mall Website",
        period: "Feb 2018 - May 2018",
        stack: ["NodeJS", "Handlebars", "Bootstrap", "MySQL"],
        link: "https://github.com/tonzmy/TonyMall"
    }
]

const Projects = () => (
    <div>
        <div className="title">
            <Button href="#/projects" size="large">
                <Typography variant="h6" className="title">
                        Projects
                </Typography>
            </Button>
            <div className="line"></div>
        </div>
        <div className="projects-container">
        {
            projects_list.map((project, i) => 
                <div key={i}><Project {...project} /></div>
                
            )
        }
        </div>
    </div>
)


export default Projects