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
        case 'ADD_RECIPE':
            return {
                ...state,
                recipe: action.payload,
                loading: true
            }
        case 'ADD_RECIPE_SUCCESS':
            return {
                ...state,
                recipe: action.payload,
                loading: false
            }
        case 'ADD_RECIPE_ERROR':
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