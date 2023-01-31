import PrevioiusSearches from "../components/PrevioiusSearches"
import RecipeCard from "../components/RecipeCard"
import { useGlobalContext } from '../context/RecipesContext';


function Recipes() {
    const recipes = useGlobalContext();

    return (<div >
        <PrevioiusSearches />
        <div className="recipes-container">
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    </div>
    )
}

export default Recipes