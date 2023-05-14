import React from 'react'
import Navbar from '../components/Navbar'
import { Hero } from '../components/Hero'
import HeroImg from "../assets/1.jpg"
import { Destination } from '../components/Destination'
import { RecentTrip } from '../components/RecentTrip'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero"
        heroImg={HeroImg}
        title="Your Journey Your Story"
        text="Choose your favorite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination/>
      <RecentTrip/>
      <Footer/>
    </>
  )
}
