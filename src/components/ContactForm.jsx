import React from 'react'
import "./ContactForm.css"

export const ContactForm = () => {
  return (
    <div className='form-container'>
        <h1 className='form-heading'>Send a message to Contact us!</h1>
        <form>
            <input placeholder='Enter your name' />
            <input placeholder='Enter your Email' />
            <input placeholder='Enter your Destination' />
            <input placeholder='Enter your mobile no' />
            <textarea placeholder='Enter here some extra message ' rows="6" />
            <button>Send Message</button>
        </form>
    </div>
  )
}
