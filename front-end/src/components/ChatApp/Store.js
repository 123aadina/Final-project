import React from 'react'
import io from 'socket.io-client';

export const CTX = React.createContext()

const initialState = {
    generol: [
        { from: 'hamida', msg: 'hello' },
        { from: 'Christophe', msg: 'hello' },
        { from: 'Maria', msg: 'hello' }
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


let socket;

//dispatch just for client liestner 
const sendChatAction = ((socket, value)=> {
    socket.emit('chat message', value);

})

const Store = props => {
   
if(!socket) {
    socket = io(':3000')
}

const user = 'hamid' + Math.random(100).toFixed(2)
   
    const [allChats, dispatch] = React.useReducer(reducer, initialState)
    return (
        <CTX.Provider value={{allChats, sendChatAction}}>
            {props.children}

        </CTX.Provider>
    )
}

export default Store

