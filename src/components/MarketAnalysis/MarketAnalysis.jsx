import React, { useState, useEffect, useRef } from 'react'
import styles from './MarketAnalysis.module.css'
import marketData from '../../data/marketData.json'
import { FaChartLine, FaUsers, FaShoppingCart, FaMobileAlt, FaArrowUp } from 'react-icons/fa'

const MarketAnalysis = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animateStats, setAnimateStats] = useState(false)
  const sectionRef = useRef(null)

  const icons = {
    chart: <FaChartLine />,
    users: <FaUsers />,
    shopping: <FaShoppingCart />,
    mobile: <FaMobileAlt />
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setAnimateStats(true), 200)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const CountUpNumber = ({ end, duration = 2000, suffix = '' }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!animateStats) return

      let startTime = null
      const endValue = parseFloat(end.toString().replace(/[^0-9.]/g, ''))

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        setCount(Math.floor(progress * endValue))

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(animate)
    }, [animateStats, end, duration])

    return <span>{typeof count === 'number' ? count + suffix : end}</span>
  }

  const AnimatedProgressBar = ({ percentage, delay, label, color }) => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
      if (animateStats) {
        setTimeout(() => {
          setWidth(parseFloat(percentage))
        }, delay)
      }
    }, [animateStats, percentage, delay])

    return (
      <div className={styles.progressBarWrapper}>
        <div className={styles.progressInfo}>
          <span className={styles.progressLabel}>{label}</span>
          <span className={styles.progressValue}>{percentage}</span>
        </div>
        <div className={styles.progressBarTrack}>
          <div
            className={`${styles.progressBarFill} ${styles[color]}`}
            style={{ width: `${width}%` }}
          >
            <div className={styles.progressGlow}></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section 
      id="market" 
      className={styles.market} 
      ref={sectionRef}
    >
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <span className={styles.badge}>
            <FaArrowUp /> Market Insights
          </span>
          <h2 className={styles.title}>{marketData.title}</h2>
          <p className={styles.subtitle}>{marketData.subtitle}</p>
        </div>

        {/* Animated Stats Cards */}
        <div className={styles.statsGrid}>
          {marketData.digitalLandscape.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.statCard} ${isVisible ? styles.slideInUp : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.statIconWrapper}>
                <div className={styles.statIcon}>{icons[item.icon]}</div>
                <div className={styles.iconPulse}></div>
              </div>
              <h3 className={styles.statValue}>
                {animateStats ? <CountUpNumber end={item.value} /> : item.value}
              </h3>
              <p className={styles.statLabel}>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Interactive Content Grid */}
        <div className={styles.contentGrid}>
          {/* Key Drivers Card */}
          <div className={`${styles.card} ${styles.driversCard} ${isVisible ? styles.fadeIn : ''}`}>
            <div className={styles.cardHeader}>
              <h3>Key Market Drivers</h3>
              <div className={styles.cardIcon}>📊</div>
            </div>
            <ul className={styles.driversList}>
              {marketData.keyDrivers.map((driver, index) => (
                <li 
                  key={index}
                  className={`${styles.driverItem} ${animateStats ? styles.slideIn : ''}`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className={styles.driverBullet}></div>
                  <span>{driver}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Market Growth Card */}
          <div className={`${styles.card} ${styles.growthCard} ${isVisible ? styles.fadeIn : ''}`}>
            <div className={styles.cardHeader}>
              <h3>Market Size & Growth</h3>
              <div className={styles.cardIcon}>💰</div>
            </div>
            <div className={styles.growthGrid}>
              {marketData.marketGrowth.map((stat, index) => (
                <div 
                  key={index} 
                  className={`${styles.growthItem} ${animateStats ? styles.zoomIn : ''}`}
                  style={{ animationDelay: `${0.6 + index * 0.15}s` }}
                >
                  <div className={styles.growthValueBig}>{stat.value}</div>
                  <div className={styles.growthLabelSmall}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Segments with Animated Progress Bars */}
        <div className={`${styles.segmentsSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.segmentsHeader}>
            <h3>Market Segments Distribution</h3>
            <p>Real-time market share analysis</p>
          </div>
          <div className={styles.segmentsChart}>
            {marketData.marketSegments.map((segment, index) => (
              <AnimatedProgressBar
                key={index}
                percentage={segment.percentage}
                label={segment.label}
                delay={index * 200}
                color={['primary', 'secondary', 'accent', 'success'][index % 4]}
              />
            ))}
          </div>
        </div>

        {/* Floating particles background effect */}
        <div className={styles.particles}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={styles.particle}></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarketAnalysis
