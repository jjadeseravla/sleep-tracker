import React, { useState } from 'react';
import './grid.css';
import Square from './Square';
import SquareInfo from './SquareInfo';
import { useHistory } from "react-router-dom";

const MONTH_LENGTH = new Date(new Date().getFullYear(),new Date().getMonth()+1, 0).getDate();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Grid = () => {

  let history = useHistory();
  console.log(history);

  function routeChange() {
    history.push(`/info`);
  }

  const [gridCells, setGridCells] = useState(createMonthLength(MONTH_LENGTH));

  let view = (<div>
      <h1>{monthNames[new Date().getMonth()]}</h1>
      <h2>Days: {MONTH_LENGTH}</h2>
      <div className="container">
        {gridCells.map((row, rowIndex) => {
          return row.map((cell, cellIndex) => {
            return <Square key={cellIndex} clickNotes={routeChange}/>;
          })
        })}
      </div>
  </div>)

  return (
    view
  )
}

const createMonthLength = (MONTH_LENGTH) => {
  const newArr = new Array(MONTH_LENGTH).fill("empty"); //need to be 1-30
  const gridCells = chunkArray(newArr, 7);
  console.log(gridCells);
  return gridCells;
}

function chunkArray(array, size) {
   if(array.length <= size){
       return [array]
   }
   return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
}

export default Grid;
