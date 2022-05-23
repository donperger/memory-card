import { useState } from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard';
import Scoreboard from './components/Scoreboard';
import React from 'react';

function App() {
  const countries = [
    { name: 'Argentina', flagSrc: 'https://countryflagsapi.com/png/ar', id: 1 },
    { name: 'Brazil', flagSrc: 'https://countryflagsapi.com/png/brazil', id: 2 },
    { name: 'Botswana', flagSrc: 'https://countryflagsapi.com/png/bw', id: 3 },
    { name: 'Switzerland', flagSrc: 'https://countryflagsapi.com/png/ch', id: 4 },
    { name: 'China', flagSrc: 'https://countryflagsapi.com/png/cn', id: 5 },
    { name: 'Dominica', flagSrc: 'https://countryflagsapi.com/png/dm', id: 6 },
    { name: 'The Faroe Islands', flagSrc: 'https://countryflagsapi.com/png/fo', id: 7 },
    { name: 'Greenland', flagSrc: 'https://countryflagsapi.com/png/gl', id: 8 },
    { name: 'Madagascar', flagSrc: 'https://countryflagsapi.com/png/mg', id: 9 },
    { name: 'South Africa', flagSrc: 'https://countryflagsapi.com/png/za', id: 10 }
  ];

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCrads, setClickedCards] = useState([]);

  const checkIfCardClickedBefore = (cardId) => {
    return clickedCrads.includes(cardId);
  };

  const addCardToClickeCrads = (cardId) => {
    if (checkIfCardClickedBefore(cardId)) {
      console.log('You chose the card before');
    } else {
      setClickedCards(clickedCrads.concat([cardId]));
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div className="app-title">Test your memory</div>
        <Scoreboard score={score} bestScore={bestScore} />
      </header>

      <div className="card-container">
        {countries.map((country) => {
          return (
            <MemoryCard
              addCardToClickeCrads={addCardToClickeCrads}
              key={country.id}
              flagSrc={country.flagSrc}
              countryName={country.name}
              id={country.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
