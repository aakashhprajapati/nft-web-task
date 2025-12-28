import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      title: "Secure Marketplace",
      description: "Blockchain-verified transactions with multi-layer security",
      icon: "🛡️"
    },
    {
      title: "Artist Tools",
      description: "Comprehensive suite for creating and managing NFTs",
      icon: "🎨"
    },
    {
      title: "Royalty System",
      description: "Automatic royalty payments for secondary sales",
      icon: "💰"
    },
    {
      title: "Cross-chain Support",
      description: "Multi-blockchain compatibility for maximum flexibility",
      icon: "⛓️"
    },
    {
      title: "Community Features",
      description: "Social features, collaborations, and community events",
      icon: "👥"
    },
    {
      title: "Mobile Access",
      description: "Full platform access on mobile devices",
      icon: "📱"
    }
  ];

  return (
    <div className="features-page">
      <section className="features-hero">
        <h1>Platform Features</h1>
        <p>Everything you need to explore, create, and trade NFTs</p>
      </section>
      
      <section className="features-grid-section">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;