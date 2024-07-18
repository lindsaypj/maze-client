import { useState } from 'react';
import GenerationForm from './components/GenerationForm';

import './styles/App.css';
import Maze from './components/Maze';


function App() {
  const [initMaze, setInitMaze] = useState();
  const [mazeHeight, setMazeHeight] = useState();
  const [mazeWidth, setMazeWidth] = useState();

  const handleLoadingNewMaze = (width, height, mazeData) => {
    setMazeWidth(width);
    setMazeHeight(height);
    setInitMaze(mazeData);
  }

  return (
    <div className="App">
      <header className="info-container">
        <h1 className='d-inline'>Maze Generator</h1>
        <GenerationForm handleLoadingNewMaze={handleLoadingNewMaze} />
      </header>
      <div className='maze-container'>
        <Maze
          mazeHeight={mazeHeight}
          mazeWidth={mazeWidth}
          initMaze={initMaze}
        />
      </div>
    </div>
  );
}

export default App;
