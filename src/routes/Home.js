import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Loader from 'react-loaders'
const Home = () => {
  return (
    
    <div>
      <Navbar/>
      <HeroImg/>
      <Footer/>
      <Loader type='pacman'/>
    </div>

    
  )
}

export default Home
