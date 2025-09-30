import React from 'react'
import styles from './Conclusion.module.css'
import { FaCheckCircle } from 'react-icons/fa'

const Conclusion = () => {
  const nextSteps = [
    'Package selection and contract signing',
    'Advance payment processing',
    'Strategy workshop and content planning session',
    'Content production and campaign launch',
    'Ongoing optimization and performance monitoring'
  ]

  return (
    <section id="conclusion" className={styles.conclusion}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to Elevate ORLE?</h2>
          <p className={styles.description}>
            The Tunisian men's grooming market presents a significant opportunity for ORLE to establish 
            itself as a leading brand in an underserved but growing segment. With Tunisia's strong digital 
            adoption, growing acceptance of men's grooming, and increasing disposable income, the timing 
            is optimal for launching a targeted digital marketing campaign.
          </p>
          <p className={styles.description}>
            Our comprehensive strategy leverages Tunisia's unique digital landscape, where social media 
            penetration is high and e-commerce is still emerging. By focusing on authentic content creation, 
            strategic social media presence, and data-driven optimization, we can position ORLE for sustainable 
            growth and market leadership.
          </p>
        </div>

        <div className={styles.nextSteps}>
          <h3>Next Steps</h3>
          <ul className={styles.stepsList}>
            {nextSteps.map((step, index) => (
              <li key={index} className={styles.step}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepContent}>
                  <FaCheckCircle className={styles.stepIcon} />
                  <span>{step}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.cta}>
          <h3>Let's Start Your Digital Journey</h3>
          <p>Contact us today to discuss how we can help ORLE achieve market leadership</p>
          <a href="#footer" className={styles.ctaButton}>Get Started Now</a>
        </div>
      </div>
    </section>
  )
}

export default Conclusion
