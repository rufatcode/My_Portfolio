import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Loader from 'react-loaders'
import  Form  from '../components/Form'
const Contact = () => {
  return (
    <div>
       <Navbar/>
       <HeroImg2 heading="CONTACT." 
       text="Lets have a chat." />
       <Form />
      <Footer/>
      
      <Loader type='pacman' />
    </div>
  )
}

export default Contact
