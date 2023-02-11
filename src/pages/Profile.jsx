import React from 'react'
import { useGlobalContext } from '../context/AppContext'

const Profile = () => {
    const { isLoggedIn, authUser } = useGlobalContext()
    return (
        <div>
            <span>show {isLoggedIn ? 'users stuff' : "redirect to login form"}</span>

            {isLoggedIn ? <div><h1>hello {authUser.name}</h1>  </div> : "not logged in"}


        </div>
    )
}

export default Profile