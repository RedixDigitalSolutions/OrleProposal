import React from 'react'
import styles from './Footer.module.css'
import { 
  FaEnvelope, 
  FaGlobe, 
  FaMapMarkerAlt, 
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa'

// Base-URL safe path for logo
const REDIX_LOGO = `${import.meta.env.BASE_URL}redix_logo.png`

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61560535962106',
      icon: <FaFacebookF />,
      color: '#1877F2'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/redixdigitalsolutions/',
      icon: <FaInstagram />,
      color: '#E4405F'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/redix-digital-solutions/posts/?feedView=all',
      icon: <FaLinkedinIn />,
      color: '#0A66C2'
    }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.column}>
            <div className={styles.brandRow}>
              <img
                src={REDIX_LOGO}
                alt="Redix Digital Solutions logo"
                className={styles.brandLogo}
                loading="lazy"
              />
              <div className={styles.brandText}>
                <h3 className={styles.brandName}>Redix</h3>
                <span className={styles.brandSub}>Digital Solutions</span>
              </div>
            </div>
            <p className={styles.tagline}>Your Growth, Our Strategy</p>
            <p className={styles.description}>
              Redix Digital Solution helps brands grow with tailored digital strategies,
              creative content, and innovative technology that deliver measurable results.
            </p>
            
            {/* Social Media Links */}
            <div className={styles.socialMedia}>
              <h4>Follow Us</h4>
              <div className={styles.socialIcons}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label={`Follow us on ${social.name}`}
                    style={{ '--hover-color': social.color }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className={styles.column}>
            <h4>Contact Information</h4>
            <ul className={styles.contactList}>
              <li>
                <FaMapMarkerAlt />
                <span>Smart Technopark Manouuba, Tunisia</span>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:contact@redixsolutions.pro" aria-label="Email us">
                  contact@redixsolutions.pro
                </a>
              </li>
              <li>
                <FaGlobe />
                <a
                  href="https://redixsolutions.pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our website"
                >
                  redixsolutions.pro
                </a>
              </li>
              <li>
                <FaWhatsapp />
                <a 
                  href="https://wa.me/21692861655" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact us on WhatsApp"
                >
                  +216 92 861 655
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4>Services</h4>
            <ul className={styles.servicesList}>
              <li>Social Media Marketing</li>
              <li>Branding & Design</li>
              <li>Content Creation</li>
              <li>Web & Mobile Development</li>
              <li>Digital Advertising</li>
              <li>SEO Optimization</li>
              <li>Event Coverage</li>
              <li>Video Production</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul className={styles.linksList}>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#market" onClick={(e) => handleNavClick(e, '#market')}>
                  Market Analysis
                </a>
              </li>
              <li>
                <a href="#strategy" onClick={(e) => handleNavClick(e, '#strategy')}>
                  Strategy
                </a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => handleNavClick(e, '#packages')}>
                  Packages
                </a>
              </li>
              <li>
                <a 
                  href="https://redixsolutions.pro" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Main Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p>&copy; 2025 Redix Digital Solutions. All rights reserved.</p>
          <p>Prepared for ORLE Men's Skincare & Haircare Brand</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
