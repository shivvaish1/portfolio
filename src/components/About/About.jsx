import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Microservices Built' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span> About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Shiv, a passionate Java Backend Developer who loves building
              scalable and efficient server-side applications. My journey in software development
              started with a curiosity about how large-scale systems work behind the scenes.
            </p>
            <p>
              I specialize in designing and implementing microservices architectures, RESTful APIs,
              and distributed systems. I enjoy solving complex problems and optimizing application
              performance to handle high traffic loads.
            </p>
            <p>
              When I'm not coding, I explore new technologies, contribute to open-source projects,
              and stay updated with the latest trends in backend development and system design.
            </p>
            <div className="about-highlights">
              <h4>Here are a few technologies I've been working with recently:</h4>
              <ul className="tech-list">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Microservices</li>
                <li>Hibernate/JPA</li>
                <li>MySQL/PostgreSQL</li>
                <li>Docker & Kubernetes</li>
              </ul>
            </div>
          </div>
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

