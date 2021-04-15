import React, { useState } from 'react';
//import SquareInfo from './SquareInfo';
import './square.css';

const Square = ({clickNotes, id}) => {

  const [squareColour, setSquareColour] = useState("black-box");

  // const onSubmit = (formState) => {
  //   console.log('I will submit my ChildForm Input State: ' + formState);
  // }

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

  return (
    <div>
    <button onClick={() => {
      clickNotes(id)}
    }>
      {id}
    </button>
      <div className={squareColour} onClick={changeColour}></div>
    </div>
  )
}

export default Square;
// <SquareInfo onSubmit={onSubmit}/>
