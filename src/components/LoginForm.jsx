import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context/AppContext'



const LoginForm = () => {
    let navigate = useNavigate();

    const { setAuthUser,
        isLoggedIn,
        setIsLoggedIn } = useGlobalContext()

    const login = (e) => {
        e.preventDefault()
        setIsLoggedIn(true)
        setAuthUser({
            "name": "myguy"
        });
        navigate("/profile")
        console.log("end of login function")
    }

    const logout = (e) => {
        e.preventDefault()
        setIsLoggedIn(false)
        setAuthUser(null)
    }

    return (
        <>
            <span>Show {!isLoggedIn ? 'login form' : "this should redirect to dashboard"}</span>
            <br />
            {isLoggedIn ? <button onClick={(e) => { logout(e) }}>Logout</button> : <button onClick={(e) => { login(e) }}>login</button>}


        </>
    )
}

export default LoginForm