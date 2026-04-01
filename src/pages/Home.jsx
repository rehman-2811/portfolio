import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import EducationExperience from '../sections/EductionExper'
import Skills from '../sections/Skills'
import ContactSection from '../sections/contactSection'
import Footer from '../sections/Footer'

function Home() {
  return (
    <div>
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
