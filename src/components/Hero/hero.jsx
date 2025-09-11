import React from 'react'
import './hero.css'
import darkarrow from'../../assets/dark-arrow.png'

const hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculam is designed to empower students with the knowledge,
           skills and experiances needed to excel in the dynamic field of education</p>
        <button className='btn'>Explore More <img src={darkarrow} alt="" /></button>
      </div>
    </div>
  )
}

export default hero