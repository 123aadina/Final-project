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
        padding: theme.spacing(3, 2),
    },
    flex: {
        display: 'flex'
    },
    topicWindow: {
        width:'30%',
        height:'300px'

    },
    chatWindow: {
        width:'70%',
        height:'300px'

    },
    chatBox: {
        width:'85%'

    },
    button: {
        width:'15%'

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
                <div className={classes.flex}>
                  <div className={classes.topicsWindow}>

                  </div>
                  <div className={classes.chatWindow}>

                  </div>

                </div>
                <div className={classes.flex}>
                    
                </div>

            </Paper>
 
        </div>
    )
}

export default Dashboard
