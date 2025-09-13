import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar.jsx'
import Hero from './components/Hero/hero.jsx'
import Program from './components/Program/program.jsx'
import Title from './components/Title/title.jsx'
import About from './components/About/about.jsx'
import Campus from './components/Campus/capmus.jsx'
import Testimonials from './components/Testimonials/textimonials.jsx'
import Contact from './components/Contact/contact.jsx'
import Footer from './components/Footer/footer.jsx'
import Videoplayer from './components/videoplayer/videoplayer.jsx'

const App = () => {

  const [playState,setPlayState] = useState(false)


  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' Title='What we offer'/>
        <Program/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Gallery' Title='Campus Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' Title='What Students Says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' Title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App