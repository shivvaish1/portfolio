import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
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
          <Link to="/projects" className="btn btn-primary">
            View My Work
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Get In Touch
          </Link>
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

