import './App.css';
import MemoryCard from './components/MemoryCard';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <div className="App">
      Hello form app!
      <Scoreboard />
      <MemoryCard />
    </div>
  );
}

export default App;
