import React, { useState } from "react";

import '../styles/GenerationForm.css';
import { clamp } from "../scripts/utils";
import TEST_MAZE from "../test-data/testMaze10x10.json";

const DEFAULT_MAZE_DIMENSION = 5;
const MIN_MAZE_DIMENSION = 4;
const MAX_MAZE_DIMENSION = 100;


export default function GenerationForm({ handleLoadingNewMaze }) {
  const [mazeHeightInput, setMazeHeightInput] = useState(DEFAULT_MAZE_DIMENSION);
  const [mazeWidthInput, setMazeWidthInput] = useState(DEFAULT_MAZE_DIMENSION);

  const handleInputChange = (event) => {
    const nextSize = clamp(MIN_MAZE_DIMENSION, MAX_MAZE_DIMENSION, event.target.value);
    setMazeHeightInput(nextSize);
    setMazeWidthInput(nextSize);
  }

  const generateMazeRequest = () => {
    const requestHeight = clamp(MIN_MAZE_DIMENSION, MAX_MAZE_DIMENSION, mazeHeightInput);
    setMazeHeightInput(requestHeight);
    const requestWidth = clamp(MIN_MAZE_DIMENSION, MAX_MAZE_DIMENSION, mazeWidthInput);
    setMazeWidthInput(requestWidth);

    // TODO: Fetch maze with dimensions
    // THEN: call handleLoadingNewMaze(), passing maze data
    handleLoadingNewMaze(10, 10, TEST_MAZE);
  }

  return (
    <form className="generation-form" onSubmit={(event) => {event.preventDefault()}}>
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
      <button role="button" onClick={generateMazeRequest}>Generate!</button>
    </form>
  )
}