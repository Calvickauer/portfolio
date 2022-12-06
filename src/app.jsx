import React from 'react'
import About from './components/about/about.jsx'
import Contact from './components/contact/Contact'
import Experience from './components/experience/experience'
import Footer from './components/footer/Footer'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import Services from './components/services/services'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}

export default App