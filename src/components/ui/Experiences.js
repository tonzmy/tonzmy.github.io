import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
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
                    <Typography color="textSecondary" gutterBottoms>
                    Building webpages using React <br/>
                    Collaboratively building online teaching tools
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
                    <Typography color="textSecondary" gutterBottoms>
                    Built over 100 web crawlers to fetch latest news for NetEase News <br/>
                    Tested and maintained 50 web crawlers
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