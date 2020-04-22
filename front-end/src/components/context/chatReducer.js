

export default (state, action) =>{
   // const { msg, user, room, history  } = action.payload
    switch (action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [action.payload.room]: [
                    ...state[action.payload.user.history ],
                    { user: action.payload.user
                        , msg: action.payload.msg }
                ]
            }
        default:
            return state
    }
}