import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      minHeight: 230,
      position: "relative",
    },
    media: {
      height: 190,
    },
    action: {
        position: "absolute",
        bottom: 0
    }
  });
  

const Project = ({name, period, stack, link}) => {
    const classes = useStyles();
    return (
        <div className="project-container">
        <Card className={classes.root}>
            <CardActionArea className={classes.media}>
                <CardMedia
                 image= "" title="Contemplative Reptile"/>
                <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {period}
                </Typography>
                <br />
                <Typography variant="body1" component="p">
                    Tech Stacks: 
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {stack.map((s, i) => <span key={i}>{s + "\xa0\xa0"}</span>)}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.action}>
                <Button size="small" color="primary" href={link}>
                learn more
                </Button>
            </CardActions>
            </Card>
            
        </div>
    )
}


export default Project;