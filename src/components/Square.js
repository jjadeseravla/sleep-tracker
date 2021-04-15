import React, { useState, useRedirect } from 'react';
import './square.css';
import SquareInfo from './SquareInfo';

const Square = ({clickNotes, id}) => {

  const routes = {
    './info': () => <SquareInfo/>
  }
  //const node = useRef();
  const [squareColour, setSquareColour] = useState("black-box");
  const [page, setPage] = useState("MAIN");

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
    <button onClick={() => clickNotes("INFO")}>
      {id}
    </button>
      <div className={squareColour} onClick={changeColour}></div>
    </div>
  )
}

export default Square;
