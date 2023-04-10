// import PrevioiusSearches from "../components/PrevioiusSearches"
import RecipeCard from "../components/RecipeCard"
import { SearchBox } from "../components/SearchBox";
import NoRecipes from "../components/NoRecipes";
import Loading from "../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes } from "../redux_actions/recipesAction";
import { useEffect } from "react";

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


        <div className="pt-[80px] mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {console.log("rec", recipes)}
            {recipes.length > 0 ? recipes.map((recipe) => {
                return <RecipeCard key={recipe._id} recipe={recipe} />
            }) : isLoading === true ? <Loading /> : <NoRecipes />}
        </div>

    </div>
    )
}

export default Recipes


