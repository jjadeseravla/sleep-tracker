import React, { useState } from 'react';
import './square.css';

const Square = ({clickNotes, cell}) => {

  const [squareColour, setSquareColour] = useState("black-box");

  const changeColour = (e) => {
    if (squareColour === "black-box") {
      setSquareColour("green-box");
    }
    if (squareColour === "green-box") {
      setSquareColour("lime-box");
    }
    if (squareColour === "lime-box") {
      setSquareColour("yellow-box");
    }
    if (squareColour === "yellow-box") {
      setSquareColour("orange-box");
    }
    if (squareColour === "orange-box") {
      setSquareColour("red-box");
    }
    if (squareColour === "red-box") {
      setSquareColour("black-box");
    }
  }


  const noteToDisplay = cell.note ? cell.note : ''; // or render {note}

  return (
    <div>
    <button onClick={() => {
      clickNotes(cell.day)}
    }>
      {cell.day}
      {noteToDisplay}
    </button>
      <div className={squareColour} onClick={changeColour}></div>
    </div>
  )
}

export default Square;
