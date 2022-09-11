import React from 'react';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Recipe() {
    let params = useParams();
    const [recipe, setRecipe] = useState({})


    const getRecipe = async () => {
        const api = await fetch(`https://gogos-recipes-backend.herokuapp.com/api/recipes/${params.id}`)
        const data = await api.json();
        setRecipe(data.data)
    }
    useEffect(() => {
        getRecipe();
    }, []);
    return (
        <div  >
            <Navbar />

            <div className="max-w-screen-2xl flex flex-col items-center mt-0 mr-auto mb-0 ml-auto pt-16 pr-4 pb-16 pl-4 relative lg:flex-row lg:py-32 xl:py-48 md:px-8">
                <div className="lg:w-1/2 lg:justify-end lg:bottom-0 lg:left-0 lg:items-center flex w-full h-full justify-center items-center">
                    <img src={recipe.image} className="h-auto w-full lg:w-auto lg:h-full object-contain object-top rounded-2xl" alt={recipe.name} />
                </div>
                <div className="xl:pr-32 lg:max-w-screen-xl flex justify-end mt-0 mr-auto mb-0 ml-auto relative max-w-xl">
                    <div className="lg:pr-5 lg:max-w-lg lg:mb-0 mt-0 mr-0 mb-16 ml-0">
                        <div className="mt-0 mr-0 mb-6 ml-0 max-w-xl">
                            {/* <p className="inline-block font-semibold text-xs tracking-wider mt-0 mr-0 mb-4 ml-0 pt-1 pr-3 pb-1 pl-3 uppercase bg-pink-500 text-pink-200 rounded-2xl" contenteditable="false" disabled="">Brand new</p> */}
                            <div className="max-w-lg sm:text-4xl sm:leading-none text-gray-900 mt-0 mr-0 mb-6 ml-0">
                                <p className="sm:text-4xl sm:leading-none font-bold text-3xl tracking-tight mt-0 mr-0 mb-0 ml-0 text-orange-500 capitalize" >{recipe.name}</p>

                            </div>
                            <p className="md:text-lg text-base mt-0 mr-0 mb-0 ml-0 text-gray-700" >{recipe.description}</p>
                        </div>
                        <div className="flex flex-col md:flex-row" >

                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Recipe