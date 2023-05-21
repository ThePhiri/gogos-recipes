import React from 'react'

const NoRecipes = () => {
    return (
        <div className='h-[500px] flex flex-col items-center justify-center space-y-4 '>
            <img src='/images/pot.gif' alt='empty pot' />
            <h1 className='text-2xl font-bold'>No recipes found</h1>
            <p className='text-sm font-light'>Add recipe</p>


        </div>
    )
}

export default NoRecipes