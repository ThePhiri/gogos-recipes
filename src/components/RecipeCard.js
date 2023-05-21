import { useNavigate } from "react-router-dom";




function RecipeCard({ recipe }) {
    let navigate = useNavigate()


    const handleRecipeClick = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        navigate(`/recipe/${e.target.value}`)

    }




    return (

        // <div className="group relative">
        //     <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        //         <img
        //             src={recipe.image}
        //             alt={recipe.title}
        //             className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        //         />
        //     </div>
        //     <div className="mt-4 flex justify-between">
        //         <div>
        //             <p className="text-sm font-medium text-gray-900">{recipe.title}</p>
        //             <p className="mt-1 text-sm text-gray-500">{recipe.description}</p>
        //             <button className="text-sm font-medium text-white-600 group-hover:text-white-500 p-2" value={recipe._id} onClick={(e) => handleRecipeClick(e)}>
        //                 View Recipe
        //             </button>
        //         </div>



        //     </div>
        // </div>
        <div
            class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <a href="#!">
                <img
                    class="rounded-t-lg"
                    src={recipe.image}
                    alt="" />
            </a>
            <div class="p-6">
                <h5
                    class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {recipe.title}
                </h5>
                <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
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

