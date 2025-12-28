import React, { useState, useEffect } from 'react';
import NFTCard from './NFTCard';
import './HeroSection.css';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 18,
    minutes: 57,
    seconds: 14
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: "32k+", label: "Artwork" },
    { value: "20k+", label: "Auctions" },
    { value: "10k+", label: "Artists" }
  ];

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Discover Rare Collections Of <span className="highlight">Art & NFT's</span>
        </h1>
        <p className="hero-subtitle">
          Create, Explore, & Collect Digital Art NFTs
        </p>
        <button className="explore-btn">EXPLORE</button>
        
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <NFTCard timeLeft={timeLeft} />
    </section>
  );
};

export default HeroSection;