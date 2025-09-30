import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import MarketAnalysis from './components/MarketAnalysis/MarketAnalysis'
import Competitive from './components/Competitive/Competitive'
import SWOT from './components/SWOT/SWOT'
import Strategy from './components/Strategy/Strategy'
import Packages from './components/Packages/Packages'
import Conclusion from './components/Conclusion/Conclusion'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <MarketAnalysis />
      <Competitive />
      <SWOT />
      <Strategy />
      <Packages />
      <Conclusion />
      <Footer />
    </div>
  )
}

export default App
