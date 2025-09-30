import React, { useEffect } from 'react'
import styles from './Popup.module.css'
import { FaCheckCircle, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa'

const Popup = ({ isOpen, onClose, packageName, packagePrice }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <FaTimes />
        </button>

        <div className={styles.iconWrapper}>
          <FaCheckCircle className={styles.successIcon} />
          <div className={styles.iconPulse}></div>
        </div>

        <h2 className={styles.title}>Package Selected Successfully!</h2>
        
        <div className={styles.packageInfo}>
          <p className={styles.packageName}>{packageName}</p>
          <p className={styles.packagePrice}>{packagePrice} TND</p>
        </div>

        <div className={styles.message}>
          <p className={styles.mainText}>
            Thank you for choosing Redix Digital Solutions!
          </p>
          <p className={styles.subText}>
            Our team will contact you as soon as possible to discuss the details 
            and guide you through the next steps.
          </p>
        </div>

        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FaPhone className={styles.contactIcon} />
            <span>We'll call you shortly</span>
          </div>
          <div className={styles.contactItem}>
            <FaWhatsapp className={styles.contactIcon} />
            <span>WhatsApp notification sent</span>
          </div>
        </div>

        <button className={styles.okBtn} onClick={onClose}>
          Got it!
        </button>

        <p className={styles.footer}>
          Questions? Email us at <a href="mailto:contact@redixsolutions.pro">contact@redixsolutions.pro</a>
        </p>
      </div>
    </div>
  )
}

export default Popup
