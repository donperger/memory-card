import React, { useState } from 'react';

const Scoreboard = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return <div>Hello from score board</div>;
};

export default Scoreboard;
