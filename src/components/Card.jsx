import React from 'react';

const Card = ({ suit, value, hidden }) => {
  if (hidden) {
    return (
      <div className="card hidden">
        <div className="card-back"></div>
      </div>
    );
  }

  const getColor = () => {
    return suit === '♥' || suit === '♦' ? 'red' : 'black';
  };

  return (
    <div className="card">
      <div className={`card-value ${getColor()}`}>
        <div className="value-top">{value}{suit}</div>
        <div className="value-bottom">{value}{suit}</div>
      </div>
    </div>
  );
};

export default Card;