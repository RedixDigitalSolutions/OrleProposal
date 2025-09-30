import React from 'react'
import styles from './Portfolio.module.css'
import portfolioData from '../../data/portfolioData.json'
import { FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa'

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Our Work</span>
          <h2 className={styles.title}>{portfolioData.title}</h2>
          <p className={styles.subtitle}>{portfolioData.description}</p>
        </div>

        <div className={styles.highlightsGrid}>
          {portfolioData.highlights.map((highlight, index) => (
            <div key={index} className={styles.highlightCard}>
              <FaCheckCircle className={styles.icon} />
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3>Explore Our Complete Portfolio</h3>
            <p>
              Discover our full range of projects, case studies, and success stories. 
              From web development to digital marketing campaigns, see how we've helped 
              businesses across various industries achieve their digital goals.
            </p>
            <a 
              href="https://redixsolutions.pro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <span>View All Our Work</span>
              <FaExternalLinkAlt className={styles.linkIcon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
