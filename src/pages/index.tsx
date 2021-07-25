import * as React from "react"
import Hero from '../components/hero'
import About from '../components/about'
import Projects from '../components/projects'
import Contact from '../components/contact'

const IndexPage = () => {
  return (
    <>
      <title>Justin Caovan | Front End Developer</title>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default IndexPage
