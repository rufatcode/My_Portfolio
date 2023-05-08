import './FooterStyles.css'

import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={
                        {color:"#fff",marginRight:"2rem"}
                    } />
                    <div>
                        <p>Resid Behbudov 46.</p>
                            <p>Baku.</p>
                                <p>Azerbaijan.</p>
                    </div>
                </div>
                <div className='phone'>
                <h4><FaPhone size={20} style={
                        {color:"#fff",marginRight:"2rem"}
                    } />
                    994+51-300-44-84</h4>
                </div>
                <div className='email'>
                <h4><FaMailBulk size={20} style={
                        {color:"#fff",marginRight:"2rem"}
                    } />
                    Rft.smayilov@bk.ru</h4>
                </div>
              
            </div>
            <div className='right'>
                <h4>About the activite.</h4>
                <p>I am a student at Azerbaijan State Oil 
                    Indusrty University.I enjoy discussing new 
                    projects and design challenges.</p>
                    <div className='social'>
                        <a target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100055195013768" >
                    <FaFacebook size={30} style={
                        {color:"#fff",marginRight:"1rem"}
                    } />
                    </a>
                    <a target="_blank"
            rel="noreferrer"
            href="https://github.com/Rufet111">
                    <FaGithub size={30} style={
                        {color:"#fff",marginRight:"1rem"}
                    } />
                    </a>
                    <a target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/r%C3%BCf%C9%99t-ismayilov-b1a093255/"
           >
                    <FaLinkedin size={30} style={
                        {color:"#fff",marginRight:"1rem"}
                    } />
                    </a>
                    <a target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/rufat.56/">
                    <FaInstagram size={30} style={
                        {color:"#fff",marginRight:"1rem"}
                    } />
                    </a>
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
