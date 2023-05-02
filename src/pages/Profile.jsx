import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserRecipes } from "../redux_actions/recipesAction";
import RecipeCard from "../components/RecipeCard";
import NoRecipes from "../components/NoRecipes";
import Loading from "../components/Loading";

const ProfilePage = () => {
    const user = useSelector((state) => state.userID.userID);
    const token = useSelector((state) => state.userID.userID.token);
    const recipes = useSelector((recipes) => recipes.recipes.recipes)
    const isLoading = useSelector((recipes) => recipes.recipes.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserRecipes(user.ID, token))
    }, [dispatch])
    return (
        <div className="max-w-screen-lg mx-auto pt-[80px] py-8">
            {/* Top row */}
            <div className="flex items-center justify-between mb-8">
                {/* Profile image and name */}
                <div className="flex items-center">
                    <img
                        src="path/to/profile-pic.png" // replace with your own image source
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                        <h1 className="text-3xl font-bold">
                            {user.first_name} {user.last_name}
                        </h1>
                        <p className="text-gray-600">Foodie enthusiast</p>
                        <p>Email: {user.email}</p>
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
                {recipes.length > 0 ? recipes.map((recipe) => {
                    return <RecipeCard key={recipe._id} recipe={recipe} />
                }) : isLoading === true ? <Loading /> : <NoRecipes />}
            </div>
        </div>
    );
};

export default ProfilePage;
