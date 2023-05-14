import React from 'react'
import Navbar from '../components/Navbar'
import LoginImg from '../assets/12.jpg'
import { Hero } from '../components/Hero'
import { Link } from 'react-router-dom'
import "./LoginAndSignup.css"
import { Footer } from "../components/Footer"

export const Login = () => {
  return (
    <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={LoginImg}
        title="Login"
        url="/"
        btnClass="none"
      />
      <div className='whole'>
        <div className='login'>
          <h1>Login</h1>
          <form method='POST'>
            <input type='email' required placeholder='Enter your Email id' />
            <br/>
            <input type='password' required placeholder='Enter your Password' />
            <br/>
            <input type='submit' value="Login" />
          </form>
          <br/>
          <p>OR</p>
          <br/>
          <Link className='link' to="/signup">Sign Up</Link>
        </div>
      </div>
      <Footer/>
    </>
  )
}
