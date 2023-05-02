import axios from "axios";


export const setLoading = () => {
    return {
        type: "SET_LOADING",
    };
}

export const SignUp = (userData, navigate) => {

    return async (dispatch) => {
        // dispatch(setLoading());

        dispatch({ type: "SET_USER" }, setLoading())

        try {

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://gogos-recipes-backend.onrender.com/api/users/signup',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: userData
            };

            axios.request(config)
                .then((response) => {
                    dispatch({
                        type: "SET_USER_SUCCESS",
                        payload: response.data.data.InsertedID,

                    });
                    console.log("id is ", response)
                    //redirect to login page
                    navigate("/login")


                })
                .catch((error) => {
                    dispatch({
                        type: "SET_USER_ERROR",
                        payload: error.message,
                    });
                    console.log("user error", error);
                });



        } catch (error) {
            console.log(error);
        }
    };
}

export const Login = (userData, navigate) => {

    return async (dispatch) => {

        dispatch({ type: "SET_USER" }, setLoading())

        try {

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://gogos-recipes-backend.onrender.com/api/users/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: userData
            };

            axios.request(config)
                .then((response) => {
                    dispatch({
                        type: "SET_USER_SUCCESS",
                        payload: response.data.data,

                    });
                    console.log("id is ", response)
                    //redirect to login page
                    navigate("/profile")
                }
                )
                .catch((error) => {
                    dispatch({
                        type: "SET_USER_ERROR",
                        payload: error.message,
                    });
                    console.log("user error", error);
                }
                );

        } catch (error) {
            console.log(error);
        }
    };
}



