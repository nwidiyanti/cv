import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--bg-secondary)', padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <p style={{ color: 'var(--text-secondary)' }}>
          &copy; {new Date().getFullYear()} Nabila Widiyanti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
