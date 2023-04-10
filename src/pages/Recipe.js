import React from 'react'
import { useGlobalContext } from '../context/AppContext'

const Recipe = () => {
    const { singleRecipe } = useGlobalContext();
    console.log(singleRecipe);
    return (
        <div>Recipe</div>
    )
}

export default Recipe