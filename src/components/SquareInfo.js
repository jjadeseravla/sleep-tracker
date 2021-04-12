import React, { useState, useRedirect } from 'react';
import { useHistory } from "react-router-dom";
//import './squareInfo.css';

function SquareInfo() {

  let history = useHistory();
  console.log(history);

  function routeChange() {
    history.push(`/`);
  }

  // const [date, setCounter] = plusOne(0);
  //
  // const plusOne = (int) => {
  //   setCounter(int + 1);
  // }

  return (
    <div>
      <h1>ZE NOTES</h1>
      <button onClick={routeChange}>Back</button>
    </div>
  )
}


export default SquareInfo;
