import React, { useCallback, useRef } from "react";
import useWindowSize from "../hooks/useWindowSize";

import "../styles/Maze.css";


// Constants
const CELL_WALLS = ['cell-n', 'cell-e', 'cell-s', 'cell-w'];

export default function Maze({ mazeWidth, mazeHeight, initMaze, mazePath, solved }) {
  const windowSize = useWindowSize();
  const mazeRef = useRef();

  const getCellStyles = useCallback((pathArray, index) => {
    const classes = [...CELL_WALLS];
    for (let i = pathArray.length - 1; i >= 0; i--) {
      classes.splice(pathArray[i], 1);
    }
    if (solved && mazePath.includes(index)) {
      classes.push('cell-traveled');
    }
    return classes.join(' ');
  }, [solved, mazePath]);

  const getMazeRows = useCallback(() => {
    const rows = [];
    for (let i = 0; i < mazeHeight; i++) {
      const nextRow = [];
      for (let j = 0; j < mazeWidth; j++) {
        const index = i * mazeWidth + j;
        nextRow.push(
          <div className={"maze-cell " + getCellStyles(initMaze[index], index)} key={index}></div>
        )
      }
      rows.push(
        <div className="maze-row" key={'row-'+i}>
          {nextRow}
        </div>
      )
    }

    // Apply aspect ratio
    if (mazeRef.current) {
      mazeRef.current.style.aspectRatio = mazeWidth+'/'+mazeHeight;
    }
    
    return rows;
  }, [mazeHeight, mazeWidth, initMaze, getCellStyles]);

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
    <div ref={mazeRef} className={"maze" + calculateBorderSize()}>
      {getMazeRows()}
    </div>
  )
}