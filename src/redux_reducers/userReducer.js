const initialState = {
    userID: ""
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                userID: action.payload
            }
        default:
            return state
    }
}