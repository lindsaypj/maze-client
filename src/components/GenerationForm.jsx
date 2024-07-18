import React, { useState } from "react";

import { clamp } from "../scripts/utils";
import { generateMazeRequest } from "../scripts/requests";

import '../styles/GenerationForm.css';


const DEFAULT_MAZE_DIMENSION = 5;
const MIN_MAZE_DIMENSION = 4;
const MAX_MAZE_DIMENSION = 100;


export default function GenerationForm({ handleLoadingNewMaze, solveMazeCallback }) {
  const [mazeHeightInput, setMazeHeightInput] = useState(DEFAULT_MAZE_DIMENSION);
  const [mazeWidthInput, setMazeWidthInput] = useState(DEFAULT_MAZE_DIMENSION);

  const handleInputChange = (event) => {
    const nextSize = clamp(MIN_MAZE_DIMENSION, MAX_MAZE_DIMENSION, event.target.value);
    setMazeHeightInput(nextSize);
    setMazeWidthInput(nextSize);
  }

  const generateMaze = () => {
    const requestHeight = clamp(MIN_MAZE_DIMENSION, MAX_MAZE_DIMENSION, mazeHeightInput);
    setMazeHeightInput(requestHeight);
    const requestWidth = clamp(MIN_MAZE_DIMENSION, MAX_MAZE_DIMENSION, mazeWidthInput);
    setMazeWidthInput(requestWidth);

    generateMazeRequest(requestWidth, requestHeight)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        else {
          console.log(response);
        }
      })
      .then(function (mazeData) {
        handleLoadingNewMaze(requestWidth, requestHeight, mazeData);
      })
  }

  return (
    <form className="generation-form" onSubmit={(event) => {event.preventDefault()}}>
      <div className="dimensions">
        <div className="input-group">
          <label htmlFor="input-maze-width">Width: </label>
          <input
            id="input-maze-width"
            type="number"
            value={mazeWidthInput}
            min={MIN_MAZE_DIMENSION}
            max={MAX_MAZE_DIMENSION}
            onChange={handleInputChange}
            onBlur={handleInputChange}
          />
        </div>

        <div className="icon-wrapper">
          <span className="x-icon">X</span>
        </div>
        
        <div className="input-group">
          <label htmlFor="input-maze-height">Height: </label>
          <input
            id="input-maze-height"
            type="number"
            value={mazeHeightInput}
            min={MIN_MAZE_DIMENSION}
            max={MAX_MAZE_DIMENSION}
            onChange={handleInputChange}
            onBlur={handleInputChange}
          />
        </div>
      </div>
      <div className="button-group">
        <button onClick={generateMaze}>Generate</button>
        <button onClick={solveMazeCallback}>Solve</button>
      </div>
    </form>
  )
}