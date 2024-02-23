import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { SignUp } from '../redux_actions/userAction'
import Loading from "../components/Loading"
import { useForm } from 'react-hook-form'

const SignUpForm = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid }, // Include isDirty and isValid in formState
        watch
    } = useForm();

    const password = watch("password");

    const saveForm = async (data) => {
        setIsLoading(true)
        dispatch(SignUp(data, navigate))
    }

    return (

        <div className='flex pt-[50px] justify-center h-screen items-center' style={{ backgroundImage: `url('/images/hero_images/grandma.jpeg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            {isLoading ? <Loading /> :
                <form onSubmit={handleSubmit(saveForm)}>
                    <div className='w-96 p-6 rounded shadow-sm bg-white'>
                        <div className='flex items-center justify-center mb-4'>
                            <img src='./images/cooking.png' alt='cooking lady' className='h-32' />
                        </div>
                        <h2 className='font-bold text-center pb-10'>Sign Up </h2>
                        <label className='text-gray-700'>User Name</label>
                        <input
                            className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4'
                            type='text'
                            {...register('userName', { required: 'Username is required' })}
                        />
                        {errors.userName && <p className="text-red-500">{errors.userName.message}</p>}
                        <label className='text-gray-700'>Email</label>
                        <input
                            className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4'
                            type='email'
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        <label className='text-gray-700'>Password</label>
                        <input
                            className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-6'
                            type='password'
                            {...register('password', { required: 'Password is required' })}
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        <label className='text-gray-700'>Confirm Password</label>
                        <input
                            className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-6'
                            type='password'
                            {...register('confirmPassword', {
                                validate: value => value === password || 'The passwords do not match',
                            })}
                        />
                        {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                        <button
                            type='submit'
                            className={`bg-orange-600 w-full text-gray-100 rounded hover:bg-gray-100 hover:text-orange-600 transition-colors p-2 ${(!isDirty || !isValid) && 'opacity-50 cursor-not-allowed'}`}
                            disabled={!isDirty || !isValid} // Disable button if form is not dirty or not valid
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            }
        </div>
    )
}

export default SignUpForm
