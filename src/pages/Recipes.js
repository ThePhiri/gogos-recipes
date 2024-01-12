// import PrevioiusSearches from "../components/PrevioiusSearches"
import { useNavigate } from "react-router-dom";
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

    let navigate = useNavigate()


    const handleRecipeClick = (id) => {
        // e.preventDefault()
        navigate(`/recipe/${id}`)

    }

    useEffect(() => {
        dispatch(fetchRecipes())
    }, [dispatch])



    return (<div className="p-6">
        <SearchBox />
        {/* <PrevioiusSearches /> */}


        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {recipes.length > 0 ? recipes.map((recipe) => {

                        return <div class="p-4 md:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={recipe.image} alt="blog" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{recipe.author ? recipe.author : "Author name"}</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{recipe.title}</h1>
                                    <p class="leading-relaxed mb-3">{recipe.description}</p>
                                    <div class="flex items-center flex-wrap ">
                                        <span class="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0" onClick={() => handleRecipeClick(recipe._id)}>View Recipe
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </span>
                                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }) : isLoading === true ? <Loading /> : <NoRecipes />}



                </div>
            </div>
        </section>

        {/* <div className="pt-[80px] mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {recipes.length > 0 ? recipes.map((recipe) => {
                return <RecipeCard key={recipe._id} recipe={recipe} />
            }) : isLoading === true ? <Loading /> : <NoRecipes />}
        </div> */}

    </div>
    )
}

export default Recipes


