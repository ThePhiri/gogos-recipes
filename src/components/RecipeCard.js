import { useNavigate } from "react-router-dom";




function RecipeCard({ recipe }) {
    let navigate = useNavigate()


    const handleRecipeClick = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        navigate(`/recipe/${e.target.value}`)

    }




    return (

        <div className="group relative">
            <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-900">{recipe.title}</p>
                    <p className="mt-1 text-sm text-gray-500">{recipe.description}</p>
                    <button className="text-sm font-medium text-white-600 group-hover:text-white-500 p-2" value={recipe._id} onClick={(e) => handleRecipeClick(e)}>
                        View Recipe
                    </button>
                </div>



            </div>
        </div>


    )
}

export default RecipeCard;

