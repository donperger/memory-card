import { useState } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';
import Scoreboard from './components/Scoreboard';
import React from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div className="App">
      <header className="header">
        <div className="app-title">Test your memory</div>
        <Scoreboard score={score} bestScore={bestScore} />
      </header>
      <MemoryCard />
    </div>
  );
}

export default App;
