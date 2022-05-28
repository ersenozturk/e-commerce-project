import React from 'react'
import Annoucement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>
        <Annoucement />
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>

    </div>
  )
}

export default Home

// Navbar component created with styled component ..
// icons succesfully imported material Icons