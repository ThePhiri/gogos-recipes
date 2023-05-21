import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecipe } from '../redux_actions/recipeAction'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Loading from '../components/Loading'
import RecipeDetails from '../components/RecipeDetails'

const Recipe = () => {
    const recipe = useSelector((recipe) => recipe.recipe.recipe)
    const isLoading = useSelector((recipe) => recipe.recipe.loading)
    const dispatch = useDispatch()
    const { id } = useParams()


    useEffect(() => {
        dispatch(fetchRecipe(id))
    }, [dispatch, id])


    return (
        <div className='pt-[80px]'>
            {isLoading === true ? <Loading /> : <RecipeDetails recipe={recipe} />}

        </div>

    )
}

export default Recipe