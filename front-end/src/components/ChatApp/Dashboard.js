import React, { useState, useEffect } from 'react'
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
//socket.io-client 
import io from 'socket.io-client';

const socket = io(':3000')

//const user = 'hamida' + Math.random(100).toFixed(2)
//const user = 'christophe'



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


    //local state
    let [rooms, setRooms] = useState([
        {
            name: 'Public',
            history: [{ msg: 'Hello Irina', user: 'Rob' }, { msg: 'Hey Rob', user: 'Irina' }],
            users: ['Rob', 'Irina']
        },
        {
            name: 'Issues',
            history: [{ msg: 'Hello to issue channel', user: 'Admin' }],
            users: ['Admin']
        }
    ]);

    
    const [activeRoom, changeActiveRoom] = useState()
    const [error, setError] = useState('');
    const [textValue, changeTextValue] = useState('')
    const [userValue, changeUserValue] = useState('Rob')
    const classes = useStyles()


    const switchRoom = room => {
        console.log(room, 'switchroom')
        changeActiveRoom(room)
        socket.emit('joinRoom', { username: userValue, room: room.name })
    }

    useEffect(() => {
        console.log('useEffect called')
        socket.on("message", ({ username, msg }) =>{
            addMessageToHistory({msg:msg, user:username })
            console.log(username, msg)
            //console.log(rooms ,'rooms')   
        })
        socket.on('rooms', users => {
            console.log(users)
            let newRooms = users.map(user => {
                user.history = []
                return user
            })
            console.log(newRooms)
            setRooms(newRooms)
        })
        socket.emit('rooms', userValue)
    }, [])


    const sendChatAction = (e) => {
        e.preventDefault()
        socket.emit("message", { room:activeRoom.name, msg: textValue , username:userValue}) 
    }

    const addMessageToHistory = ({ msg, user }) => {
        let room = activeRoom.name
        console.log('Attaching message to room: ', room);
        console.log(rooms, 'rooms')
        console.log(activeRoom ,'activeRoom')
    
        // update chat history by creating a copy of state, updating it & re-assign it
        let roomsCopy = [ ...rooms ];
    
        // find room
        let roomFound = roomsCopy.find((currentRoom) => currentRoom.name == room);
    
        // add message to chat history array of given room
        if (roomFound) {
          roomFound.history.push({ msg, user, room });
          setRooms(roomsCopy);
        }
      };

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant='h4' component='h4'>
                    Chat App
                </Typography>
                <Typography variant='h5' component='h5'>
                {activeRoom && activeRoom.name }
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>
                        <List>
                            {
                                rooms.map(room => (
                                    <ListItem onClick={e => switchRoom(room)} key={room.name} button>
                                        <ListItemText primary={room.name} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>
                    {/*according to the topic the chat changed*/}
                    <div className={classes.chatWindow}>
                        {
                            activeRoom && activeRoom.history.map((chat, i) => (
                                <div className={classes.flex} key={i}>
                                    <Chip label={chat.user} className={classes.chip} />
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
                    <TextField
                        label="user"
                        className={classes.chatBox}
                        value={userValue}
                        onChange={e => changeUserValue(e.target.value)}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                    onClick={(e) => { sendChatAction(e) }}
                    >
                        send
                     </Button>
                </div>
            </Paper>
        </div>
    )
}

export default Dashboard


//CTX store
    //const { allChats, sendChatAction, user } = React.useContext(CTX)
    //const rooms = Object.keys(allChats)