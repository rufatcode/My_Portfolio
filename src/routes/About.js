import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
import Loader from 'react-loaders'
const About = () => {
  return (
    <div>
       <Navbar/>
       <HeroImg2 heading="ABOUT." 
       text="Im a Full Stuck Web Developer."/>
       <AboutContent />
      <Footer/>
      <Loader type='pacman' />
    </div>
  )
}

export default About
