import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLinkedin, FaFacebook, FaChevronRight, 
  FaEnvelopeOpenText, FaMapMarkerAlt, FaPhoneAlt, 
  FaEnvelope, FaArrowUp, FaClock 
} from 'react-icons/fa';
import logo from '../../assets/logos/logo.jpeg';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* --- TOP FOOTER / NEWSLETTER --- */}
      <div className="footer-newsletter">
        <div className="container newsletter-flex">
          <div className="news-text">
            <FaEnvelopeOpenText className="news-icon" />
            <div>
              <h3>Subscribe to Technical Updates</h3>
              <p>Stay informed about our latest offshore projects and mobilization news.</p>
            </div>
          </div>
          <form className="news-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter corporate email..." required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* --- MAIN FOOTER CONTENT --- */}
      <div className="container footer-grid">
        {/* Column 1: Brand */}
        <div className="footer-col brand-col">
          <img src={logo} alt="Chams Offshore" className="footer-logo" />
          <p className="brand-desc">
            A premier provider of specialized offshore and onshore engineering solutions. 
            Delivering technical excellence with a Zero-Incident safety commitment.
          </p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul className="f-links">
            <li><Link to="/"><FaChevronRight className="bullet"/> Home</Link></li>
            <li><Link to="/about"><FaChevronRight className="bullet"/> About Us</Link></li>
            <li><Link to="/services"><FaChevronRight className="bullet"/> Our Services</Link></li>
            <li><Link to="/projects"><FaChevronRight className="bullet"/> Experience</Link></li>
            <li><Link to="/qhse"><FaChevronRight className="bullet"/> Safety & QHSE</Link></li>
            <li><Link to="/contact"><FaChevronRight className="bullet"/> Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Core Expertise (SEO Friendly) */}
        <div className="footer-col">
          <h4>Our Expertise</h4>
          <ul className="f-links">
            <li><Link to="/services"><FaChevronRight className="bullet"/> Hydraulic Systems</Link></li>
            <li><Link to="/services"><FaChevronRight className="bullet"/> Structural Works</Link></li>
            <li><Link to="/services"><FaChevronRight className="bullet"/> Manpower Supply</Link></li>
            <li><Link to="/services"><FaChevronRight className="bullet"/> FPSO Integration</Link></li>
            <li><Link to="/services"><FaChevronRight className="bullet"/> Valve Troubleshooting</Link></li>
            <li><Link to="/services"><FaChevronRight className="bullet"/> Pressure Testing</Link></li>
          </ul>
        </div>

        {/* Column 4: Global Headquarters */}
        <div className="footer-col">
          <h4>Headquarters</h4>
          <div className="contact-details">
            <div className="c-item">
              <FaMapMarkerAlt className="c-icon" />
              <span>Jurong East, Singapore <br/> (Regional Hub)</span>
            </div>
            <div className="c-item">
              <FaPhoneAlt className="c-icon" />
              <span>+65 XXXX XXXX</span>
            </div>
            <div className="c-item">
              <FaEnvelope className="c-icon" />
              <span>info@chamsoffshore.com</span>
            </div>
            <div className="c-item">
              <FaClock className="c-icon" />
              <span>Mon - Fri: 08:00 - 18:00 <br/> (24/7 Mobilization Support)</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- ACCREDITATIONS STRIP --- */}
      <div className="container footer-certs">
        <div className="cert-item">ISO 9001:2015</div>
        <div className="cert-item">bizSAFE STAR</div>
        <div className="cert-item">IAS ACCREDITED</div>
        <div className="cert-item">ISO 4406 STANDARDS</div>
      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>&copy; {new Date().getFullYear()} Chams Offshore Engineering Pte Ltd.</p>
          <ul className="legal-links">
            <li><Link to="#">Privacy Policy</Link></li>
            <li><Link to="#">Terms of Service</Link></li>
            <li><Link to="#">Cookie Policy</Link></li>
          </ul>
          <button className="back-to-top" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;