// src/components/Competitive/Competitive.jsx
import React, { useEffect, useRef, useState } from 'react'
import styles from './Competitive.module.css'
import data from '../../data/competitiveData.json'
import {
  FaGlobe,
  FaMapMarkerAlt,
  FaBolt,
  FaLeaf,
  FaShieldAlt,
  FaStar,
  FaCheckCircle,
  FaLightbulb
} from 'react-icons/fa'

const TabButton = ({ active, onClick, icon, label }) => (
  <button
    className={`${styles.tabBtn} ${active ? styles.active : ''}`}
    onClick={onClick}
    aria-pressed={active}
  >
    <span className={styles.tabIcon}>{icon}</span>
    <span>{label}</span>
    <span className={styles.tabShine} />
  </button>
)

const StrengthChip = ({ text }) => (
  <span className={styles.chip}>
    <FaCheckCircle className={styles.chipIcon} />
    {text}
  </span>
)

const FlipCard = ({ brand }) => (
  <div className={styles.flipCard}>
    <div className={styles.flipInner}>
      <div className={styles.flipFront}>
        <div className={styles.brandHeader}>
          <h4 className={styles.brandName}>{brand.name}</h4>
          <div className={styles.brandBadge}>
            <FaStar />
            <span>{brand.tagline}</span>
          </div>
        </div>
        <p className={styles.brandSummary}>{brand.summary}</p>
        <div className={styles.chipsRow}>
          {brand.strengths?.slice(0, 3).map((s, i) => <StrengthChip key={i} text={s} />)}
        </div>
      </div>
      <div className={styles.flipBack}>
        <h5 className={styles.backTitle}>Why it matters</h5>
        <ul className={styles.bullets}>
          {brand.insights?.slice(0, 3).map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className={styles.metaRow}>
          {brand.focus && <span className={styles.metaPill}>Focus: {brand.focus}</span>}
          {brand.positioning && <span className={styles.metaPill}>Position: {brand.positioning}</span>}
        </div>
      </div>
    </div>
  </div>
)

const OpportunityCard = ({ text, accent = 'accent' }) => (
  <div className={`${styles.oppCard} ${styles[accent]}`}>
    <div className={styles.oppGlow} />
    <FaLightbulb className={styles.oppIcon} />
    <p>{text}</p>
  </div>
)

const Competitive = () => {
  const [tab, setTab] = useState('international')
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => sectionRef.current && obs.unobserve(sectionRef.current)
  }, [])

  const tabs = [
    { key: 'international', label: 'International', icon: <FaGlobe /> },
    { key: 'local', label: 'Local', icon: <FaMapMarkerAlt /> },
    { key: 'gaps', label: 'Gaps & Opportunities', icon: <FaBolt /> }
  ]

  return (
    <section id="competitive" className={styles.competitive} ref={sectionRef}>
      <div className={styles.container}>
        <header className={`${styles.header} ${visible ? styles.show : ''}`}>
          <span className={styles.badge}>
            <FaShieldAlt /> Competitive Landscape
          </span>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.subtitle}>
            Side‑by‑side brand context with actionable gaps to guide go‑to‑market decisions
          </p>
        </header>

        <div className={`${styles.tabs} ${visible ? styles.show : ''}`}>
          {tabs.map(t => (
            <TabButton
              key={t.key}
              active={tab === t.key}
              onClick={() => setTab(t.key)}
              icon={t.icon}
              label={t.label}
            />
          ))}
        </div>

        {tab !== 'gaps' && (
          <div className={`${styles.grid} ${visible ? styles.show : ''}`}>
            {(tab === 'international' ? data.internationalBrands : data.localBrands).map((brand, i) => (
              <div
                key={brand.name + i}
                className={styles.cardShell}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={styles.glass} />
                <FlipCard brand={brand} />
              </div>
            ))}
          </div>
        )}

        {tab === 'gaps' && (
          <div className={`${styles.gapsWrap} ${visible ? styles.show : ''}`}>
            <div className={styles.gapsGrid}>
              {data.opportunities.map((o, i) => (
                <OpportunityCard
                  key={i}
                  text={o}
                  accent={['accent', 'primary', 'success'][i % 3]}
                />
              ))}
            </div>

            <div className={styles.quickWins}>
              <h3 className={styles.quickWinsTitle}>
                Quick Wins for ORLE
              </h3>
              <div className={styles.winChips}>
                <span className={styles.winPill}><FaLeaf /> Natural-first positioning</span>
                <span className={styles.winPill}><FaBolt /> TikTok Reels edu‑content</span>
                <span className={styles.winPill}><FaShieldAlt /> Trust via UGC & reviews</span>
              </div>
              <p className={styles.note}>
                Focus on underserved men’s segments with organic‑ingredient messaging and rapid content testing
              </p>
            </div>
          </div>
        )}
      </div>

      {/* decorative particles */}
      <div className={styles.particles}>
        {Array.from({ length: 16 }).map((_, i) => <span key={i} className={styles.p} />)}
      </div>
    </section>
  )
}

export default Competitive
