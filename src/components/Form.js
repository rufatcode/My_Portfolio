import './Form.scss'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


import React from 'react'


const Form = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_iwnjozn',
         'template_a5oo1pi', 
         form.current, 
         'vXsn2YIt_94cLnjeL'
         )
      .then(
        (result) => {
          console.log(result.text);
          alert('message successfully sent!')
          window.location.reload(false)
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message please try again')
      });
  };
  return (
    <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
            <ul>
                <li className='half'>
                    <input type="text" name='name' placeholder='Name' required/>
                </li>
                <li className='half'>
                    <input type="email" name='email' placeholder='Email' required/>
                </li>
                <li>
                    <input placeholder='Subject' type='text' name='subject' required />
                </li>
                <li>
                    <textarea placeholder='Message' name='message' required></textarea>
                </li>
                <li>
                    <input type='submit' className='flat-button' value='SEND' />
                </li>
            </ul>
           
        </form>
        <iframe className='map-wrap'  id="gmap_canvas" 
       src="https://maps.google.com/maps?q=resid%20behbudov&t=&z=19&ie=UTF8&iwloc=&output=embed" 
       frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        
    </div>
  )
}

export default Form
