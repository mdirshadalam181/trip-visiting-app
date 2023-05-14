import React from 'react'
import Navbar from '../components/Navbar'
import ContactImg from "../assets/11.jpg"
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'
import { ContactForm } from '../components/ContactForm'

export const Contact = () => {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        url="/"
        btnClass="none"
      />
      <ContactForm/>
      <Footer/>
    </>
  )
}
