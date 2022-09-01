import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'



const Navbar = () => {
    const [nav, setNav ] = useState(false)

    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* Left side */}
            <div className='flex items-center'>
                <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
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
            {/* Login Buttons */}
            <div className='hidden md:flex items-center space-x-2'>
                <button className='bg-orange-500 text-white flex items-center py-2 '>
                    <BsPersonFill size={20} className='mr-2' />
                    Log In
                </button>
                <button className='py-2'>
                    Sign Up
                </button>
            </div>
            {/* Mobile Menu */}
            {/* Overlay */}
            {nav ? <div className='bg-orange-900/80 fixed w-full h-screen z-10 top-0 left-0'></div> : '' }

            {/* Side drawer menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose 
                onClick={() => setNav(!nav) }
                size={30} 
                className='absolute right-4 top-4 cursor-pointer'/>
                <h2 className='text-2xl p-4'>Gogos <span className='font-bold'>Recipes</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-2 flex'>Explore</li>
                        <li className='text-xl py-2 flex'>Trending</li>
                        <li className='text-xl py-2 flex'>About us</li>
                    </ul>

                </nav>
            </div>
 
        </div>
    )
}

export default Navbar