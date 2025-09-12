import React from 'react'
import './about.css'
import aboutimage from '../../assets/about.png'
import playicon from '../../assets/play-icon.png'

const about = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutimage} alt="" className='about-img' />
            <img src={playicon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nuturing Tomorrow's Leaders Today</h2>
            <p>Embark upon a transformative educational journey with our university's comprehensive education program. 
            Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the diverse fields of education.</p>
            
            <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs ensure aspiring educators to make a 
                meaningful impact in classrooms, schools, and communities. </p>

            <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to 
                achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
    </div>
  )
}

export default about