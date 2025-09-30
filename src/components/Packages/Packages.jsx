import React, { useState, useEffect, useRef } from 'react'
import styles from './Packages.module.css'
import packagesData from '../../data/packagesData.json'
import { FaCheck, FaStar, FaCrown, FaRocket, FaGem } from 'react-icons/fa'
import { sendPackageSelectionToTelegram } from '../../utils/telegramApi'
import Popup from '../Popup/Popup'

const Packages = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [isSending, setIsSending] = useState(false)
  const premiumRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (premiumRef.current) {
      observer.observe(premiumRef.current)
    }

    return () => {
      if (premiumRef.current) {
        observer.unobserve(premiumRef.current)
      }
    }
  }, [])

  const handlePackageSelection = async (pkg) => {
    if (isSending) return // Prevent multiple clicks
    
    setIsSending(true)
    
    try {
      // Send to Telegram
      await sendPackageSelectionToTelegram(pkg.name, pkg.price)
      
      // Show success popup
      setSelectedPackage(pkg)
      setShowPopup(true)
    } catch (error) {
      console.error('Error sending package selection:', error)
      alert('There was an error processing your request. Please try again or contact us directly.')
    } finally {
      setIsSending(false)
    }
  }

  const regularPackages = packagesData.packages.slice(0, 3)
  const premiumPackage = packagesData.packages[3]

  return (
    <section id="packages" className={styles.packages}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Our Packages</span>
          <h2 className={styles.title}>Budget Allocation & Packages</h2>
          <p className={styles.subtitle}>Choose the perfect package for your business growth</p>
        </div>

        <div className={styles.paymentTerms}>
          <h3>Payment Terms</h3>
          <div className={styles.termsGrid}>
            {packagesData.paymentTerms.map((term, index) => (
              <div key={index} className={styles.termCard}>
                <p>{term}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regular Packages */}
        <div className={styles.packagesGrid}>
          {regularPackages.map((pkg, index) => (
            <div 
              key={index} 
              className={`${styles.packageCard} ${pkg.featured ? styles.featured : ''}`}
            >
              {pkg.featured && (
                <div className={styles.featuredBadge}>
                  <FaStar /> Most Popular
                </div>
              )}
              <h3 className={styles.packageName}>{pkg.name}</h3>
              <div className={styles.priceTag}>
                <span className={styles.price}>{pkg.price}</span>
                <span className={styles.period}>TND</span>
              </div>
              <p className={styles.packageDescription}>{pkg.description}</p>
              
              <div className={styles.features}>
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className={styles.feature}>
                    <FaCheck className={styles.checkIcon} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={styles.selectBtn}
                onClick={() => handlePackageSelection(pkg)}
                disabled={isSending}
              >
                {isSending ? 'Processing...' : 'Select Package'}
              </button>
            </div>
          ))}
        </div>

        {/* Revolutionary Premium Package Section */}
        <div 
          ref={premiumRef}
          className={`${styles.premiumSection} ${isVisible ? styles.visible : ''}`}
        >
          <div className={styles.premiumBanner}>
            <FaGem className={styles.gemIcon} />
            <h3>The Ultimate Solution</h3>
            <p>Everything you need for complete digital transformation</p>
          </div>

          <div className={styles.premiumCard}>
            <div className={styles.premiumGlow}></div>
            <div className={styles.premiumShine}></div>
            
            <div className={styles.premiumBadge}>
              <FaCrown className={styles.crownIcon} />
              <span>Premium Package</span>
            </div>

            <div className={styles.premiumHeader}>
              <h3 className={styles.premiumName}>{premiumPackage.name}</h3>
              <div className={styles.premiumPriceTag}>
                <span className={styles.premiumPrice}>{premiumPackage.price}</span>
                <span className={styles.premiumCurrency}>TND</span>
              </div>
            </div>

            <p className={styles.premiumDescription}>{premiumPackage.description}</p>

            <div className={styles.premiumFeatures}>
              {premiumPackage.features.map((feature, idx) => (
                <div key={idx} className={styles.premiumFeature}>
                  <FaRocket className={styles.premiumFeatureIcon} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button 
              className={styles.premiumBtn}
              onClick={() => handlePackageSelection(premiumPackage)}
              disabled={isSending}
            >
              <span>{isSending ? 'Processing...' : 'Get Started Now'}</span>
              {!isSending && <FaCrown />}
            </button>

            <div className={styles.premiumFooter}>
              <p>🎯 Complete Digital Solution | 🚀 Premium Support | 💎 Best Value</p>
            </div>
          </div>
        </div>

        <div className={styles.scalability}>
          <h3>Scalability Clause</h3>
          <p>{packagesData.scalabilityClause}</p>
        </div>
      </div>

      {/* Success Popup */}
      <Popup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        packageName={selectedPackage?.name}
        packagePrice={selectedPackage?.price}
      />
    </section>
  )
}

export default Packages
