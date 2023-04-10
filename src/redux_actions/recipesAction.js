import axios from 'axios'

export const setLoading = () => {
    return {
        type: 'SET_LOADING'
    }
}

export const fetchRecipes = (query) => {
    return async (dispatch) => {
        dispatch(setLoading())
        try {
            const { data } = await axios.get(`https://gogos-recipes-backend.onrender.com/api/recipes`)
            dispatch({
                type: 'FETCH_RECIPES',
                payload: data.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}