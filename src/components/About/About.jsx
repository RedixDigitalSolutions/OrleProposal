import React from 'react'
import styles from './About.module.css'
import aboutData from '../../data/aboutData.json'
import { FaCheckCircle } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>About Us</span>
          <h2 className={styles.title}>{aboutData.title}</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.textContent}>
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.specialties}>
            <h3>Our Specialties</h3>
            <ul className={styles.list}>
              {aboutData.specialties.map((specialty, index) => (
                <li key={index}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>{specialty}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.stats}>
          {aboutData.stats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
