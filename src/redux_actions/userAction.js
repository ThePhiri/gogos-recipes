import axios from "axios";

export const setLoading = () => {
    return {
        type: "SET_LOADING",
    };
}

export const SignUp = () => {
    return async (dispatch) => {
        dispatch(setLoading());
        try {
            const { data } = await axios.post(`https://gogos-recipes-backend.onrender.com/api/users/signup`);
            dispatch({
                type: "SIGN_UP",
                payload: data.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}