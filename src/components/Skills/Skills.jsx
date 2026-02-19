import React from 'react';
import {
  FaJava, FaDocker, FaAws, FaGitAlt, FaLinux, FaDatabase
} from 'react-icons/fa';
import {
  SiSpringboot, SiMysql, SiPostgresql, SiMongodb, SiRedis,
  SiApachekafka, SiKubernetes, SiJenkins, SiHibernate, SiApachetomcat,
  SiPostman, SiSwagger
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java', icon: <FaJava /> },
        { name: 'Spring Boot', icon: <SiSpringboot /> },
        { name: 'Hibernate/JPA', icon: <SiHibernate /> },
        { name: 'REST APIs', icon: <SiSwagger /> },
        { name: 'Microservices', icon: <SiApachetomcat /> },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Redis', icon: <SiRedis /> },
      ]
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Kubernetes', icon: <SiKubernetes /> },
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Jenkins', icon: <SiJenkins /> },
        { name: 'Linux', icon: <FaLinux /> },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'Kafka', icon: <SiApachekafka /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'SQL', icon: <FaDatabase /> },
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">02.</span> Skills & Technologies
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

