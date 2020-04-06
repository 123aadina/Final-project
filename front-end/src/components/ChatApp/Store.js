import React from 'react'

export const CTX = React.createContext()

const Store = props => {
    const reducrHook = React.useReducer(reducer, initialState)
    return (
        <CTX.Provider value={}>
            {props.children}

        </CTX.Provider>
    )
}

export default Store

