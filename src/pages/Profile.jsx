import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserRecipes } from "../redux_actions/userRecipeAction";
import RecipeCard from "../components/RecipeCard";
import NoRecipes from "../components/NoRecipes";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const user = useSelector((state) => state.userID.userID.ID);
    const token = useSelector((state) => state.userID.userID.token);
    const isLoading = useSelector((recipes) => recipes.recipes.loading)
    const userRecipes = useSelector((userRecipes) => userRecipes.userRecipes.userRecipes)
    const dispatch = useDispatch()
    let navigate = useNavigate()

    function handleAddRecipe() {
        console.log("add recipe")
        navigate("/addrecipe")

    }


    useEffect(() => {
        if (!token) {
            //redirect to login page
            navigate("/login")
            return;
        }
        dispatch(fetchUserRecipes(user.ID, token))
    }, [dispatch, navigate, token, user.ID])

    return (
        <div className="max-w-screen-lg mx-auto pt-[100px] py-8">
            {/* Top row */}
            <div className="flex items-center justify-between mb-8">
                {/* Profile image and name */}
                <div className="flex items-center">
                    <img
                        src={user.profilepic ? user.profilepic : "/images/cook_icon.png"} // replace with your own image source
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                        <h2 className="text-xl font-bold">User Name: {user.userName}</h2>
                        <h2 className="text-xl font-bold">
                            Name:  {user.first_name} {user.last_name}
                        </h2>

                        <h2 className="text-xl font-bold">Email: {user.email}</h2>
                    </div>
                </div>
                {/* Number of recipes and likes */}
                <div className="flex items-center">
                    <div className="mr-4">
                        <h2 className="text-xl font-bold text-center">50</h2>
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
                            <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
                                <RecipeCard key={recipe._id} recipe={recipe} />
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

export default ProfilePage;
