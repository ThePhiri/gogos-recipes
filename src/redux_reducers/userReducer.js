const initialState = {
    userID: "",
    loading: false
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                userID: action.payload,
                loading: true
            }
        case 'SET_USER_SUCCESS':
            return {
                ...state,
                userID: action.payload,
                loading: false
            }
        case 'SET_USER_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }
}