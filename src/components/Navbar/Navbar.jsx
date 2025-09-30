// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'

// Base-URL safe path for Vite public assets
const REDIX_LOGO = `${import.meta.env.BASE_URL}redix_logo.png`

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Market Analysis', href: '#market' },
    { name: 'Strategy', href: '#strategy' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact', href: '#footer' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main">
      <div className={styles.container}>
        <a
          href="#hero"
          className={styles.logo}
          aria-label="Go to top"
          onClick={(e) => handleNavClick(e, '#hero')}
        >
          <img
            src={REDIX_LOGO}
            alt="Redix Digital Solutions"
            className={styles.logoImg}
            loading="eager"
          />
        </a>

        <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.active : ''}`}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={styles.mobileToggle}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
