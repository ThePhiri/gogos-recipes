import { combineReducers } from 'redux'
import recipesReducer from './recipesReducer'
import recipeReducer from './recipeReducer';
import userReducer from './userReducer';
import userRecipesReducer from './userRecipesReducer';

export const rootReducer = combineReducers({
    recipes: recipesReducer,
    recipe: recipeReducer,
    userRecipes: userRecipesReducer,
    userID: userReducer
});