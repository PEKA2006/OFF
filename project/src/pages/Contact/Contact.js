import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import emailjs from '@emailjs/browser'; // 1. Import EmailJS
import './Contact.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    company: '', 
    message: '' 
  });
  
  const [isSending, setIsSending] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    const SERVICE_ID = "service_d8j536u";
    const TEMPLATE_ID = "template_ngksoad";
    const PUBLIC_KEY = "tBk6s6697etb7cUoqe6SV";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_company: formData.company,
      message: formData.message,
      to_name: "Chams Offshore Admin"
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert(`Thank you ${formData.name}! Your inquiry has been sent successfully.`);
        setFormData({ name: '', email: '', company: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert("Failed to send the message. Please try again or contact us via WhatsApp.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="contact-hero-content">
          <h4 className="gold-tag">GET IN TOUCH</h4>
          <h1>Contact <span>Chams Offshore</span></h1>
          <p>Global technical support and mobilization is just a message away.</p>
        </motion.div>
      </section>

      <section className="contact-main container">
        <div className="grid-contact">
          <motion.div className="contact-info" initial="hidden" whileInView="visible" variants={fadeInUp}>
            <h2 className="section-title">Technical <span>Inquiries</span></h2>
            <p className="text-gray">Our mobilization team is available 24/7 for urgent offshore technical requirements.</p>

            <div className="info-cards">
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <h4>Office Address</h4>
                  <p>Singapore Headquarters, Jurong East</p>
                </div>
              </div>
              <div className="info-item">
                <FaPhoneAlt className="info-icon" />
                <div>
                  <h4>Phone Support</h4>
                  <p>+65 XXXX XXXX</p>
                </div>
              </div>
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <h4>Email Us</h4>
                  <p>info@chamsoffshore.com</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/65XXXXXXX" target="_blank" rel="noopener noreferrer" className="whatsapp-direct-link">
              <FaWhatsapp /> Chat via WhatsApp
            </a>
          </motion.div>

          <motion.div className="form-container" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}>
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Send a Message</h3>
              <div className="input-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="input-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Corporate Email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="input-group">
                <input 
                  type="text" 
                  name="company" 
                  placeholder="Company Name" 
                  value={formData.company} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="input-group">
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder="Your Inquiry / Project Details" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-gold-submit" 
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <motion.a 
        href="https://wa.me/65XXXXXXX" 
        className="floating-whatsapp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp />
      </motion.a>
    </div>
  );
};

export default Contact;