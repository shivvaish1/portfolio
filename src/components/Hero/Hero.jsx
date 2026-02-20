import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId, path) => {
    navigate(path);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Shiv</h1>
        <h2 className="hero-title">Java Backend Developer</h2>
        <p className="hero-description">
          I build robust, scalable backend systems using Java and Microservices architecture.
          Passionate about clean code, system design, and creating high-performance applications.
        </p>
        <div className="hero-buttons">
          <span className="btn btn-primary" onClick={() => scrollToSection('projects', '/projects')} style={{ cursor: 'pointer' }}>
            View My Work
          </span>
          <span className="btn btn-outline" onClick={() => scrollToSection('contact', '/contact')} style={{ cursor: 'pointer' }}>
            Get In Touch
          </span>
        </div>
        <div className="hero-social">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-wrapper">
          <div className="profile-placeholder">
            <span>S</span>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;

