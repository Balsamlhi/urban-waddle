import React from 'react';
import './StatsCard.css';

const StatsCard = ({ color, title, value }) => {
  return (
    <div className="stats-card">
      <div className="stats-card-content">
        <div className="stats-icon" style={{ borderColor: color }}>
          <div className="stats-icon-inner" style={{ backgroundColor: color }}></div>
        </div>
        <div className="stats-info">
          <h3>{title}</h3>
          <p>{value}</p>
        </div>
      </div>
      <div className="stats-progress" style={{ backgroundColor: color, width: '70%' }}></div>
    </div>
  );
};

export default StatsCard;
