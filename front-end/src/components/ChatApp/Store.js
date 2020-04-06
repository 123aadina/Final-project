import React from 'react'

export const CTX = React.createContext()

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

const Store = props => {
    const reducrHook = React.useReducer(reducer, initialState)
    return (
        <CTX.Provider value={}>
            {props.children}

        </CTX.Provider>
    )
}

export default Store

