import React from 'react'
import './Cards.css'
const Cards = ({emoji ,heading ,detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <h4 className="h4-title">{heading}</h4>
        <p>{detail}</p>
        <a href="" className="c-btn">Learn More</a>
    </div>
  )
}

export default Cards