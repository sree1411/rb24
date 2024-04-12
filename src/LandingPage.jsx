import React from 'react'
import NavBar from './components/NavBar'
import HeroPage from './components/HeroPage'
import OurProgram from './components/OurProgram'
import Aboutus from './components/Aboutus'

const LandingPage = () => {
  return (
      <>
        <NavBar/>
        <HeroPage/>
        <OurProgram/>
        <Aboutus/>
      </>
  )
}

export default LandingPage