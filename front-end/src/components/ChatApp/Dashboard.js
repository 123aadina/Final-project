import React from 'react'
//@material-ui/paper
import Paper from '@material-ui/core/Paper';
//@material-ui/Typography
import Typography from '@material-ui/core/Typography';
//@material-ui/styles
import { makeStyles } from '@material-ui/core/styles';
//@material-ui/ListItem/list/ListItemText
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//@material-ui/Chip
import Chip from '@material-ui/core/Chip';
//@material-ui/Button
import Button from '@material-ui/core/Button';
//@material-ui/core/TextField
import TextField from '@material-ui/core/TextField';
//CTX
import { CTX } from "./Store";



const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3, 2)
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid red'
    },
    chatWindow: {
        width: '70%',
        height: '300px',
        padding: '20px'
    },
    chatBox: {
        width: '85%'
    },
    button: {
        width: '15%'
    },
}));

const Dashboard = () => {
    //CTX store
    const { allChats, sendChatAction, user } = React.useContext(CTX)
    const topics = Object.keys(allChats)

    //local state
    const [activeTopic, changeActiveTopic] = React.useState(topics[0])
    const [textValue, changeTextValue] = React.useState('')
    const classes = useStyles()

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant='h4' component='h4'>
                    Chat App
                </Typography>
                <Typography variant='h5' component='h5'>
                    {activeTopic}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {
                                topics.map(topic => (
                                    <ListItem onClick={e => changeActiveTopic(e.target.innerText)} key={topic} button>
                                        <ListItemText primary={topic} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    {/*according to the topic the chat changed*/}
                    <div className={classes.chatWindow}>
                        {
                            allChats[activeTopic].map((chat, i) => (
                                <div className={classes.flex} key={i}>
                                    <Chip label={chat.from} className={classes.chip} />
                                    <Typography variant="body1" gutterBottom>
                                        {chat.msg}
                                    </Typography>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={classes.flex}>
                    <TextField
                        label="send a chat"
                        className={classes.chatBox}
                        value={textValue}
                        onChange={e => changeTextValue(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => { sendChatAction({ from: user, msg: textValue, topic: activeTopic }) }}
                    >
                        send
                     </Button>
                </div>
            </Paper>
        </div>
    )
}

export default Dashboard
