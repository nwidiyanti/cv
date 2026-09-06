import React from 'react';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div key={proj.id} className="project-card">
            <img src={proj.image} alt={proj.name} className="project-img" />
            <div className="project-content">
              <h3 className="project-title">{proj.name}</h3>
              <p>{proj.description}</p>
              <div className="project-tech">
                {proj.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FaGithub /> GitHub
                </a>
                <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
