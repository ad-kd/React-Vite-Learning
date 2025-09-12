import React from 'react'
import Navbar from './components/Navbar/navbar.jsx'
import Hero from './components/Hero/hero.jsx'
import Program from './components/Program/program.jsx'
import Title from './components/Title/title.jsx'
import About from './components/About/about.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' Title='What we offer'/>
        <Program/>
        <About/>
      </div>
    </div>
  )
}

export default App