import './AboutContent.scss'
import reactimg from '../assets/react.png'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'> 
        <h1>Who am I?</h1>
        <p>Im a Full Stuck Web developer.I create responsive
            secure websites for my clients.
        </p>
        <Link to="/contact">
            <button className='btn'>Contact</button>
        </Link>
        </div>
      <div className='right'> 
      <div className='img-container'>
        <div className='img-stack top'>
          <img className='img' src={reactimg} alt='true'/>
          
        </div>


        <div className='img-stack bottom'>
                            <div className='cubespinner'>
                                <div className='face1'>
                                    <FontAwesomeIcon icon={faAngular} color='#DD0031' />

                                </div>
                                <div className='face2'>
                                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />

                                </div>
                                <div className='face3'>
                                    <FontAwesomeIcon icon={faCss3} color='#28A4D9' />

                                </div>
                                <div className='face4'>
                                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />

                                </div>
                                <div className='face5'>
                                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />

                                </div>
                                <div className='face6'>
                                    <FontAwesomeIcon icon={faGitAlt} color='#DD0031' />

                                </div>

                            </div>

                         </div>

      </div>
      
      </div>
      
     
    </div>
  )
}

export default AboutContent
