// import PrevioiusSearches from "../components/PrevioiusSearches"
import RecipeCard from "../components/RecipeCard"
import { SearchBox } from "../components/SearchBox";
import { useGlobalContext } from '../context/AppContext';
import NoRecipes from "../components/NoRecipes";


function Recipes() {
    const { recipes } = useGlobalContext();

    return (<div >
        <SearchBox />
        {/* <PrevioiusSearches /> */}
        <div className="pt-[80px]">
            {recipes.length > 0 ? recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            )) : <NoRecipes />}
        </div>
    </div>
    )
}

export default Recipes