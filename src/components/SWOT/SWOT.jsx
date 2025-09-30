import React from 'react'
import styles from './SWOT.module.css'
import swotData from '../../data/swotData.json'

const SWOT = () => {
  const categories = [
    { key: 'strengths', color: 'green' },
    { key: 'weaknesses', color: 'red' },
    { key: 'opportunities', color: 'blue' },
    { key: 'threats', color: 'orange' }
  ]

  return (
    <section id="swot" className={styles.swot}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Strategic Analysis</span>
          <h2 className={styles.title}>{swotData.title}</h2>
          <p className={styles.subtitle}>{swotData.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {categories.map(({ key, color }) => (
            <div key={key} className={`${styles.card} ${styles[color]}`}>
              <h3 className={styles.cardTitle}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </h3>
              <ul className={styles.list}>
                {swotData[key].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SWOT
