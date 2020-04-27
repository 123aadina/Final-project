import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
//@material-ui/paper
import Paper from "@material-ui/core/Paper";
//@material-ui/Typography
import Typography from "@material-ui/core/Typography";
//@material-ui/styles
import { makeStyles } from "@material-ui/core/styles";
//@material-ui/ListItem/list/ListItemText
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
//@material-ui/Chip
import Chip from "@material-ui/core/Chip";
//@material-ui/Button
import Button from "@material-ui/core/Button";
//@material-ui/core/TextField
import TextField from "@material-ui/core/TextField";
//socket.io-client
import io from "socket.io-client";
import Footer from "../Layout/Footer";

const apiUrl = (process.env.REACT_APP_API_URL || 'http://localhost:3000')
const socket = io(apiUrl);



const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2),
  },
  flex: {
    display: "flex",
    alignItems: "center",
    
  },
  topicsWindow: {
    width: "30%",
    height: "300px",
    borderRight: "1px solid gray",
  },
  chatWindow: {
    width: "70%",
    height: "300px",
    //minHeight:'300px',
    padding: "20px",
    overflowY: "scroll"
  },
  chatBox: {
    width: "85%",
  },
  button: {
    width: "15%",
  },
}));

const Dashboard = (props) => {
  const { t, i18n } = useTranslation();
  let username;
  if (props.location && props.location.state) {
    username = props.location.state.username;
  }

  //local state
  let [rooms, setRooms] = useState([
    {
      name: "Public",
      history: [
        { msg: "Hello Irina", user: "Rob" },
        { msg: "Hey Rob", user: "Irina" },
      ],
      users: ["Rob", "Irina"],
    },
    {
      name: "Issues",
      history: [{ msg: "Hello to issue channel", user: "Admin" }],
      users: ["Admin"],
    },
  ]);

  const [activeRoom, changeActiveRoom] = useState();
  const [error, setError] = useState("");
  const [textValue, changeTextValue] = useState("");
  const [userValue, changeUserValue] = useState(username); // must be comment. instead context userName
  const classes = useStyles();

  const switchRoom = (room) => {
    console.log(room, "switchroom");
    changeActiveRoom(room);
    socket.emit("joinRoom", { username: userValue, room: room.name });
  };

  // this useEffect updates the room list
  // normal users will receive "themselves"
  // admin users will receive a list of all users
  useEffect(() => {
    socket.on("rooms", (users) => {
      console.log(users);
      let newRooms = users.map((user) => {
        user.history = [];
        return user;
      });
      console.log(newRooms);
      setRooms(newRooms);
    });
    socket.emit("rooms", userValue);
  }, []);
  // listen for incoming messages
  useEffect(() => {
    console.log("Rooms reset: ", rooms);
    // redeclare the message listeners each time the rooms were updated
    if (socket.hasListeners("message")) {
      socket.removeEventListener("message");
    }
    socket.on("message", ({ username, msg }) => {
      console.log("Received message: ", username, msg);
      addMessageToHistory({ msg, user: username });
    });
  }, [rooms, activeRoom]);

  const sendChatAction = (e) => {
    e.preventDefault();
    if (activeRoom) {
      socket.emit("message", {
        room: activeRoom.name,
        msg: textValue,
        username: userValue,
       
      });
   changeTextValue('')
    } else {
      console.log("[ERROR] Please choose a room before sending a message!");
    }
  };

  const addMessageToHistory = ({ msg, user }) => {
    let room = activeRoom.name;
    console.log("Attaching message to room: ", room);
    console.log(rooms, "rooms");
    console.log(activeRoom, "activeRoom");


    // update chat history by creating a copy of state, updating it & re-assign it
    let roomsCopy = [...rooms];

    // find room
    let roomFound = roomsCopy.find((currentRoom) => currentRoom.name == room);

    // add message to chat history array of given room
    if (roomFound) {
      roomFound.history.push({ msg, user, room });
      setRooms(roomsCopy);
      //setRooms(roomsCopy);
    }
  };

  //parent.scrollTop = parent.scrollHeight` (in your case parent is "chatWindow
  //chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h4">
          Chat App
        </Typography>
        <Typography variant="h5" component="h5">
          {activeRoom && activeRoom.name}
        </Typography>
        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {rooms.map((room) => (
                <ListItem
                  onClick={(e) => switchRoom(room)}
                  key={room.name}
                  button
                >
                  <ListItemText primary={room.name} />
                </ListItem>
              ))}
            </List>
          </div>
          {/*according to the topic the chat changed*/}
          <div className={classes.chatWindow}>
            {activeRoom &&
              activeRoom.history.map((chat, i) => (
                <div className={classes.flex} key={i}>
                  <Chip label={chat.user} className={classes.chip} />
                  <Typography variant="body1" gutterBottom>
                    {chat.msg}
                  </Typography>
                </div>
              ))}
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
          id='chatText'
            label="send a chat"
            className={classes.chatBox}
            value={textValue}
            onChange={(e) => changeTextValue(e.target.value)}
          />
          {/*<TextField
            label="user"
            className={classes.chatBox}
            value={userValue}
            onChange={(e) => changeUserValue(e.target.value)}
          />*/}
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              sendChatAction(e);
            }}
          >
            send
          </Button>
        </div>
      </Paper>
      <Footer />
    </div>
  );
};

export default Dashboard;
