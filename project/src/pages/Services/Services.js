import React from 'react';
import { motion } from 'framer-motion';
import { FaOilCan, FaTools, FaUsers, FaCogs, FaShieldAlt, FaVial, FaCheckCircle } from 'react-icons/fa';
import './Services.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const Services = () => {
  return (
    <div className="services-page">
      {/* 1. HERO SECTION */}
      <section className="services-hero">
        <motion.div 
          className="services-hero-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h4 className="gold-tag">TECHNICAL EXPERTISE</h4>
          <h1>Engineering <span>Specializations</span></h1>
          <p>Delivering high-performance offshore solutions with zero-incident precision.</p>
        </motion.div>
      </section>

      {/* 2. CORE SERVICES GRID (QUICK VIEW) */}
      <section className="services-intro container">
        <div className="center-header">
          <h2 className="section-title">Core <span>Services</span></h2>
          <p className="text-gray subtitle">From fabrication to commissioning, we support the entire project lifecycle.</p>
        </div>

        <div className="services-grid">
          {[
            { icon: <FaOilCan />, title: "Hydraulics", desc: "Advanced valve systems and pressure testing." },
            { icon: <FaTools />, title: "Structural", desc: "Expert fabrication and offshore erection." },
            { icon: <FaUsers />, title: "Manpower", desc: "Certified technical staff ready for mobilization." },
            { icon: <FaCogs />, title: "Troubleshooting", desc: "Asset reinstatement and system overhaul." }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="service-card-mini"
              whileHover={{ y: -10 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="mini-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. DETAILED SECTIONS */}
      
      {/* SECTION 01: HYDRAULICS */}
      <section className="detailed-service bg-darker">
        <div className="container grid-2">
          <motion.div 
            className="detail-text"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <div className="service-number">01</div>
            <h2>Hydraulic & <span>Valve Systems</span></h2>
            <p className="text-gray">
              We provide world-class hydraulic solutions for FPSO and Topside modules. 
              Our team ensures every system meets rigorous cleanliness and pressure standards.
            </p>
            <ul className="service-list">
              <li><FaCheckCircle className="list-icon"/> Multicore line preparation & termination</li>
              <li><FaCheckCircle className="list-icon"/> Valve installation, troubleshooting & repair</li>
              <li><FaCheckCircle className="list-icon"/> Chemical flushing & Pressure testing</li>
              <li><FaCheckCircle className="list-icon"/> ISO 4406 Cleanliness certification</li>
            </ul>
          </motion.div>
          <div className="detail-image">
            <img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200&auto=format&fit=crop" alt="Hydraulics" />
          </div>
        </div>
      </section>

      {/* SECTION 02: STRUCTURAL (REVERSED LAYOUT) */}
      <section className="detailed-service">
        <div className="container grid-2 reverse">
          <div className="detail-image">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop" alt="Structural" />
          </div>
          <motion.div 
            className="detail-text"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <div className="service-number">02</div>
            <h2>Piping & <span>Structural Works</span></h2>
            <p className="text-gray">
              Our structural team handles complex offshore builds with an emphasis 
              on QA/QC and non-destructive testing (NDT) to ensure asset integrity.
            </p>
            <ul className="service-list">
              <li><FaCheckCircle className="list-icon"/> Fabrication & Erection of modules</li>
              <li><FaCheckCircle className="list-icon"/> Certified Welding supervision</li>
              <li><FaCheckCircle className="list-icon"/> NDT Coordination & Documentation</li>
              <li><FaCheckCircle className="list-icon"/> Asset Reinstatement & Structural repair</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SECTION 03: MANPOWER */}
      <section className="detailed-service bg-darker">
        <div className="container grid-2">
          <motion.div 
            className="detail-text"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <div className="service-number">03</div>
            <h2>Technical <span>Manpower Supply</span></h2>
            <p className="text-gray">
              Bridging the skills gap by providing highly certified technicians 
              and inspectors ready for immediate 24/7 global mobilization.
            </p>
            <ul className="service-list">
              <li><FaCheckCircle className="list-icon"/> QA/QC & E&I Inspectors</li>
              <li><FaCheckCircle className="list-icon"/> Certified Welders & Pipe Fitters</li>
              <li><FaCheckCircle className="list-icon"/> Specialized Hydraulic Technicians</li>
              <li><FaCheckCircle className="list-icon"/> Commissioning & Safety Officers</li>
            </ul>
          </motion.div>
          <div className="detail-image">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" alt="Manpower" />
          </div>
        </div>
      </section>

      {/* 4. QUALITY FOOTER BANNER */}
      <section className="quality-banner container">
        <motion.div 
           className="quality-card"
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
        >
          <FaShieldAlt className="q-icon" />
          <h2>Committed to Global Standards</h2>
          <p>Execution in full compliance with <b>ISO, bizSAFE STAR, and IAS</b> standards.</p>
          <button className="btn-gold" style={{marginTop: '25px'}}>Download Credentials</button>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;