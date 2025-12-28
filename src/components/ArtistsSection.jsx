import React from 'react';
import './ArtistsSection.css';

const ArtistsSection = () => {
  const artists = [
    { name: "Fenhat Deniz", role: "Digital Artist" },
    { name: "Sebastian", role: "3D Artist" },
    { name: "Javier Miranda", role: "Pixel Artist" },
    { name: "Erick Butler", role: "AI Artist" }
  ];

  return (
    <section className="artists-section">
      <div className="section-header">
        <h2 className="section-title">Popular Artists</h2>
        <p className="section-subtitle">Discover top artists in the NFT space</p>
      </div>
      
      <div className="artists-grid">
        {artists.map((artist, index) => (
          <div key={index} className="artist-card">
            <div className="artist-avatar">
              <div className="avatar-placeholder">
                {artist.name.charAt(0)}
              </div>
            </div>
            <div className="artist-info">
              <h3 className="artist-name">{artist.name}</h3>
              <p className="artist-role">{artist.role}</p>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtistsSection;