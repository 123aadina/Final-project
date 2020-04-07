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

const sendChatAction = ((dispatch, socket, value)=> {
    socket.emit('chat message', value);

})

let socket;

const Store = props => {
   
if(!socket) {
    socket = io(':3000')
}
   
    const [allChats, dispatch] = React.useReducer(reducer, initialState)
    return (
        <CTX.Provider value={{allChats}}>
            {props.children}

        </CTX.Provider>
    )
}

export default Store

