import axios from "axios";

export const setLoading = () => {
    return {
        type: "SET_LOADING",
    };
}

export const fetchRecipe = (id) => {
    return async (dispatch) => {
        dispatch(setLoading());
        try {
            const { data } = await axios.get(`https://gogos-recipes-backend.onrender.com/api/recipes/${id}`);
            dispatch({
                type: "FETCH_RECIPE",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export const addRecipe = (recipeData, navigate, token) => {
    return async (dispatch) => {
        dispatch({ type: "ADD_RECIPE" }, setLoading());
        try {
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://gogos-recipes-backend.onrender.com/api/recipes',
                headers: {
                    'token': `${token}`,
                    'Content-Type': 'application/json'
                },
                data: recipeData
            };

            axios.request(config)
                .then((response) => {
                    dispatch({
                        type: "ADD_RECIPE_SUCCESS",
                        payload: response.data.data,
                    });
                    // console.log("id is ", response)
                    //redirect to profile page
                    navigate("/profile")

                })
                .catch((error) => {
                    dispatch({
                        type: "ADD_RECIPE_ERROR",
                        payload: error.message,
                    });
                    console.log("user error", error);
                });

        } catch (error) {
            console.log(error);
        }
    }
}