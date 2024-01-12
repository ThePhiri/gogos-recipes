import React from 'react';
import { useNavigate } from 'react-router-dom';

const Recipe = ({ recipe }) => {

    let navigate = useNavigate()


    const { title, image, description, country, steps, ingredients } = recipe;
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">

            <button className="bg-transparent text-orange-600 px-4 py-2 mb-4 mr-2 border border-orange-600 hover:text-white hover:bg-orange-600 rounded-md"
                onClick={() => navigate(-1)}>

                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>

            </button>
            <div className="md:flex">
                <div className="md:w-1/3 md:px-4">
                    <img src={image} alt={title} className="w-full object-cover" />
                </div>
                <div className="md:w-2/3">


                    <h2 className="text-2xl font-bold px-4 pt-4 md:pt-0">{title}</h2>
                    <p className="px-4">{description}</p>

                    {ingredients ? <>
                        <h3 className="text-lg font-medium px-4 mt-4">Ingredients:</h3>
                        <ul className="list-disc pl-6 mb-4 px-4">
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </> : ""
                    }
                    {ingredients ? <>
                        <h3 className="text-lg font-medium px-4">Instructions:</h3>
                        <ol className="list-decimal pl-6 mb-4 px-4">
                            {steps && steps.map((instruction, index) => (
                                <li key={index}>{instruction.step}</li>
                            ))}
                        </ol>
                    </> : ""
                    }

                    {country ? <>
                        <h3 className="text-lg font-medium px-4">Country:</h3>
                        <p className="px-4">{country}</p>
                    </> : ""
                    }




                </div>
            </div>



        </div>
    );
};

export default Recipe;
