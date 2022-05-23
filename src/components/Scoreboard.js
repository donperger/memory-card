import { number } from 'prop-types';
import '../styles/Scoreboard.css';

const Scoreboard = (props) => {
  Scoreboard.propTypes = {
    score: number,
    bestScore: number
  };
  return (
    <div className="scoreboard">
      <div>Score: {props.score}</div>
      <div>Best score: {props.bestScore}</div>
    </div>
  );
};

export default Scoreboard;
