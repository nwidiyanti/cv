import React, { useState } from 'react';
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from 'react-icons/md';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="container nav-container">
        <a href="#home" className="logo">NW.</a>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
          </button>
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', display: 'none' }} aria-label="Menu">
            {isOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
