import React, { useState } from "react";

import '../styles/GenerationForm.css';
import { clamp } from "../scripts/utils";

const DEFAULT_MAZE_DIMENSION = 5;
const MIN_MAZE_DIMENSION = 4;
const MAX_MAZE_DIMENSION = 100;


export default function GenerationForm({ handleLoadingNewMaze }) {
  const [mazeHeight, setMazeHeight] = useState(DEFAULT_MAZE_DIMENSION);
  const [mazeWidth, setMazeWidth] = useState(DEFAULT_MAZE_DIMENSION);

  const generateMazeRequest = () => {
    const requestHeight = clamp(MIN_MAZE_DIMENSION, MAX_MAZE_DIMENSION, mazeHeight);
    setMazeHeight(requestHeight);
    const requestWidth = clamp(MIN_MAZE_DIMENSION, MAX_MAZE_DIMENSION, mazeWidth);
    setMazeHeight(requestWidth);

    // TODO: Fetch maze with dimensions
    // THEN: call handleLoadingNewMaze(), passing maze data
  }

  return (
    <form className="generation-form" onSubmit={(event) => {event.preventDefault()}}>
      <div className="input-group">
        <label for="input-maze-width">Width: </label>
        <input
          id="input-maze-width"
          type="number"
          value={mazeWidth}
          min={MIN_MAZE_DIMENSION}
          max={MAX_MAZE_DIMENSION}
          onChange={(event) => {setMazeWidth(event.target.value)}}
        />
      </div>

      <div className="icon-wrapper">
        <span className="x-icon">X</span>
      </div>
      
      <div className="input-group">
        <label for="input-maze-height">Height: </label>
        <input
          id="input-maze-height"
          type="number"
          value={mazeHeight}
          min={MIN_MAZE_DIMENSION}
          max={MAX_MAZE_DIMENSION}
          onChange={(event) => {setMazeHeight(event.target.value)}}
        />
      </div>
      <button role="button" onClick={generateMazeRequest}>Generate!</button>
    </form>
  )
}