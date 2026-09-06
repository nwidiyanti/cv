import React from 'react';
import { skills } from '../data/skills';
import * as Icons from 'react-icons/fa';
import * as IconsIo from 'react-icons/io';
import * as IconsMd from 'react-icons/md';
import * as IconsSi from 'react-icons/si';
import * as IconsTb from 'react-icons/tb';

const getIcon = (iconName) => {
  const Icon = Icons[iconName] || IconsIo[iconName] || IconsMd[iconName] || IconsSi[iconName] || IconsTb[iconName];
  return Icon ? <Icon /> : null;
};

const Skills = () => {
  return (
    <section id="skills" className="container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((cat, idx) => (
          <div key={idx} className="skill-category">
            <h3>{cat.category}</h3>
            <div className="skill-list">
              {cat.items.map((skill, i) => (
                <div key={i} className="skill-item">
                  <span className="skill-icon">{getIcon(skill.icon)}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
