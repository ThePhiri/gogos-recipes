import React, { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);

    // const [authUser, setAuthUser] = useState(null)
    // const [isLoggedIn, setIsLoggedIn] = useState(false)


    const fetchRecipes = async () => {
        try {
            const response = await fetch('http://ec2-13-245-160-208.af-south-1.compute.amazonaws.com/api/recipes');
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

