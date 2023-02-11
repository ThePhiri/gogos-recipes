// import PrevioiusSearches from "../components/PrevioiusSearches"
import RecipeCard from "../components/RecipeCard"
import { SearchBox } from "../components/SearchBox";
import { useGlobalContext } from '../context/AppContext';


function Recipes() {
    const { recipes } = useGlobalContext();

    return (<div >
        <SearchBox />
        {/* <PrevioiusSearches /> */}
        <div className="recipes-container">
            {recipes.length > 0 ? recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            )) : "no recipes available"}
        </div>
    </div>
    )
}

export default Recipes