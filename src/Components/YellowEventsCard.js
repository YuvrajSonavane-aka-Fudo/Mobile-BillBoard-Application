import React from 'react';
import './YellowEventsCard.css';

const YellowEventsCard = ({ places }) => {
  return (
    <div className="yellowCardBackground">
      <h2 className="title">Bussin Places</h2>
      <ul className="placesList">
        {places.map((place, index) => (
          <li key={index} className="placeItem">
            <a href="#" className="placeLink">{place}</a>
            <a href="#" className="arrowButton">➔</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YellowEventsCard;