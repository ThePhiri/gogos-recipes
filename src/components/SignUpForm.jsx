import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SignUp } from '../redux_actions/userAction'
import Loading from "../components/Loading"

const SignUpForm = () => {
    console.log('SignUpForm')
    let navigate = useNavigate()
    const isLoading = useSelector((userID) => userID.userID.loading)
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [passwordError, setPasswordError] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()


        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match')
            return
        }

        const user = { email, password, confirmPassword, userName }
        dispatch(SignUp(user, navigate))

    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
        if (passwordError) {
            setPasswordError('')
        }
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
        if (passwordError) {
            setPasswordError('')
        }
    }



    return (
        isLoading ? <Loading /> :
            <div className='flex pt-[50px] justify-center h-screen items-center bg-gray-100'>
                <form onSubmit={handleSubmit}>
                    <div className='w-96 p-6 rounded shadow-sm bg-white'>
                        <div className='flex items-center justify-center mb-4'>
                            <img src='./images/cooking.png' alt='cooking lady' className='h-32' />
                        </div>
                        <h2 className='font-bold text-center pb-10'>Sign Up </h2>
                        <label className='text-gray-700'>User Name</label>
                        <input
                            className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4'
                            type='text'
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                            required
                        />
                        <label className='text-gray-700'>Email</label>
                        <input
                            className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4'
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                        <label className='text-gray-700'>Password</label>
                        <input
                            className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-6'
                            type='password'
                            onChange={handlePasswordChange}
                            value={password}
                            required
                        />
                        <label className='text-red-700'>{passwordError}</label>
                        <label className='text-gray-700'>Confirm Password</label>
                        <input
                            className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-6'
                            type='password'
                            onChange={handleConfirmPasswordChange}
                            value={confirmPassword}
                            required
                        />
                        <button
                            type='submit'
                            disabled={passwordError}
                            className='bg-orange-600 w-full text-gray-100 rounded hover:bg-gray-100 hover:text-orange-600 transition-colors p-2'
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
    )
}

export default SignUpForm
