import React, { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);


    // const [authUser, setAuthUser] = useState(null)
    // const [isLoggedIn, setIsLoggedIn] = useState(false)


    const [recipe, setRecipe] = useState({});
    const [recipeID, setRecipeID] = useState('');



    const fetchRecipe = async (recipeID) => {
        try {
            console.log("fetch recipe", recipeID)
            const response = await fetch(`https://gogos-recipes-backend.onrender.com/api/recipes/${recipeID}`);
            const data = await response.json();
            setRecipe(data.data);
        } catch (error) {
            console.log("getting recipe error", error)
        }
    }
    useEffect((recipeID) => {
        fetchRecipe(recipeID);
    }, [recipeID]);

    const fetchRecipes = async () => {
        try {
            const response = await fetch('https://gogos-recipes-backend.onrender.com/api/recipes');
            const data = await response.json();
            setRecipes(data.data);
        } catch (error) {
            console.log("getting recipes error", error)
        }

    };


    useEffect(() => {
        fetchRecipes();
    }, []);


    return (
        <AppContext.Provider value={{
            recipes,
            recipe,
            recipeID,
            setRecipeID,
            // authUser,
            // setAuthUser,
            // isLoggedIn,
            // setIsLoggedIn
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider };

