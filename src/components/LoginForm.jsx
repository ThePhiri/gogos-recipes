import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from "../components/Loading";
import { Login } from '../redux_actions/userAction';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
    let navigate = useNavigate();
    const userID = useSelector((state) => state.userID.insertedID);
    const isLoading = useSelector((state) => state.userID.loading);
    const error = useSelector((state) => state.userID.error);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const saveForm = async (data) => {

        dispatch(Login(data, navigate));

    }






    return (
        <div className='flex pt-[80px] justify-center items-center h-screen bg-gray-100'>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <h1>{userID}</h1>
                    {error && <p className='text-red-500'>{error}</p>}
                    <form onSubmit={handleSubmit(saveForm)}>
                        <div className='w-96 p-6 rounded shadow-sm bg-white'>
                            <div className='flex items-center justify-center mb-4'>
                                <img src='./images/cooking.png' alt='cooking lady' className='h-32' />
                            </div>
                            <h2 className='font-bold text-center pb-10'>Login</h2>
                            <label className='text-gray-700'>Email</label>
                            <input className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' type="email" {...register('email', { required: true })} />
                            <p className='text-red-500'>{errors.email && 'Email is required'}</p>
                            <label className='text-gray-700'>Password</label>
                            <input className='w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4' type="password" {...register('password', { required: true })} />
                            <p className='text-red-500'>{errors.password && 'Password is required'}</p>
                            {/* TODO: Add remember me option */}
                            <button
                                type='submit'
                                className='bg-orange-600 w-full text-gray-100 rounded hover:bg-gray-100 hover:text-orange-600 transition-colors p-2'
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
}


export default LoginForm;
