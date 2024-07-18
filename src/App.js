import { useState } from 'react';
import GenerationForm from './components/GenerationForm';
import Maze from './components/Maze';

import { solveMazeRequest } from './scripts/requests';

import './styles/App.css';


function App() {
  const [initMaze, setInitMaze] = useState();
  const [mazeHeight, setMazeHeight] = useState();
  const [mazeWidth, setMazeWidth] = useState();
  const [mazePath, setMazePath] = useState();
  const [solved, setSolved] = useState(false);

  const handleLoadingNewMaze = (width, height, mazeData) => {
    setMazeWidth(width);
    setMazeHeight(height);
    setInitMaze(mazeData);
    setSolved(false);
  }

  const handleSolveMaze = () => {
    const requestMaze = JSON.stringify(initMaze);
    const requestWidth = mazeWidth;
    const requestHeight = mazeHeight;

    solveMazeRequest(requestWidth, requestHeight, requestMaze)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        else {
          console.log(response);
        }
      })
      .then( function (newMazePath) {
        setMazePath(newMazePath);
        setSolved(true);
      })
  }

  return (
    <div className="App">
      <header className="info-container">
        <h1 className='d-inline'>Maze Generator</h1>
        <GenerationForm
          handleLoadingNewMaze={handleLoadingNewMaze}
          solveMazeCallback={handleSolveMaze}
        />
      </header>
      <div className='maze-container'>
        <Maze
          mazeHeight={mazeHeight}
          mazeWidth={mazeWidth}
          initMaze={initMaze}
          mazePath={mazePath}
          solved={solved}
        />
      </div>
    </div>
  );
}

export default App;
