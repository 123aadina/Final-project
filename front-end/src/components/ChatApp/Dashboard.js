import React from 'react'
//@material-ui/paper
import Paper from '@material-ui/core/Paper';
//@material-ui/Typography
import Typography from '@material-ui/core/Typography';
//@material-ui/styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margine:'50px',
      
      
        margin: theme.spacing(1),
       
    
    },
  }));

const Dashboard = () => {

    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant='h4' component='h4'>
                    Chat App
                </Typography>
                <Typography variant='h5' component='h5'>
                  topic
                </Typography>
            </Paper>
 
        </div>
    )
}

export default Dashboard
