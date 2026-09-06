import React from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="container">
      <h2 className="section-title">Contact</h2>
      <div className="contact-container">
        <p style={{ marginBottom: '2rem' }}>
          Tertarik untuk bekerja sama atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope style={{ color: 'var(--accent-color)' }} />
            <a href="mailto:nwidiyanti321@gmail.com">nwidiyanti321@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaWhatsapp style={{ color: 'var(--accent-color)' }} />
            <a href="https://wa.me/6288970088057" target="_blank" rel="noopener noreferrer">088970088057</a>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
            <span>perumahan villa mutiara, jl.hijau 18 no.2 RT/RW 004/011, Kel.Bulurokeng, Kec.Biringkanaya</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
          <a href="mailto:nwidiyanti321@gmail.com" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaEnvelope /> Email Me
          </a>
          <a href="https://wa.me/6288970088057" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="/CV_Nabila_Widiyanti.pdf" target="_blank" rel="noopener noreferrer" download className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
