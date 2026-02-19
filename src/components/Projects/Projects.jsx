import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Hotel Management System',
      description: 'A comprehensive hotel management solution with room booking, guest management, billing, and reporting features. Built with Spring Boot microservices architecture for scalability and maintainability.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'Hibernate'],
      github: 'https://github.com/',
      live: '#',
      image: '🏨'
    },
    {
      title: 'ConnectPro - Professional Network',
      description: 'A LinkedIn-like professional networking platform enabling users to connect, share posts, apply for jobs, and build their professional profiles. Features real-time messaging and job recommendations.',
      tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Microservices'],
      github: 'https://github.com/',
      live: '#',
      image: '💼'
    },
    {
      title: 'BuilderAI - AI App Generator',
      description: 'A Lovable-inspired platform that lets users create full-stack applications and websites by chatting with AI. Features natural language processing, code generation, real-time preview, and one-click deployment using microservices architecture.',
      tech: ['Java', 'Spring Boot', 'Kafka', 'MongoDB', 'Docker', 'Kubernetes'],
      github: 'https://github.com/',
      live: '#',
      image: '🤖'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">03.</span> Featured Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

