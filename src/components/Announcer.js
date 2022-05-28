import '../styles/Announcer.css';
import { func, number } from 'prop-types';
import React from 'react';

const Announcer = (props) => {
  Announcer.propTypes = {
    playAgain: func,
    score: number,
    bestScore: number
  };

  return (
    <div className="announcement-cont">
      <div className="curr-score">You&apos;ve scored: {props.score}!</div>
      <div className="best-score">Your best score is: {props.bestScore}</div>
      <button className="play-again" onClick={props.playAgain}>
        Play again
      </button>
    </div>
  );
};

export default Announcer;
