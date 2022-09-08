import React from 'react'
import breakfast from '../images/hero6.jpg'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>Breakfast</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold'>View More</button>
            </div>
            <img className='max-h-[160px] md:mx-h-[200px] w-full object-cover rounded-xl'
            src={breakfast} alt="" />
        </div>
                {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>Lunch</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold'>View More</button>
            </div>
            <img className='max-h-[160px] md:mx-h-[200px] w-full object-cover rounded-xl'
            src={breakfast} alt="" />
        </div>
                {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>Dinner</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold'>View More</button>
            </div>
            <img className='max-h-[160px] md:mx-h-[200px] w-full object-cover rounded-xl'
            src={breakfast} alt="" />
        </div>
    </div>
  )
}

export default HeadlineCards

