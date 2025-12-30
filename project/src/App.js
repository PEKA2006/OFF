import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About'; 
import Services from './pages/Services/Services'; // Real Services Page
import './App.css';
import Footer from './components/Footer/Footer';
import QHSE from './pages/QHSE/QHSE';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
//const Contact = () => <div className="placeholder">Contact Page Content Coming Soon</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/services" element={<Services />} /> {/* Uses the Real Component */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/qhse" element={<QHSE />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;