import React from 'react'
import Navbar from '../components/Navbar'
import { Hero } from '../components/Hero'
import AboutImg from "../assets/9.jpeg"
import { Footer } from '../components/Footer'
import { AboutUs } from '../components/AboutUs'

export const About = () => {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About Trip"
        url="/"
        btnClass="none"
      />
      <AboutUs/>
      <Footer/>
    </>
  )
}
