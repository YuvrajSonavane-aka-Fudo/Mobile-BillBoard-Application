import React from 'react';
import './BigEventsCard.css';
import eventImage from './event.jpg';

const BigEventsCard = ({ text }) => {
  return (
    <div className="imageBackground" style={{ backgroundImage: `url(${eventImage})` }}>
      <div className="overlay">
        <span className="text"><a href="#">Explore all events</a></span>
        <a href="#" className="icon">➔</a>
      </div>
    </div>
  );
};

export default BigEventsCard;