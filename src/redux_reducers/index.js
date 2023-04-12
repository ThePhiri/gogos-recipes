import { combineReducers } from 'redux'
import recipesReducer from './recipesReducer'
import recipeReducer from './recipeReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
    recipes: recipesReducer,
    recipe: recipeReducer,
    userID: userReducer
});