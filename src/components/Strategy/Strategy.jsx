import React from 'react'
import styles from './Strategy.module.css'
import strategyData from '../../data/strategyData.json'
import { FaInstagram, FaFacebook, FaTiktok, FaBullseye } from 'react-icons/fa'

const Strategy = () => {
  const platformIcons = {
    instagram: <FaInstagram />,
    facebook: <FaFacebook />,
    tiktok: <FaTiktok />
  }

  return (
    <section id="strategy" className={styles.strategy}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Marketing Strategy</span>
          <h2 className={styles.title}>{strategyData.title}</h2>
        </div>

        <div className={styles.platforms}>
          {strategyData.socialMedia.map((platform, index) => (
            <div key={index} className={styles.platformCard}>
              <div className={styles.platformHeader}>
                <div className={styles.platformIcon}>
                  {platformIcons[platform.platform]}
                </div>
                <h3>{platform.name}</h3>
              </div>
              <ul className={styles.strategyList}>
                {platform.strategies.map((strategy, idx) => (
                  <li key={idx}>{strategy}</li>
                ))}
              </ul>
              {platform.target && (
                <div className={styles.target}>
                  <FaBullseye />
                  <span>Target: {platform.target}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.metaAds}>
          <h3>Meta Ads Strategy</h3>
          <div className={styles.adsGrid}>
            <div className={styles.adsSection}>
              <h4>Campaign Structure</h4>
              <ul>
                {strategyData.metaAds.campaignStructure.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.adsSection}>
              <h4>Targeting Strategy</h4>
              <ul>
                {strategyData.metaAds.targeting.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.adsSection}>
              <h4>Budget Allocation</h4>
              <ul>
                {strategyData.metaAds.budgetAllocation.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Strategy
