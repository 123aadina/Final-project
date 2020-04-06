import React from 'react'

export const CTX = React.createContext()

const Store = () => {

    return (
        <CTX.Provider value={}>
            {props.children}

        </CTX.Provider>
    )
}

export default Store

