import React from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* Left side */}
            <div className='flex items-center'>
                <div className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                    Gogo's <span className='font-bold text-orange-500'>Recipes</span>
                </h1>
            </div>

            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={20} />
                <input type="text" placeholder='Search recipes' className='bg-transparent p-2 focus:outline-none w-[200px] sm:w-[400px] lg:w-[500px]' />
            </div>
            <div className='flex items-center space-x-2'>
                <button className='bg-orange-500 text-white hidden md:flex items-center py-2 '>
                    <BsPersonFill size={20} className='mr-2' />
                    Log In
                </button>
                <button className='py-2'>
                    Sign Up
                </button>
            </div>


        </div>
    )
}

export default Navbar