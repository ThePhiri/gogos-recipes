import React from 'react';
import { useNavigate } from 'react-router-dom';

const Recipe = ({ recipe }) => {

    let navigate = useNavigate()


    const { title, image, description, country, steps, ingredients } = recipe;
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" class="object-cover object-center h-full w-full" src={image} />
                    </div>
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">

                        <div class="flex flex-wrap w-full mb-4">
                            <div class="lg:w-1/2 w-full mb-4 lg:mb-0">
                                <h2 class="font-medium title-font text-gray-900 tracking-widest text-sm">COUNTRY</h2>
                                <div class="flex flex-wrap w-full mb-4">
                                    <h1 class="text-2xl font-medium text-gray-900 mb-4">{country}</h1>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div >
                                <h2 className="text-2xl font-bold text-gray-800">Description</h2>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">{title}</h2>
                                <p class="leading-relaxed text-base">{description}</p>
                            </div>
                        </div>
                        <div class="flex flex-col mb-10 lg:items-start items-center">

                            <div class="flex-grow">
                                {ingredients ? <>
                                    <h3 className="text-lg font-medium px-4 mt-4">Ingredients:</h3>
                                    <ul className="list-disc pl-6 mb-4 px-4">
                                        {ingredients.map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))}
                                    </ul>
                                </> : ""
                                }
                            </div>
                        </div>
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                                <div class="flex flex-wrap w-full">
                                    <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                                        {ingredients ? <>
                                            <h3 className="text-lg font-medium px-4">Instructions:</h3>
                                            <ol className="list-decimal pl-6 mb-4 px-4">
                                                {steps && steps.map((instruction, index) => (

                                                    <div class="flex relative pb-12">
                                                        <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                        </div>
                                                        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                            </svg>
                                                        </div>
                                                        <div class="flex-grow pl-4">
                                                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP {index + 1}</h2>
                                                            <p class="leading-relaxed" key={index}>{instruction.step}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </ol>
                                        </> : ""
                                        }



                                    </div>

                                </div>
                            </div>

                        </div>
                        <button className="bg-transparent text-orange-600 px-4 py-2 mb-4 mr-2 border border-orange-600 hover:text-white hover:bg-orange-600 rounded-md"
                            // Fix back button
                            onClick={() => navigate(-1)}>

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>

                        </button>
                    </div>
                </div>

            </section>

            <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">





            </div>
        </>
    );
};

export default Recipe;
