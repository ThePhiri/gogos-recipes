const initialState = {
    recipes: [],
    loading: false
}

export default function recipesReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_RECIPES':
            return {
                ...state,
                recipes: action.payload,
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