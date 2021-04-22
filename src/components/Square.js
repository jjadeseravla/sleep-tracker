import React, { useState, useEffect } from 'react';
import './square.css';

const Square = ({clickNotes, cell, changeColour}) => {

  // const [squareColour, setSquareColour] = useState("black-box");


    // const changeColour = (e) => {
    //   const colourArr = [
    //     "black-box",
    //     "green-box",
    //     "lime-box",
    //     "yellow-box",
    //     "orange-box",
    //     "red-box"
    //   ]
    //   colourArr.map((colour, index) => {
    //     if (squareColour === colour) {
    //       setSquareColour(colourArr[index + 1]);
    //     }
    //   })
    //         console.log();

      // for (var i = 0; i < colourArr.length; i++) {
      //   console.log(colourArr);
      //   if (squareColour === colourArr[i]) {
      //     setSquareColour(colourArr[i])
      //   }
      // }

  //   }


  const noteToDisplay = cell.note ? cell.note : ''; // or render {note}
  const hoursAsleep = cell.hours ? cell.hours : 0;
  const toilet = cell.wee ? cell.wee : 0;
  //const colour = cell.colour ? '' : "black-box";

  return (
    <div>
      <button onClick={() => {
        clickNotes(cell.day)}
      }>
        Day: {cell.day}
        {noteToDisplay}
        hours asleep: {hoursAsleep}
        woke up to wee: {toilet}
      </button>

        <div className={cell.colour} onClick={() => changeColour(cell.day)}></div>

    </div>
  )
}


export default Square;
