import React from 'react'
import io from 'socket.io-client';

export const CTX = React.createContext()

//inialstate
const initialState = {
    generol: [
        { from: 'hamida', msg: 'hello' },

    ],
    topic: [
        { from: 'adina', msg: 'hello' },
        { from: 'Lis', msg: 'hello' },
        { from: 'Mojghan', msg: 'hello' }
    ]
}

function reducer(state, action) {
    const { msg, from, topic } = action.payload
    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    { from, msg }
                ]
            }
        default:
            return state
    }
}


const socket = io(':3000')

//dispatch just for client liestner 
const sendChatAction = ((value) => {
    socket.emit('chat message', value);

})

const Store = props => {
    const [allChats, dispatch] = React.useReducer(reducer, initialState)

    if (!socket) {
        socket = io(':3000')
        socket.on('chat message', function (msg) {
            dispatch({ type: 'RECEIVE_MESSAGE', dispatch: msg })
        });
    }

    const user = 'hamid' + Math.random(100).toFixed(2)


    return (
        
        <CTX.Provider value={{ allChats, sendChatAction, user }}>
            {props.children}

        </CTX.Provider>
    )
}

export default Store

/*
var socket = io.connect('http://localhost:3000');
  let room = ""
  let username = ""
  function joinRoom(e) {
    e.preventDefault()
    // fetch username & room
    room = document.querySelector("#room").value
    username = document.querySelector("#username").value
    // join the room
    socket.emit("joinRoom", { room, username })
  }
  function sendMsg(e) {
    e.preventDefault();
    // console.log(socket.id)
    let username = document.querySelector("#username").value
    let room = document.querySelector("#room").value
    let msg = document.querySelector("#msg").value
    // send message
    socket.emit("message", { room, msg })
    return false
  }
  // THIS WILL RECEIVE just (!) MESSAGES
  // sent directly to my socket
  socket.on("message", (msg) => {
    console.log("Received: ", msg)
  }) */

