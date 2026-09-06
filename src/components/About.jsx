import React from 'react';
import profilePlaceholder from '../assets/images/profile-placeholder.png';

const About = () => {
  return (
    <section id="about" className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div>
          <img src={profilePlaceholder} alt="Nabila Widiyanti" className="about-img" />
        </div>
        <div>
          <p>
            Saya Nabila Widiyanti, fresh graduate dari Universitas Muslim Indonesia Makassar, Fakultas Ilmu Komputer, Program Studi Teknik Informatika, dengan IPK 3,56. Selama menempuh pendidikan, saya mengembangkan kemampuan di bidang teknologi informasi, pemecahan masalah, serta bekerja secara teliti dan sistematis.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Saya memiliki pengalaman magang di PLN UID Sulselrabar pada bagian Sistem Teknologi Informasi (STI), di mana saya memperoleh pengalaman dalam mendukung operasional teknologi informasi serta bekerja dalam lingkungan profesional. Pengalaman tersebut membantu saya meningkatkan kemampuan komunikasi, kerja sama tim, dan adaptasi terhadap dunia kerja. Saat ini, saya bekerja sebagai Admin di Butik Sewa Kebaya Makassar. Melalui pekerjaan ini, saya terbiasa mengelola administrasi, melayani pelanggan, mengatur data, membuat konten menarik serta memastikan operasional berjalan dengan baik. Saya merupakan pribadi yang cepat belajar, bertanggung jawab, disiplin, dan memiliki motivasi tinggi untuk terus mengembangkan kemampuan serta memberikan kontribusi terbaik di lingkungan kerja.
          </p>
          
          <div className="about-stats">
            <div className="stat-card">
              <h4>2026</h4>
              <p>Graduate</p>
            </div>
            <div className="stat-card">
              <h4>3.56</h4>
              <p>GPA</p>
            </div>
            <div className="stat-card">
              <h4>2</h4>
              <p>Work Experiences</p>
            </div>
            <div className="stat-card">
              <h4>DP-900</h4>
              <p>Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
