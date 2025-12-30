import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaBullseye, FaHandshake, FaUserShield, FaClock, FaAward } from 'react-icons/fa';
import './About.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const About = () => {
  return (
    <div className="about-page">
      {/* 1. ABOUT HERO */}
      <section className="about-hero">
        <motion.div 
          className="about-hero-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h4 className="gold-tag">GLOBAL SOLUTIONS</h4>
          <h1>About <span>Chams Offshore</span></h1>
          <p>Delivering precision engineering and specialized offshore services for over a decade.</p>
        </motion.div>
      </section>

      {/* 2. COMPANY OVERVIEW */}
      <section className="overview-section container">
        <div className="grid-2">
          <motion.div 
            className="overview-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h4 className="section-tag">Our History</h4>
            <h2 className="section-title">Experience That <span>Drives Excellence</span></h2>
            <p className="text-gray">
              CHAMS OFFSHORE is a specialized engineering service provider for the global oil and gas industry. 
              We focus on delivering cost-effective, high-quality services from fabrication and installation 
              to final commissioning.
            </p>
            <p className="text-gray">
              Our expertise in mobilizing technical manpower for complex FPSO and Topside projects 
              allows us to meet the rigorous demands of offshore operators worldwide.
            </p>
            
            <div className="experience-badge">
                <div className="badge-number">10+</div>
                <div className="badge-text">Years of Successful <br/>Project Delivery</div>
            </div>
          </motion.div>

          <motion.div 
            className="overview-image-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {/* UPDATED IMAGE LINK BELOW */}
            <img 
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=1200&auto=format&fit=crop" 
                alt="Engineering Planning" 
                className="main-about-img"
            />
            <div className="img-accent-border"></div>
          </motion.div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="vm-section">
        <div className="container grid-2">
          <motion.div className="vm-card" whileHover={{ y: -10 }} initial="hidden" whileInView="visible" variants={fadeInUp}>
            <FaEye className="vm-icon" />
            <h3>Our Vision</h3>
            <p>To be the premier technical partner in the energy sector, recognized globally for safety, quality, and engineering precision.</p>
          </motion.div>

          <motion.div className="vm-card gold-border" whileHover={{ y: -10 }} initial="hidden" whileInView="visible" variants={fadeInUp}>
            <FaBullseye className="vm-icon" />
            <h3>Our Mission</h3>
            <p>Providing reliable offshore engineering services that empower our clients while ensuring a zero-incident safety environment.</p>
          </motion.div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="values-section container">
        <div className="center-header">
            <h4 className="section-tag">Our Foundations</h4>
            <h2 className="section-title">Core <span>Values</span></h2>
        </div>
        <div className="values-grid">
          {[
            { icon: <FaUserShield />, title: "Safety First", desc: "Committed to bizSAFE Star standards in every operation." },
            { icon: <FaAward />, title: "Quality", desc: "Adhering to ISO standards and rigorous QA/QC protocols." },
            { icon: <FaClock />, title: "Reliability", desc: "Consistent performance in tight offshore mobilization windows." },
            { icon: <FaHandshake />, title: "Teamwork", desc: "Collaborative approach with EPCs and Global Operators." }
          ].map((val, index) => (
            <motion.div key={index} className="value-item" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <div className="value-icon-box">{val.icon}</div>
              <h4>{val.title}</h4>
              <p>{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;