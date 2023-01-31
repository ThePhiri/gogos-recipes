import React from 'react'
import CustomImage from './CustomImage'

function RecipeCard({ recipe }) {

    return (
        <div className='recipe-card'>
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className='recipe-card-info'>
                <img className="author-img" src="/images/hero_images/hero2.jpg" alt='profile of chef' />
                <p className='recipe-title'>{recipe.title}</p>
                <p className='recipe-desc'>{recipe.description}</p>
                <a className="view-btn" href="#!">View Recipe</a>
            </div>
        </div>
    )
}

export default RecipeCard; 