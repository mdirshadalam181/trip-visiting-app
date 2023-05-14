import "./RecentTrip.css"
import React from 'react'

export const RecentTripData = (props) => {
  return (
    <div className="t-card">
        <div className="t-image">
            <img alt="recentImages" src={props.image}></img>
        </div>
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
    </div>
  )
}

