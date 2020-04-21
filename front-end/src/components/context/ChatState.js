import React,{useReducer} from 'react'
import ChatContext from './chatContext';
import ChatReducer from './ChatReducer';




const ChatState = props => {
    //const [username, setUsername] = useState()
    const initialState = {
        generol: [
            { from: 'hamida', msg: 'hello' },
            { from: 'Christophe', msg: 'hello' },
            { from: 'Maria', msg: 'hello' }
        ],
        topic: [
            { from: 'hamida', msg: 'hello' },
            { from: 'Christophe', msg: 'hello' },
            { from: 'Maria', msg: 'hello' }
        ]
    }


    const [state, dispatch] = useReducer(ChatReducer, initialState)
    return (
        <ChatContext.Provider value={}>
            {props.children}

        </ChatContext.Provider>
    )
}

export default ChatState