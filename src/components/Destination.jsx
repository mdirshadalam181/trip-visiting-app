import React from 'react'
import "./Destination.css"
import DestinationData from './DestinationData'
import Mountain1 from "../assets/2.jpg"
import Mountain2 from "../assets/3.jpg"
import Mountain3 from "../assets/4.jpg"
import Mountain4 from "../assets/5.jpg"

export const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p>Tours give you the oppourtunity to see a lot, within a time frame.</p>

        <DestinationData
          className="first-des"
            heading="Taal Volcano, Batangas"
            text="Taal Volcano has had several violent eruptions in the past, causing deaths on the island and the populated areas surrounding the lake, with an overall death toll of about 6,000. Because of its proximity to populated areas and its eruptive history, the volcano was designated a Decade Volcano, worthy of close study to prevent future natural disasters. All volcanoes in the Philippines are part of the Ring of Fire."
            img1={Mountain1}
            img2={Mountain2}
        />
        <DestinationData
          className="first-des-reverse"
            heading="Mt. Daguldul, Batangas"
            text="Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain."
            img1={Mountain3}
            img2={Mountain4}
        />
    </div>
  )
}
