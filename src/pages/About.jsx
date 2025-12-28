import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About NFTme</h1>
        <p>Revolutionizing digital art ownership through blockchain technology</p>
      </section>
      
      <section className="about-content">
        <div className="about-grid">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To democratize art ownership and empower artists worldwide by 
              providing a secure, accessible platform for NFT creation and trading.
            </p>
          </div>
          
          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              A world where every digital creator can monetize their work and 
              every collector can own verifiable digital assets.
            </p>
          </div>
          
          <div className="about-card">
            <h3>Our Team</h3>
            <p>
              A diverse group of blockchain experts, artists, and tech enthusiasts 
              passionate about the future of digital ownership.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;