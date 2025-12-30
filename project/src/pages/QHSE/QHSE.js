
import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLeaf, FaCheckDouble, FaHandPaper, FaHardHat, FaMicroscope, FaExclamationTriangle } from 'react-icons/fa';
import './QHSE.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const QHSE = () => {
  return (
    <div className="qhse-page">
      {/* 1. HERO SECTION */}
      <section className="qhse-hero">
        <motion.div 
          className="qhse-hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h4 className="gold-tag">SAFETY FIRST, ALWAYS</h4>
          <h1>QHSE <span>Commitment</span></h1>
          <p>Maintaining a Zero-Incident culture through rigorous standards and continuous improvement.</p>
        </motion.div>
      </section>

      {/* 2. OUR COMMITMENT */}
      <section className="qhse-intro container">
        <div className="grid-2">
           <motion.div initial="hidden" whileInView="visible" variants={fadeInUp}>
              <h4 className="section-tag">Core Culture</h4>
              <h2 className="section-title">A Legacy of <span>Safe Operations</span></h2>
              <p className="text-gray">
                At CHAMS OFFSHORE, safety is not just a policy; it is our foundation. We adhere 
                to international best practices to protect our people, our clients' assets, 
                and the marine environment.
              </p>
              <div className="qhse-highlight">
                 <FaCheckDouble className="gold-icon" />
                 <span>Fully compliant with bizSAFE STAR & ISO Standards.</span>
              </div>
           </motion.div>
           <motion.div className="qhse-stats-box" initial={{ scale: 0.9 }} whileInView={{ scale: 1 }}>
              <div className="big-stat">
                 <span>ZERO</span>
                 <p>LTI (Lost Time Injuries)</p>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 3. THE FOUR PILLARS */}
      <section className="pillars-section">
        <div className="container">
          <div className="pillars-grid">
            <div className="pillar-card">
               <FaShieldAlt className="p-icon" />
               <h3>Quality</h3>
               <p>Rigorous QA/QC protocols and ISO 4406 cleanliness standards for every hydraulic and structural project.</p>
            </div>
            <div className="pillar-card">
               <FaHardHat className="p-icon" />
               <h3>Health</h3>
               <p>Ensuring the physical and mental well-being of our global technical teams during offshore mobilization.</p>
            </div>
            <div className="pillar-card">
               <FaHandPaper className="p-icon" />
               <h3>Safety</h3>
               <p>Continuous training and proactive risk assessments to eliminate workplace hazards before they occur.</p>
            </div>
            <div className="pillar-card">
               <FaLeaf className="p-icon" />
               <h3>Environment</h3>
               <p>Strict pollution control and waste management to protect the delicate marine ecosystems we work in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAFETY RULES (The "Life Saving" Section) */}
      <section className="safety-rules container">
        <div className="center-header">
           <h4 className="section-tag">Operating Procedures</h4>
           <h2 className="section-title">Life Saving <span>Rules</span></h2>
        </div>
        <div className="rules-grid">
           <div className="rule-item">
              <FaHandPaper className="rule-icon" />
              <h4>Stop Work Authority</h4>
              <p>Every employee has the right and duty to stop any work they deem unsafe.</p>
           </div>
           <div className="rule-item">
              <FaExclamationTriangle className="rule-icon" />
              <h4>Risk Assessment</h4>
              <p>Mandatory JSA (Job Safety Analysis) before starting any technical task.</p>
           </div>
           <div className="rule-item">
              <FaMicroscope className="rule-icon" />
              <h4>Cleanliness Control</h4>
              <p>Strict adherence to ISO 4406 to prevent hydraulic system contamination.</p>
           </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS GRID */}
      <section className="certs-section">
        <div className="container">
           <div className="certs-box">
              <h3>Our Accreditations</h3>
              <div className="certs-flex">
                 <div className="cert-logo">ISO 9001:2015</div>
                 <div className="cert-logo">bizSAFE STAR</div>
                 <div className="cert-logo">IAS ACCREDITED</div>
                 <div className="cert-logo">ISO 4406</div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default QHSE;