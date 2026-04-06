import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import EducationExperience from '../sections/EductionExper'
import Skills from '../sections/Skills'
import ContactSection from '../sections/contactSection'
import Footer from '../sections/Footer'
import Cursor from '../sections/Cursor'
import AnimatedBackground from '../components/layouts/animatedBackground'
import "../App.css"

function Home() {
  return (
    <div>
      <AnimatedBackground/>


      <Cursor/>
      <Hero/>
      <About/>
      <EducationExperience/>
      <Skills/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Home
