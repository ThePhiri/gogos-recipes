import { useNavigate } from "react-router-dom";




function RecipeCard({ recipe }) {
    let navigate = useNavigate()


    const handleRecipeClick = (e) => {
        e.preventDefault()
        navigate(`/recipe/${e.target.value}`)

    }




    return (

        <div
            className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <a href="#!">
                <img
                    className="rounded-t-lg"
                    src={recipe.image}
                    alt="" />
            </a>
            <div className="p-6">
                <h5
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {recipe.title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {recipe.description}
                </p>
                <button className="text-sm font-medium text-white-600 group-hover:text-white-500 p-2" value={recipe._id} onClick={(e) => handleRecipeClick(e)}>
                    View Recipe
                </button>
            </div>
        </div>


    )
}

export default RecipeCard;

