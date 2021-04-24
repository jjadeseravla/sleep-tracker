import React from 'react';
import './grid.css';
import Square from './Square';
import { useHistory } from "react-router-dom";

 const monthNames = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
 ];

 const Grid = ({monthLength, gridCells, changeColour}) => {

  let history = useHistory();

  function routeChange(id) {
    history.push(`/info/${id}`);
    console.log('here');
  }

  return (
    <div>
        <h1>{monthNames[new Date().getMonth()]}</h1>
        <h2>Days: {monthLength}</h2>
        <div className="container">
          {gridCells.map((row, rowIndex) => {
            return row.map((cell, cellIndex) => {
              {console.log(cell.colour)}
              return <Square key={cellIndex} clickNotes={routeChange} cell={cell} changeColour={changeColour}/>;
            })
          })}
        </div>
    </div>
  )
}

export default Grid;

//line 25 id={cell.day} note={cell.note}
//line 26 isNote={onSubmit(cell)}

//the colours disappear when you go to another page
