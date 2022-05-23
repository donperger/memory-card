import '../styles/MemoryCard.css';
import { any, string } from 'prop-types';
import React from 'react';

const MemoryCard = (props) => {
  MemoryCard.propTypes = {
    flagSrc: any,
    countryName: string
  };

  return (
    <div className="memory-card">
      <img className="flag" src={props.flagSrc} alt="flag" />
      <div className="country-name">{props.countryName}</div>
    </div>
  );
};

export default MemoryCard;
