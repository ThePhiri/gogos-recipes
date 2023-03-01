import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import RecipeCard from './RecipeCard'

const UserRecipes = () => {
    const { ...state } = useAuthContext()
    let userID = ""

    //const userID = state.user.data.InsertedID;
    const user = JSON.parse(localStorage.getItem("user"))
    if (user.length < 1) {
        userID = user.InsertedID;
    }


    const [isLoading, setIsLoading] = useState(null)
    const [error, setError] = useState(null)
    const [userRecipes, setUserRecipes] = useState({})
    const [userDetails, setUserDetails] = useState([])

    const getUserRecipes = async (userID) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(`http://ec2-13-245-160-208.af-south-1.compute.amazonaws.com/api/recipes/user/${userID}`, requestOptions)

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError("json error", json.error)
        }

        if (response.ok) {
            console.log("json", json)
            setUserRecipes(json.data)
            setIsLoading(false)
        }



        return userRecipes
    }

    const getUserDetails = async (userID) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(`http://ec2-13-245-160-208.af-south-1.compute.amazonaws.com/api/user/${userID}`, requestOptions)

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError("json error", json.error)
        }

        if (response.ok) {
            console.log("json", json)
            setUserDetails(json.data)
            setIsLoading(false)
        }



        return userDetails
    }

    useEffect(() => {
        getUserRecipes(userID)
        getUserDetails(userID)
    }, [userID]);



    return (
        <>

            {userDetails.length > 0 ? userDetails.map((user) => (
                <h1>{user.userName}</h1>
            )) : <div>"user nothing"</div>}

            {userRecipes.length > 0 ? userRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            )) : "no recipes available"}
        </>

    )
}

export default UserRecipes