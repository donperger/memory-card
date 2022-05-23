import '../styles/MemoryCard.css';
import { any, func, number, string } from 'prop-types';
import React from 'react';

const MemoryCard = (props) => {
  MemoryCard.propTypes = {
    flagSrc: any,
    countryName: string,
    id: number,
    addCardToClickeCrads: func
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.addCardToClickeCrads(props.id);
  };

  return (
    <div className="memory-card" id={props.countryName} onClick={handleClick}>
      <img className="flag" src={props.flagSrc} alt="flag" />
      <div className="country-name">{props.countryName}</div>
    </div>
  );
};

export default MemoryCard;
