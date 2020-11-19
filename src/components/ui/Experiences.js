import React from 'react'
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import "../css/experiences.css"

const Experiences = () => (
    <div className="experiences-container">
    <div  className="title">
        <Button href="#/experiences" size="large">
                <Typography variant="h6">
                    Experiences
                </Typography>
        </Button>
        <div className="line"></div>
        </div>
        <div className="experiences-card">
            <Card >
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Full Stack Developer Intern at EduShare
                    </Typography>
                    <Typography color="textSecondary">
                    • Implemented component-based webpages such as landing page, about-us page using React based on UI design. <br/>
                    • Configured and deployed sites onto edushare.ca using Netlify and maintained site git repository.<br/>
                    • Integrated email marketing with webpages to enable email subscription using HubSpot and ActiveCampaign.
                    </Typography>
                    <br />
                    <Typography color="textSecondary">
                    Sept 2020 - Present
                    </Typography>
                </CardContent>
            </Card>
            <br />
            <br />
            <Card >
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Software Development Engineer Intern at NetEase, Inc. 
                    </Typography>
                    <Typography color="textSecondary">
                    • Tested and built over 100 web crawlers using Regex to fetch latest news automatically from partners for NetEase News. <br/>
                    • Maintained more than 50 web crawlers to keep providing services for over 400 million users.
                    </Typography>
                    <br />
                    <Typography color="textSecondary">
                    Jul 2017 - Aug 2018
                    </Typography>
                </CardContent>
            </Card>
        </div>
    </div>
)


export default Experiences;