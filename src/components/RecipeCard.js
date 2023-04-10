import React from 'react'




function RecipeCard({ recipe }) {


    const handleRecipeClick = (e) => {
        e.preventDefault();
        console.log("id ->", e.target.value)
        //get recipe
        //set e.target.value to recipeid state

        // setRecipeID(e.target.value);




        //change window to recipe page
        // window.location.href = '/recipe';
    }

    //get recipe function
    // const getRecipe = async (id) => {
    //     const response = await fetch(`https://gogos-recipes-backend.onrender.com/api/recipes/${id}`);
    //     const data = await response.json();
    //     console.log(data);
    //     return data;
    // }


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

