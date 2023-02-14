import React from 'react'

import UserRecipes from '../components/UserRecipes'
import { useGlobalContext } from '../context/AppContext'


const Profile = () => {
    const { isLoggedIn, authUser, setIsLoggedIn, setAuthUser } = useGlobalContext()

    const logout = (e) => {
        e.preventDefault()
        setIsLoggedIn(false)
        setAuthUser(null)
    }


    return (
        <div>
            <UserRecipes />
        </div>
    )
}

export default Profile