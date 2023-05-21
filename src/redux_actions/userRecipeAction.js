import axios from 'axios'

export const setLoading = () => {
    return {
        type: 'SET_LOADING'
    }
}

export const fetchUserRecipes = (id, token) => {
    // console.log("id is ", id)
    // console.log("token is ", token)

    return async (dispatch) => {
        dispatch({ type: "FETCH_USER_RECIPES" }, setLoading())

        try {

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://gogos-recipes-backend.onrender.com/api/recipes/user/${id}`,
                headers: {
                    'token': `${token}`,
                    'Content-Type': 'application/json'
                }
            };

            axios.request(config)
                .then((response) => {
                    dispatch({
                        type: "FETCH_USER_RECIPE_SUCCESS",
                        payload: response.data.data,

                    });





                })
                .catch((error) => {
                    dispatch({
                        type: "FETCH_USER_RECIPE_ERROR",
                        payload: error.message,
                    });
                    console.log("user recipe error", error);
                });



        } catch (error) {
            console.log(error);
        }
    }
}

