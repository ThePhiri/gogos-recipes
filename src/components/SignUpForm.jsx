import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'


// Backend url:
// http://ec2-13-245-160-208.af-south-1.compute.amazonaws.com/api/users/signup

const SignUpForm = () => {
    let navigate = useNavigate();
    const { dispatch } = useAuthContext();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userName, setUserName] = useState('')
    // const [isLoading, setIsLoading] = useState(null)
    // const [error, setError] = useState(null)

    const signup = async (userName, email, password) => {
        console.log("sign up start")
        // setIsLoading(true)
        // setError(null)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": userName,
            "email": email,
            "password": password,
            "verified": false
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch("http://ec2-13-245-160-208.af-south-1.compute.amazonaws.com/api/users/signup", requestOptions)

        const json = await response.json()

        if (!response.ok) {
            // setIsLoading(false)
            // setError("json error", json.error)
        }

        if (response.ok) {
            console.log("json", json)
            localStorage.setItem('user', JSON.stringify(json.data))
            dispatch({ type: 'LOGIN', payload: json })
            // setIsLoading(false)
        }

        return json.data

    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup(userName, email, password)

        console.log("signed in")

        navigate("/profile")

    }



    return (
        <div className='flex pt-[50px] justify-center h-screen items-center bg-gray-100'>
            <form onSubmit={handleSubmit}>
                <div className='w-96 p-6 rounded shadow-sm bg-white'>
                    <div className='flex items-center justify-center mb-4'>
                        <img src='./images/cooking.png' alt='cooking lady' className='h-32' />
                    </div>
                    <h2 className='font-bold text-center pb-10'>SIgn Up </h2>
                    <label className='text-gray-700'>User Name</label>
                    <input className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' type="text" onChange={(e) => setUserName(e.target.value)} value={userName} required />
                    <label className='text-gray-700'>Email</label>
                    <input className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                    <label className='text-gray-700'>Password</label>
                    <input className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-6' type="text" onChange={(e) => setPassword(e.target.value)} value={password} required />
                    <label className='text-gray-700'>Confirm Password</label>
                    <input className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-6' type="text" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} required />
                    {/* TODO: Add remember me option */}
                    <button type='submit' className='bg-orange-600 w-full text-gray-100 rounded hover:bg-gray-100 hover:text-orange-600 transition-colors p-2'>Sign Up</button>
                </div>
            </form>

        </div>
    )
}

export default SignUpForm