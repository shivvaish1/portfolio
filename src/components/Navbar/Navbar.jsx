import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', to: '/', sectionId: 'hero' },
    { name: 'About', to: '/about', sectionId: 'about' },
    { name: 'Skills', to: '/skills', sectionId: 'skills' },
    { name: 'Projects', to: '/projects', sectionId: 'projects' },
    { name: 'Contact', to: '/contact', sectionId: 'contact' },
  ];

  const handleNavClick = (link) => {
    closeMenu();
    navigate(link.to);
    const el = document.getElementById(link.sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <span className="logo" onClick={() => handleNavClick(navLinks[0])} style={{ cursor: 'pointer' }}>
          &lt;Shiv&gt;
        </span>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <span
              key={index}
              className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
              onClick={() => handleNavClick(link)}
              style={{ cursor: 'pointer' }}
            >
              {link.name}
            </span>
          ))}
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

