import "./RecentTrip.css"
import Trip1 from"../assets/6.jpg"
import Trip2 from"../assets/7.jpg"
import Trip3 from"../assets/8.jpg"

import React from 'react'
import { RecentTripData } from "./RecentTripData"

export const RecentTrip = () => {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className="tripcard">
        <RecentTripData
            image={Trip1}
            heading="Trip in Indonesia"
            text="Indonesia is climatically comfortable throughout the year, though the best time to visit is from April to October. The peak tourist season lasts from July to August, though April to September are the best months to visit. Even though this is the rainy season, you will bag great deals since this is lean tourist season.The peak tourist season lasts from July to August, though April to September are the best months to visit. Even though this is the rainy season, you will bag great deals since this is lean tourist season."
        />
        <RecentTripData
            image={Trip2}
            heading="Trip in France"
            text="From the historic streets of Paris to the sun-drenched vineyards of Bordeaux, from the orchards of Normandy and Brittany to the windswept Atlantic coast, and from the lakes and mountains of the Haute Savoie to the Mediterranean shores, every corner of France has its own special charm. Soak up the sophisticated, metropolitan buzz of Paris, relax into the slower-paced charms of Provence, or unwind completely and indulge in the leisurely joys of a cruise along the Rhône."
        />
        <RecentTripData
            image={Trip3}
            heading="Trip in Bangkok"
            text="Historically,[2] the areas adjacent to the rivers were the first to be populated. Thus, most communities in Thailand were built at the sides of rivers. The waterways served as means of transportation and the center of economic activity, as well. Boats were mainly used for local and regional trade, bringing goods from those that produced to those that could barter and trade. Such ways of life of the riverside communities, especially in the Chao Phraya River Basin, increased the number of floating markets."
        />
        </div>
    </div>
  )
}