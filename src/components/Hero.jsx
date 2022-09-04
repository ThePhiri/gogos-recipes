import React from 'react'
import hero from '../images/hero.jpg'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[600px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[600px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>African</span> recipes</h1>
            </div>
            <img src= {hero} alt="" className='w-full max-h-[600px] object-cover'/>
        </div>
    </div>
  )
}

export default Hero

