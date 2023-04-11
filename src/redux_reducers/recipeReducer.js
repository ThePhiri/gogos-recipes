const initialState = {
    recipe: {},
    loading: false
}

export default function recipeReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_RECIPE':
            return {
                ...state,
                recipe: action.payload,
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