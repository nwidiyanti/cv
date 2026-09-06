import React from 'react';
import { education } from '../data/education';
import { FaUserGraduate } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="container">
      <h2 className="section-title">Education</h2>
      <div className="card-grid">
        {education.map((edu) => (
          <div key={edu.id} className="info-card">
            <FaUserGraduate className="info-icon" />
            <h3>{edu.institution}</h3>
            <h4>{edu.degree}</h4>
            <p style={{ margin: '0.5rem 0', fontStyle: 'italic', color: 'var(--text-secondary)' }}>{edu.period}</p>
            <p style={{ fontWeight: '600' }}>IPK {edu.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
