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
        console.log("add recipe")
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
            console.log("fetch user profile")
            dispatch(fetchUserRecipes(user, token))
        }

    }, [dispatch, navigate, token, user])

    return (
        <div className="max-w-screen-lg mx-auto pt-[100px] py-8">
            {/* Top row */}
            <div className="flex items-center justify-between mb-8">
                {/* Profile image and name */}
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
                            Name:  {userDetails.first_name} {userDetails.last_name}
                        </h2>

                        <h2 className="text-xl font-bold">Email: {userDetails.email}</h2>
                    </div>
                </div>
                {/* Number of recipes and likes */}
                <div className="flex items-center">
                    <div className="mr-4">
                        <h2 className="text-xl font-bold text-center">{numRecipes}</h2>
                        <p className="text-gray-600 text-center">Recipes</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-center">10k</h2>
                        <p className="text-gray-600 text-center">Likes</p>
                    </div>
                </div>
            </div>
            {/* Second row */}

            <div className="pt-[80px] mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {userRecipes && userRecipes.length > 0 ? userRecipes.map((recipe) => {

                    return (
                        <div className="flex items-center mb-8 w-full">
                            <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden" key={recipe._id}>
                                <RecipeCard recipe={recipe} />
                            </div>


                        </div>
                    )
                }) : isLoading === true ? <Loading /> : <NoRecipes />}
                <div className="flex items-center justify-center w-full">
                    <button className="text-sm font-medium text-white-500 py-2 px-4" onClick={handleAddRecipe}>
                        Add More Recipes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;