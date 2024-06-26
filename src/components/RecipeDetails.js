import React from 'react';
import { useNavigate } from 'react-router-dom';

const Recipe = ({ recipe }) => {

    let navigate = useNavigate()


    const { title, image, description, country, steps, ingredients } = recipe;
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-full w-full" src={image} />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">

                        <div className="flex flex-wrap w-full mb-4">
                            <div className="lg:w-1/2 w-full mb-4 lg:mb-0">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 uppercase">{title}</h2>

                            </div>
                        </div>

                        <div className="flex flex-col mb-2 lg:items-start items-center">
                            <div >
                                <h3 className="text-2xl text-gray-800">Description</h3>
                            </div>
                            <div className="flex-grow">

                                <p className="leading-relaxed text-base">{description}</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-2 lg:items-start items-center">

                            <div className="flex-grow">
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
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="container mx-auto flex flex-wrap">
                                <div className="flex flex-wrap w-full">
                                    <div className=" md:pr-10 md:py-6">
                                        {ingredients ? <>
                                            <h3 className="text-lg font-medium px-4">Instructions:</h3>
                                            <ol className="list-decimal pl-6 mb-4 px-4">
                                                {steps && steps.map((instruction, index) => (

                                                    <div key={index} className="flex relative pb-12">
                                                        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                                        </div>
                                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10">
                                                            <svg fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="flex-grow pl-4">
                                                            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP {index + 1}</h2>
                                                            <p className="leading-relaxed" key={index}>{instruction.step}</p>
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
