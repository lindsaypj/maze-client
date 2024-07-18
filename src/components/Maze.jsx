import React, { useCallback } from "react";

import "../styles/Maze.css";

// Constants
const CELL_WALLS = ['cell-n', 'cell-e', 'cell-s', 'cell-w'];

export default function Maze({ mazeWidth, mazeHeight, initMaze }) {


  ////   RENDERING   ////

  const getMazeRows = useCallback(() => {
    const rows = [];
    for (let i = 0; i < mazeHeight; i++) {
      const nextRow = [];
      for (let j = 0; j < mazeWidth; j++) {
        const index = i * mazeWidth + j;
        nextRow.push(
          <div className={"maze-cell " + getCellStyles(initMaze[index])} key={index}></div>
        )
      }
      rows.push(
        <div className="maze-row" key={'row-'+i}>
          {nextRow}
        </div>
      )
    }
    return rows;
  }, [initMaze]);

  const getCellStyles = (pathArray) => {
    const classes = [...CELL_WALLS];
    for (let i = pathArray.length - 1; i >= 0; i--) {
      classes.splice(pathArray[i], 1);
    }
    return classes.join(' ');
  }

  return (
    <div className="maze">
      {getMazeRows()}
    </div>
  )
}