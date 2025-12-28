import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>NFTme</Link>
        </div>
        
        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li>Store</li>
          <li>Games</li>
        </ul>
        
        <button className="wallet-btn">Connect Wallet</button>
        
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        {/* Mobile Menu */}
        <ul className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About us</Link></li>
          <li><Link to="/features" onClick={() => setMobileMenuOpen(false)}>Features</Link></li>
          <li onClick={() => setMobileMenuOpen(false)}>Store</li>
          <li onClick={() => setMobileMenuOpen(false)}>Games</li>
          <li>
            <button className="wallet-btn mobile-wallet" onClick={() => setMobileMenuOpen(false)}>
              Connect Wallet
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;