import axios from 'axios'

export const setLoading = () => {
    return {
        type: 'SET_LOADING'
    }
}

export const fetchRecipes = () => {
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

export const fetchUserRecipes = (id, token) => {

    return async (dispatch) => {
        dispatch(setLoading())
        try {
            const { data } = await axios.get(`https://gogos-recipes-backend.onrender.com/api/recipes/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log("user recipes=>", data)
            dispatch({
                type: 'FETCH_USER_RECIPES',
                payload: data.data
            })

        } catch (error) {
            console.log("fecth user error", error)
        }
    }
}