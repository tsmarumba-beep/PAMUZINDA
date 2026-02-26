import React from 'react';
import './HandymanCard.css';

const HandymanCard = ({ name, occupation, image }) => {
  return (
    <div className="handyman-card">
      <img src={image} alt={name} className="handyman-image" />
      <div className="handyman-info">
        <h3 className="handyman-name">{name}</h3>
        <p className="handyman-occupation">{occupation}</p>
        <div className="handyman-verified">🌟 Pamuzinda Verified</div>
        <button className="request-button">
          Request via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default HandymanCard;

// Example Handyman Cards Data
const electricians = [
  { name: 'John Doe', occupation: 'Electrician', image: 'electrician.jpg' },
  { name: 'Jane Smith', occupation: 'Electrician', image: 'electrician2.jpg' },
];
const plumbers = [
  { name: 'Mark Johnson', occupation: 'Plumber', image: 'plumber.jpg' },
  { name: 'Emily Davis', occupation: 'Plumber', image: 'plumber2.jpg' },
];
const carpenters = [
  { name: 'Chris Brown', occupation: 'Carpenter', image: 'carpenter.jpg' },
  { name: 'Patricia Garcia', occupation: 'Carpenter', image: 'carpenter2.jpg' },
];

// Exporting the data
export { electricians, plumbers, carpenters };