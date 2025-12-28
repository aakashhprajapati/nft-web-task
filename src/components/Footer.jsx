import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const footerLinks = {
    "Explore": ["Marketplace", "Collections", "Trending"],
    "Marketplace": ["All NFTs", "Art", "Gaming", "Photography"],
    "Artists": ["Featured", "Popular", "New"],
    "Contact": ["Support", "Partnership", "Press"]
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">NFTme</h2>
          <p className="footer-tagline">
            Discover, collect, and sell extraordinary NFTs
          </p>
        </div>
        
        <div className="footer-links">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="link-column">
              <h3 className="link-title">{category}</h3>
              <ul className="link-list">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link to={`/${link.toLowerCase()}`}>{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 NFTme. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;