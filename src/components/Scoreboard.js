import React, { useState } from 'react';
import '../styles/Scoreboard.css';

const Scoreboard = (props) => {
  return (
    <div className="scoreboard">
      <div>Score: {props.score}</div>
      <div>Best score: {props.bestScore}</div>
    </div>
  );
};

export default Scoreboard;
