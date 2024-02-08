import React from 'react'
import './EventCalendar.scss'
import NavIcon from '../NavIcon';
import Calendar from '../../assets/calendar.png'


const EventCalendar = () => {
  return (
    <div className="btn-events">
    <NavIcon url={Calendar}/>
      <h5>November</h5>
  </div>
  )
}

export default EventCalendar;
