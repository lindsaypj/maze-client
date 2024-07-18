import React, { useCallback } from "react";
import useWindowSize from "../hooks/useWindowSize";

import "../styles/Maze.css";


// Constants
const CELL_WALLS = ['cell-n', 'cell-e', 'cell-s', 'cell-w'];

export default function Maze({ mazeWidth, mazeHeight, initMaze }) {
  const windowSize = useWindowSize();


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
  }, [mazeHeight, mazeWidth, initMaze]);

  const getCellStyles = (pathArray) => {
    const classes = [...CELL_WALLS];
    for (let i = pathArray.length - 1; i >= 0; i--) {
      classes.splice(pathArray[i], 1);
    }
    return classes.join(' ');
  }

  const calculateBorderSize = useCallback(() => {
    const maxDimension = Math.max(mazeHeight, mazeWidth);
    const minScreenDimension = Math.min(windowSize.width, windowSize.height);
    const borderSize = (minScreenDimension * 0.8) / 8 / maxDimension;

    if (borderSize < 5) {
      return " border-1";
    } else if (borderSize < 10) {
      return " border-5";
    } else if (borderSize < 15) {
      return " border-10";
    } else if (borderSize < 20) {
      return " border-15";
    } else if (borderSize > 19) {
      return " border-20";
    }
    return borderSize;
  }, [mazeHeight, mazeWidth, windowSize]);

  return (
    <div className={"maze" + calculateBorderSize()}>
      {getMazeRows()}
    </div>
  )
}