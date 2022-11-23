import React from 'react';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Recipe() {
    let params = useParams();
    const [recipe, setRecipe] = useState({});
    const [steps, setSteps] = useState({});
    const [ingridients, setIngridients] = useState([])


    const getRecipe = async () => {
        const api = await fetch(`https://gogos-recipes-backend.herokuapp.com/api/recipes/${params.id}`)
        const data = await api.json();
        setIngridients(data.data.ingridients)
        setSteps(data.data.steps)
        setRecipe(data.data)


        console.log("ingriedients->", ingridients)
    }


    useEffect(() => {
        getRecipe();
    }, [recipe]);
    return (
        <div  >
            <Navbar />

            <div className="max-w-screen-2xl flex flex-col mt-0 mr-auto mb-0 ml-auto pt-16 pr-4 pb-16 pl-4 relative lg:flex-row lg:pt-8 xl:pt-16 xl:pb-4 md:px-8">
                <div className="lg:w-1/3 lg:justify-end lg:bottom-0 lg:left-0  flex w-full h-full justify-center ">
                    <img src={recipe.image} className="h-[400px] max-w-full lg:w-full lg:h-[500px] object-cover object-top rounded-2xl" alt={recipe.name} />
                </div>

                <div className="xl:pr-32 lg:max-w-screen-xl flex justify-end mt-0 mr-auto mb-0 ml-auto relative max-w-xl">

                    <div className="lg:pr-5 lg:max-w-lg lg:mb-0 mt-0 mr-0 mb-16 ml-0">
                        <div className="mt-0 mr-0 mb-6 ml-0 max-w-xl">
                            {/* <p className="inline-block font-semibold text-xs tracking-wider mt-0 mr-0 mb-4 ml-0 pt-1 pr-3 pb-1 pl-3 uppercase bg-pink-500 text-pink-200 rounded-2xl" contenteditable="false" disabled="">Brand new</p> */}
                            <div className="max-w-lg sm:text-4xl sm:leading-none text-gray-900 mt-0 mr-0 mb-6 ml-0">
                                <p className="sm:text-4xl sm:leading-none font-bold text-3xl tracking-tight mt-0 mr-0 mb-0 ml-0 text-orange-500 capitalize" >{recipe.name}</p>

                            </div>
                            <p className="md:text-lg text-base mt-0 mr-0 mb-0 ml-0 text-gray-700" >{recipe.description}</p>

                            <h1 className='text-orange-500 font-bold text-4xl text-center'>Ingredients</h1>
                            {/* {ingridients.length ? ingridients.map((ingridients) => (<p>{ingridients}</p>)) : ""} */}
                            <ul>
                                <li>ingridien 1</li>
                                <li>ingridien 1</li>
                                <li>ingridien 1</li>
                                <li>ingridien 1</li>
                                <li>ingridien 1</li>
                            </ul>
                        </div>


                    </div>
                </div>

            </div>

            <div className="flex flex-col mt-0 mr-auto mb-0 ml-auto pt-16 pr-4 pb-16 pl-4 relative lg:pt-8 xl:pt-16 xl:pb-4 md:px-8" >
                <h1 className='text-orange-600 font-bold text-4xl text-center'>Recent Recipes</h1>
                {steps.length ? steps.map((item, index) => (
                    <div>
                        <div className="flex">
                            <div className="flex flex-col items-center mr-4">
                                <div className="">
                                    <div className="flex items-center justify-center w-10 h-10 border rounded-full"><span className="w-4 text-primary"><svg className="w-4 text-primary" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                        <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                                        <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                                    </svg></span></div>
                                </div>
                                <div className="w-px h-full bg-gray-300"></div>
                            </div>
                            <div className="pt-1 pb-8">
                                <p className="mb-2 text-lg font-bold text-primary">Step {index + 1}</p>
                                <p className="text-gray-700"> {item.step}</p>
                            </div>
                        </div>


                    </div>
                )) : ""}
                {steps.length ?
                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div className="">
                                <div className="flex items-center justify-center w-10 h-10 border rounded-full"><span className="w-6 text-primary"><svg className="w-6 text-primary" stroke="currentColor" viewBox="0 0 24 24">
                                    <polyline fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="6,12 10,16 18,8"></polyline>
                                </svg></span></div>
                            </div>
                        </div>
                        <div className="pt-1">
                            <p className="mb-2 text-lg font-bold text-primary">Success</p>
                            <p className="text-gray-700">Done</p>
                        </div>
                    </div> : ""}
            </div>


        </div>
    )
}

export default Recipe