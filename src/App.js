import { useState } from 'react';
import GenerationForm from './components/GenerationForm';

import './styles/App.css';


function App() {
  const [initMaze, setInitMaze] = useState();

  const handleLoadingNewMaze = () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Maze Generator</h1>
      </header>

      <GenerationForm handleLoadingNewMaze={handleLoadingNewMaze} />
    </div>
  );
}

export default App;
