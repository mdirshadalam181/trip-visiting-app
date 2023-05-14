import React from 'react'
import Navbar from '../components/Navbar'
import { Hero } from '../components/Hero'
import SignupImg from "../assets/13.jpg"
import { Footer } from '../components/Footer'

export const SignUp = () => {
  return (
    <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={SignupImg}
        title="Sign Up"
        url="/"
        btnClass="none"
      />
      <div className='whole'>
        <div className='login'>
        <h1>Sign Up</h1>
        <form>
            <input type='text' required placeholder='Enter your Full Name' />
            <br/>
            <input type='email' required placeholder='Enter your Email id' />
            <br/>
            <input type='password' required placeholder='Enter your Password' />
            <br/>
            <input type='number' required placeholder='Enter your Mobile number' />
            <br/>
            <input type='text' required placeholder='Enter your Mobile Address' />
            <br/>
            <input type='submit' />
        </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}
