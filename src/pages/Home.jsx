import React from 'react';
import HeroSection from '../components/HeroSection';
import ArtistsSection from '../components/ArtistsSection';
import CommunitySection from '../components/CommunitySection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ArtistsSection />
      <CommunitySection />
    </div>
  );
};

export default Home;