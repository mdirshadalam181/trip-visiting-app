import React from 'react'
import Navbar from '../components/Navbar'
import { Hero } from '../components/Hero'
import ServiceImg from "../assets/10.jpg"
import { Footer } from '../components/Footer'
import { RecentTrip } from "../components/RecentTrip"

export const Service = () => {
  return (
    <>
      <Navbar/>
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service"
        url="/"
        btnClass="none"
      />
      <RecentTrip/>
      <Footer/>
    </>
  )
}
