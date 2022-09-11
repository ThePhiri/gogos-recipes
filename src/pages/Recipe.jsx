import React from 'react';
import Navbar from '../components/Navbar';
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function Recipe() {
    let params = useParams();
    const [recipe, setRecipe] = useState({})


    
    const getRecipe = async () => {
        const api = await fetch (`https://gogos-recipes-backend.herokuapp.com/api/recipes/${params.id}`)
        const data = await api.json();
        setRecipe(data.data)
    }
    useEffect( () => {
        getRecipe();
    }, [] );
  return (
    <div  >
        <Navbar />

        <div className='max-w-[1640px] mx-auto p-4 py-12  '>

            <h1 className='mb-2 font-bold text-gray-800 text-2xl md:text-3xl'>{recipe.name}</h1>
     
            <img src={recipe.image} alt={recipe.name} />

            <h2 className='mb-2 font-bold text-gray-800 text-2xl md:text-3xl'>Description</h2>
            <p>{recipe.description}</p>


        </div>


    </div>
  )
}

export default Recipe