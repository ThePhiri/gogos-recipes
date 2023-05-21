const initialState = {
    userRecipes: [],
    loading: false
}

export default function userRecipesReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_USER_RECIPES':
            return {
                ...state,
                userRecipes: action.payload,
                loading: false
            }
        case 'FETCH_USER_RECIPE_SUCCESS':
            return {
                ...state,
                userRecipes: action.payload,
                loading: false
            }
        case 'FETCH_USER_RECIPE_ERROR':
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