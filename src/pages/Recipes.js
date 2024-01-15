// import PrevioiusSearches from "../components/PrevioiusSearches"
import { SearchBox } from "../components/SearchBox";
import NoRecipes from "../components/NoRecipes";
import Loading from "../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../redux_actions/recipesAction";
import { useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

function Recipes() {
    const recipes = useSelector((recipes) => recipes.recipes.recipes)
    const isLoading = useSelector((recipes) => recipes.recipes.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchRecipes())
    }, [dispatch])



    return (<div className="p-6">
        <SearchBox />
        {/* <PrevioiusSearches /> */}


        <section className="text-gray-600 body-font ">
            <div className="container px-5 py-24 mx-auto ">
                <div className="flex flex-wrap w-full">
                    <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden "></div>
                    {recipes.length > 0 ? recipes.map((recipe) => {

                        return <RecipeCard recipe={recipe} key={recipe._id} />
                    }) : isLoading === true ? <Loading /> : <NoRecipes />}

                </div>

            </div>

        </section >

    </div >
    )
}

export default Recipes


