import React from 'react'
import FoodList from '../components/FoodList'
import HeadlineCards from '../components/HeadlineCards'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div >      <Navbar />
      <Hero />
      {/* <HeadlineCards/> */}
      <FoodList /></div>
  )
}

export default Home