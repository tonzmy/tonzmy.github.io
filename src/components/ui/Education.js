import React from 'react'
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../css/education.css"

const Education = () => (
    <div className="education-container">
    <div  className="title">
        <Button href="#/education" size="large">
                <Typography variant="h6">
                    Education
                </Typography>
        </Button>
        <div className="line"></div>
        </div>
        <div className="education-card">
            <Card >
                <CardContent>
                    <Typography variant="h5" component="h2">
                    University of Waterloo
                    </Typography>
                    <Typography color="textSecondary">
                    Master of Engineer in Electrical and Computer Engineering
                    </Typography>
                    <br />
                    <Typography color="textSecondary">
                    Sept. 2019 - Dec. 2020
                    </Typography>
                </CardContent>
            </Card>
            <br />
            <br />
            <Card >
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Macao Polytechnic Institute
                    </Typography>
                    <Typography color="textSecondary">
                    Bachelor of Science in Computing
                    </Typography>
                    <br />
                    <Typography color="textSecondary">
                    Aug. 2015 - Jun. 2019
                    </Typography>
                </CardContent>
            </Card>
        </div>
    </div>
)


export default Education