import React from 'react';
import { motion } from 'framer-motion';
import { FaOilCan, FaTools, FaUsers, FaShieldAlt, FaShip } from 'react-icons/fa';
import './Home.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const Home = () => {
  return (
    <div className="home-page">

      {/* 1. HERO SECTION */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeInUp} className="hero-top-text">
            Premier Offshore Engineering
          </motion.p>

          <motion.h1 variants={fadeInUp} className="hero-title">
            Built on Trust. <br />
            <span>Focused on Quality.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="hero-description">
            Leading specialized offshore and onshore oil & gas services.
            From FPSO integration to high-pressure hydraulic systems, we deliver reliability.
          </motion.p>

          <motion.div variants={fadeInUp} className="hero-btns">
            <button className="btn-gold">Our Expertise</button>
            <button className="btn-outline">View Projects</button>
          </motion.div>
        </motion.div>

        {/* FIXED EXPLORE INDICATOR */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span>EXPLORE</span>
          <div className="line"></div>
        </motion.div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="stat-card">
              <h2>10+</h2>
              <p>Years of Excellence</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="stat-card">
              <h2>Zero</h2>
              <p>LTI Safety Record</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="stat-card">
              <h2>24/7</h2>
              <p>Global Mobilization</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT PREVIEW */}
      <section className="about-preview">
        <div className="container grid-2">

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="section-tag">Who We Are</h4>
            <h2 className="section-title">
              Your Trusted Partner in <span>Offshore Engineering</span>
            </h2>
            <p className="text-gray">
              CHAMS OFFSHORE is a specialized service provider for the global oil and gas industry.
              We bridge the gap between complex engineering requirements and field execution.
              Our team excels in delivering cost-effective, high-quality engineering services from
              fabrication to final commissioning.
            </p>
            <button className="btn-text">Read Our Full Story →</button>
          </motion.div>

          <motion.div
            className="about-image-box"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000"
              alt="Engineers"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. CORE EXPERTISE */}
      <section className="expertise-section">
        <div className="container">
          <div className="center-header">
            <h4 className="section-tag">Core Expertise</h4>
            <h2 className="section-title">
              Technical <span>Specialization</span>
            </h2>
          </div>

          <div className="expertise-grid">
            <motion.div className="exp-card" whileHover={{ y: -10 }}>
              <FaOilCan className="exp-icon" />
              <h3>Hydraulic Systems</h3>
              <p>Multicore line preparation, valve installation, flushing, and pressure testing to ISO 4406 standards.</p>
            </motion.div>

            <motion.div className="exp-card" whileHover={{ y: -10 }}>
              <FaTools className="exp-icon" />
              <h3>Piping & Structural</h3>
              <p>Expert fabrication, erection, welding supervision, and NDT coordination for FPSO and Topside modules.</p>
            </motion.div>

            <motion.div className="exp-card" whileHover={{ y: -10 }}>
              <FaUsers className="exp-icon" />
              <h3>Technical Manpower</h3>
              <p>Supply of certified QA/QC inspectors, hydraulic technicians, and commissioning officers globally.</p>
            </motion.div>

            <motion.div className="exp-card" whileHover={{ y: -10 }}>
              <FaShip className="exp-icon" />
              <h3>FPSO Integration</h3>
              <p>Comprehensive support for offshore platform integration, troubleshooting, and asset reinstatement.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. QHSE BANNER */}
      <section className="qhse-banner">
        <div className="container">
          <div className="qhse-content">
            <FaShieldAlt className="qhse-icon" />
            <h2>Committed to Safety & Quality</h2>
            <p>
              Our operations comply with <b>bizSAFE STAR</b> and <b>ISO</b> standards.
              We maintain a "Zero Incident" culture across all global projects.
            </p>

            <div className="badges">
              <span>ISO 4406 Cleanliness</span>
              <span>IAS Accredited</span>
              <span>bizSAFE Star</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-box"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
          >
            <h2>Ready to Mobilize?</h2>
            <p>Contact our technical team for project inquiries or manpower supply requirements.</p>
            <button className="btn-gold">Request a Quote</button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
