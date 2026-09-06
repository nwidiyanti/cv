import React from 'react';
import { certifications } from '../data/certifications';
import { FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  return (
    <section id="certifications" className="container">
      <h2 className="section-title">Certifications</h2>
      <div className="card-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="info-card">
            <FaCertificate className="info-icon" />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{cert.name}</h3>
            <p style={{ fontWeight: '500' }}>{cert.issuer}</p>
            <p style={{ margin: '0.5rem 0', fontStyle: 'italic', color: 'var(--text-secondary)' }}>{cert.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
