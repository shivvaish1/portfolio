import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Background from './components/Background/Background';
import './App.css';

const sectionMap = [
  { id: 'hero', path: '/' },
  { id: 'about', path: '/about' },
  { id: 'skills', path: '/skills' },
  { id: 'projects', path: '/projects' },
  { id: 'contact', path: '/contact' },
];

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isScrollingTo = useRef(false);

  // Update URL on scroll using Intersection Observer
  useEffect(() => {
    const observers = [];

    const handleIntersect = (entries) => {
      if (isScrollingTo.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sectionMap.find((s) => s.id === entry.target.id);
          if (section && location.pathname !== section.path) {
            navigate(section.path, { replace: true });
          }
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    sectionMap.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [navigate, location.pathname]);

  // Scroll to section on direct URL access or navigation
  useEffect(() => {
    const section = sectionMap.find((s) => s.path === location.pathname);
    if (section) {
      const el = document.getElementById(section.id);
      if (el) {
        isScrollingTo.current = true;
        el.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          isScrollingTo.current = false;
        }, 1000);
      }
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

