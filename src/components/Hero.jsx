import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <h1>NABILA WIDIYANTI</h1>
        <h2>Data Administration, IT Support</h2>
        <h3>Data Management • IT Support • Digital Content Creation • Administrative Support</h3>
        <p className="hero-desc">
          Fresh graduate Teknik Informatika dengan minat dan keahlian di bidang dukungan teknologi informasi (IT Support), pengelolaan data, administrasi operasional, serta pembuatan konten digital modern yang kreatif dan interaktif.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Projects</a>
          <a href="/CV_Nabila_Widiyanti.pdf" target="_blank" rel="noopener noreferrer" download className="btn btn-outline">Download CV</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', fontSize: '1.5rem' }}>
          <a href="https://www.linkedin.com/in/nabila-widiyanti-920998404/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://github.com/nwidiyanti" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="#contact" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
