import React from 'react';
import './NFTCard.css';

const NFTCard = ({ timeLeft }) => {
  return (
    <div className="nft-card">
      <div className="card-header">
        <span className="card-tag">Trending</span>
        <span className="card-time">
          Remaining Time: {timeLeft.hours}h: {timeLeft.minutes}m: {timeLeft.seconds}s
        </span>
      </div>
      
      <div className="card-image-placeholder">
        {/* In a real app, this would be an img tag */}
        <div className="image-fallback">NFT Preview</div>
      </div>
      
      <div className="card-details">
        <h3 className="card-title">Abstract Art Collection #123</h3>
        
        <div className="bid-info">
          <div className="current-bid">
            <span className="label">Current Bid</span>
            <span className="value">4.8 ETH</span>
          </div>
          
          <div className="previous-bid">
            <span className="label">Previous Bid</span>
            <span className="value">3.9 ETH</span>
          </div>
        </div>
        
        <button className="bid-btn">PLACE A BID</button>
      </div>
    </div>
  );
};

export default NFTCard;