import React, { useState, useRef } from 'react';
import './square.css';

const Square = () => {

  //const node = useRef();
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

  return (
    <div>
      <div className={squareColour} onClick={changeColour}></div>
    </div>
  )
}

export default Square;
