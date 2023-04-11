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