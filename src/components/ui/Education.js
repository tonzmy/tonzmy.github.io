import React from 'react'
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../css/education.css"

const Education = () => (
    <div className="education-container" style={{height: "1500px"}}>
        <h1><Link to={'/education'} replace>Education</Link></h1>
        <div className="education-card">
            <Card >
                <CardContent>
                    <Typography variant="h5" component="h2">
                    University of Waterloo
                    </Typography>
                    <Typography color="textSecondary" gutterBottoms>
                    Master of Engineer in Electrical and Computer Engineering
                    </Typography>
                    <br />
                    <Typography color="textSecondary">
                    Sept 2019 - Present
                    </Typography>
                </CardContent>
            </Card>
            <br />
            <Card >
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Macao Polytechnic Institute
                    </Typography>
                    <Typography color="textSecondary" gutterBottoms>
                    Bachelor of Science in Computing
                    </Typography>
                    <br />
                    <Typography color="textSecondary">
                    Aug 2015 - June 2019
                    </Typography>
                </CardContent>
            </Card>
        </div>
        
    </div>
)


export default Education