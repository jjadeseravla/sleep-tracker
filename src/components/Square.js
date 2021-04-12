import React, { useState, useRef } from 'react';
import './square.css';

const Square = () => {

  //const node = useRef();
  const [squareColour, setSquareColour] = useState("black-box");

  const changeColour = (e) => {
    if (squareColour === "black-box") {
      setSquareColour("red-box");
    }
  }

  return (
    <div>
      <div className={squareColour} onClick={changeColour}></div>
    </div>
  )
}

export default Square;
