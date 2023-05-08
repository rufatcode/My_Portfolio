import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'
import Loader from 'react-loaders'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." 
      text="Some of my most
       recent works."/>
       <Work/>
       <PricingCard/>
      <Footer/>
      <Loader type='pacman' />
    </div>
  )
}

export default Project
