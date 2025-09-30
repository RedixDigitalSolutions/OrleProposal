import React from 'react'
import styles from './Hero.module.css'
import { FaRocket, FaChartLine, FaBullhorn } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span>Digital Marketing Proposal</span>
          </div>
          <h1 className={styles.title}>
            Your Growth, <span className={styles.highlight}>Our Strategy</span>
          </h1>
          <p className={styles.subtitle}>
            Comprehensive Digital Marketing Strategy for ORLE Men's Skincare & Haircare Brand
          </p>
          <p className={styles.description}>
            Prepared by Redix Digital Solutions - September 2025
          </p>
          
          <div className={styles.ctaButtons}>
            <a href="#packages" className={styles.primaryBtn}>
              View Packages
            </a>
            <a href="#about" className={styles.secondaryBtn}>
              Learn More
            </a>
          </div>

          <div className={styles.features}>
            <div className={styles.feature}>
              <FaRocket className={styles.featureIcon} />
              <div>
                <h3>Strategic Growth</h3>
                <p>Data-driven strategies</p>
              </div>
            </div>
            <div className={styles.feature}>
              <FaChartLine className={styles.featureIcon} />
              <div>
                <h3>Market Analysis</h3>
                <p>Deep market insights</p>
              </div>
            </div>
            <div className={styles.feature}>
              <FaBullhorn className={styles.featureIcon} />
              <div>
                <h3>Digital Marketing</h3>
                <p>360° marketing solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.floatingCard}>
            <h3>Smart Technopark Manouuba</h3>
            <p>contact@redixsolutions.pro</p>
            <p>www.redixolution.pro</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
