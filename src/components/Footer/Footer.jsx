// src/components/Footer/Footer.jsx
import React from 'react'
import styles from './Footer.module.css'
import { FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.brandRow}>
              <img
                src="/redix_logo.png"
                alt="Redix Digital Solutions logo"
                className={styles.brandLogo}
                loading="lazy"
              />
              <div className={styles.brandText}>
                <h3 className={styles.brandName}></h3>
                <span className={styles.brandSub}></span>
              </div>
            </div>
            <p className={styles.tagline}>Your Growth, Our Strategy</p>
            <p className={styles.description}>
              Redix Digital Solution helps brands grow with tailored digital strategies,
              content, and technology that deliver measurable results.
            </p>
          </div>

          <div className={styles.column}>
            <h4>Contact Information</h4>
            <ul className={styles.contactList}>
              <li>
                <FaMapMarkerAlt />
                <span>Smart Technopark Manouuba, Tunisia</span>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:contact@redixsolutions.pro" aria-label="Email contact">
                  contact@redixsolutions.pro
                </a>
              </li>
              <li>
                <FaGlobe />
                <a
                  href="https://redixsolutions.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit website"
                >
                  redixsolutions.pro
                </a>
              </li>
              <li>
                <FaPhone />
                <span>+216 (TN) • Business hours</span>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Services</h4>
            <ul className={styles.servicesList}>
              <li>Social Media Marketing</li>
              <li>Branding & Design</li>
              <li>Content Creation</li>
              <li>Web & Mobile Development</li>
              <li>Digital Advertising</li>
              <li>Event Coverage</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul className={styles.linksList}>
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#market">Market Analysis</a></li>
              <li><a href="#strategy">Strategy</a></li>
              <li><a href="#packages">Packages</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2025 Redix Digital Solutions. All rights reserved.</p>
          <p>Prepared for ORLE Men's Skincare & Haircare Brand</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
