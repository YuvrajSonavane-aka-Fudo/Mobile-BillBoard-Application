import React from 'react';
import { Link } from 'react-router-dom';
import './SmallEventsCard.css';
import emptyStateImage from './empty-state.png';

const SmallEventsCard = ({ text }) => {
  return (
    <div className="smallCardBackground">
      <img src={emptyStateImage} alt="Empty state" className="emptyStateImage" />
      <div className="overlay">
        <span className="text">
          <Link to="/login">Login</Link> or <Link to="/register">Sign Up</Link>
        </span>
        <Link to="/login" className="icon">➔</Link>
      </div>
    </div>
  );
};

export default SmallEventsCard;