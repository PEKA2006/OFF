import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'QHSE', path: '/qhse' },
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          {/* FIXED: Using direct string path to public folder and corrected filename to logo.png */}
          <img src="/assets/logos/logo1.png" alt="Chams Offshore Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name} className="nav-item">
              <Link to={link.path} className={location.pathname === link.path ? 'active' : ''}>
                {link.name}
                {location.pathname === link.path && (
                  <motion.div layoutId="underline" className="nav-underline" />
                )}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className="nav-contact-btn">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Burger Icon */}
        <div className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            className="mobile-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.name} onClick={() => setMobileMenu(false)}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
              <li onClick={() => setMobileMenu(false)}>
                <Link to="/contact" className="mobile-contact-btn">Contact Us</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;