import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserRecipes } from "../redux_actions/userRecipeAction";
import RecipeCard from "../components/RecipeCard";
import NoRecipes from "../components/NoRecipes";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const user = useSelector((state) => state.userID.userID.ID);
    const userDetails = useSelector((state) => state.userID.userID);
    const token = useSelector((state) => state.userID.userID.token);
    const isLoading = useSelector((recipes) => recipes.recipes.loading)
    const userRecipes = useSelector((userRecipes) => userRecipes.userRecipes.userRecipes)
    const dispatch = useDispatch()
    let navigate = useNavigate()


    function handleAddRecipe() {
        navigate("/addrecipe")

    }

    let numRecipes = 0;
    if (userRecipes && userRecipes.length > 0) {
        numRecipes = userRecipes.length
    }


    useEffect(() => {
        // if (!token) {
        //     console.log()
        //     //redirect to login page
        //     navigate("/login")
        //     return;
        // }
        if (token !== "") {
            dispatch(fetchUserRecipes(user, token))
        }

    }, [dispatch, navigate, token, user])

    return (
        <div className="max-w-screen-lg mx-auto pt-[100px] py-8">



            <div className="flex items-center justify-between mb-8">

                <div className="flex items-center">
                    <img
                        src={"/images/cook_icon.png"}
                        // src={user.profilepic ? userDetails.profilepic : "/images/cook_icon.png"} 

                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                        <h2 className="text-xl font-bold">User Name: {userDetails.userName}</h2>
                        <h2 className="text-xl font-bold">
                            Name:  {userDetails.firstName} {userDetails.lastName}
                        </h2>

                        <h2 className="text-xl font-bold">Email: {userDetails.email}</h2>
                    </div>
                </div>
                {/* Number of recipes and likes */}
                <div className="flex items-center">
                    {numRecipes > 0 && <div className="mr-4">
                        <h2 className="text-xl font-bold text-center">{numRecipes}</h2>
                        <p className="text-gray-600 text-center">Recipes</p>
                    </div>
                    }

                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-4">Recipes</h2>
            </div>

            <div className=" flex flex-wrap">

                {userRecipes && userRecipes.length > 0 ? userRecipes.map((recipe) => {

                    return (
                        <div className="flex" key={recipe._id}>

                            <RecipeCard recipe={recipe} isAuthenticated={true} />



                        </div>
                    )
                }) : isLoading === true ? <Loading /> : <NoRecipes />}

            </div>
            <div className="flex items-center justify-center w-full">
                <button className="text-sm font-medium text-white-500 py-2 px-4" onClick={handleAddRecipe}>
                    Add Recipe
                </button>
            </div>

        </div>

    );
};

export default Profile;
