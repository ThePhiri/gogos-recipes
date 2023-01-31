import React, { createContext, useState, useEffect, useContext } from 'react';

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const fetchRecipes = async () => {
        try {
            const response = await fetch('http://ec2-13-245-160-208.af-south-1.compute.amazonaws.com/api/recipes');
            const data = await response.json();
            setRecipes(data.data);
        } catch (error) {
            console.log(error)
        }

    };

    useEffect(() => {
        fetchRecipes();
    }, []);

    return (
        <RecipeContext.Provider value={recipes}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(RecipeContext)
}

export { RecipeContext, RecipeProvider };

