import React from 'react'
import NavIcon from '../NavIcon'
import Location from '../../assets/location.png'
import './EventVenue.scss'

function EventVenue() {
  return (
    <div className="venue-container">
        <NavIcon url={Location}/>
        <div className="venue-content">
            <p>4517 Washington Ave. Manchester,</p>
            <p>Kentucky 39495</p>
        </div>
    </div>
  )
}

export default EventVenue;
