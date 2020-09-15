import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { mdiLinkedin } from '@mdi/js';
import { mdiGithub } from '@mdi/js';
import Icon from '@mdi/react'
import "../css/connect.css"

const linkedin_link = "https://www.linkedin.com/in/zhiming-lin";
const github_link = "https://github.com/tonzmy";

const Connect = () => (
    <div className="connect-container">
        <div className="title">
            <Button href="#/connect" size="large">
                <Typography variant="h6" className="title">
                        Connect
                </Typography>
                <div className="line"></div>
            </Button>
        </div> 
        <div className="contact-icon-group">
            <div>
                <a href={linkedin_link}>
                    <Icon path={mdiLinkedin} size={3} color="#3274c0" />
                </a>
            </div>
            <div>
                <a href={github_link}>
                    <Icon path={mdiGithub} size={3} color="black"/>
                </a>
                
            </div>
        </div>
    </div>
    

)


export default Connect


