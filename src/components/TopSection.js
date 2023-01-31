import React from 'react'
import ChefCard from './ChefCard'

function TopSection() {
    const chefs = [
        {
            name: "Juan Carlos",
            img: "/images/hero_images/hero2.JPG",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "John Doe",
            img: "/images/hero_images/hero2.JPG",
            recipesCount: "05",
            cuisine: "Japanese",
        }
    ]
  return (
    <div className='section topItems'>
        <h1 className='title'>Top Chefs</h1>
        <div className='topItemsContainer'>
            {chefs.map(chef => <ChefCard key={chef.name} chef={chef}/>)}
            
        </div>
    </div>
  )
}

export default TopSection