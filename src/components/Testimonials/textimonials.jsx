import React from 'react'
import nexticon from '../../assets/next-icon.png'
import backicon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import './textimonials.css'

const textimonials = () => {
  return (
    <div className='testimonials'>
        <img src={nexticon} alt="" className='next-btn'/>
        <img src={backicon} alt="" className='back-btn'/>
        <div className="slider">

        </div>
    </div>
  )
}

export default textimonials