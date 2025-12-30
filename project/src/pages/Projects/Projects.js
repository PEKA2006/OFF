import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaAnchor, FaCheckCircle } from 'react-icons/fa';
import './Projects.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const projectData = [
  {
    id: 1,
    title: "FPSO Integration Project",
    location: "Singapore / Offshore",
    category: "Hydraulics & Piping",
    image: "https://images.unsplash.com/photo-1544320290-8c9e9053974d?q=80&w=1000",
    scope: ["Multicore line preparation", "Valve installation", "Pressure testing to ISO 4406"]
  },
  {
    id: 2,
    title: "Topside Module Fabrication",
    location: "International Waters",
    category: "Structural Works",
    image: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?q=80&w=1000",
    scope: ["Structural Erection", "NDT Coordination", "Welding Supervision"]
  },
  {
    id: 3,
    title: "FPU Commissioning Support",
    location: "Southeast Asia",
    category: "Technical Manpower",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000",
    scope: ["Commissioning Officers", "QA/QC Inspection", "Asset Reinstatement"]
  },
  {
    id: 4,
    title: "Hydraulic System Overhaul",
    location: "Onshore Facility",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000",
    scope: ["Troubleshooting", "Chemical Flushing", "System Certification"]
  }
];

const Projects = () => {
  return (
    <div className="projects-page">
      {/* 1. HERO SECTION */}
      <section className="projects-hero">
        <motion.div 
          className="projects-hero-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h4 className="gold-tag">OUR TRACK RECORD</h4>
          <h1>Project <span>Experience</span></h1>
          <p>Successful delivery of complex offshore engineering scopes for global EPC contractors.</p>
        </motion.div>
      </section>

      {/* 2. PROJECTS GRID */}
      <section className="projects-grid-section container">
        <div className="projects-grid">
          {projectData.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="category-tag">{project.category}</span>
                </div>
              </div>
              <div className="project-info">
                <div className="project-loc">
                  <FaMapMarkerAlt /> <span>{project.location}</span>
                </div>
                <h3>{project.title}</h3>
                <ul className="project-scope-list">
                  {project.scope.map((item, i) => (
                    <li key={i}><FaCheckCircle className="check-icon" /> {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CAPABILITY STATEMENT */}
      <section className="capability-section">
        <div className="container">
          <div className="capability-box">
             <FaAnchor className="cap-icon" />
             <h2>Global Mobilization Ready</h2>
             <p>Our team is equipped to support FPSO, FPU, and Topside module projects across the globe with zero-incident safety commitment.</p>
             <button className="btn-gold">Request Credentials</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;