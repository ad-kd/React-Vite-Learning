import React from 'react'
import Navbar from './components/Navbar/navbar.jsx'
import Hero from './components/Hero/hero.jsx'
import Program from './components/Program/program.jsx'
import Title from './components/Title/title.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
        <Title/>
        <Program/>
      </div>
    </div>
  )
}

export default App