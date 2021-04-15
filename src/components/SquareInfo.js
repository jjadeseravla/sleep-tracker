import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import { useHistory } from "react-router-dom";
import './squareInfo.css';

function SquareInfo() {

  let history = useHistory();
  console.log(history);

  function routeChange() {
    history.push(`/`);
  }

  const msg = useContext(UserContext);

  return (
    <div className="myform">
      <h1>NOTES</h1>
        {msg}
        <form action="" method="post">
          <input type="text" id="notes" name="notes" placeholder="write notes here..." value="Notes"/>
          <h3>Hours asleep?</h3>
          <input type="number" id="hoursAsleep" name="sleepingHours" step="any"/>
          <h3>Where did you sleep last night?</h3>
            <ul>
              <li><input type="radio" name="bed" value="bed1" /> 31 Kirkstall Gardens</li>
              <li><input type="radio" name="bed" value="bed2" /> Flat 8A Landor Road</li>
              <li><input type="radio" name="bed" value="bed3" /> 81 Acre Lane</li>
              <li><input type="radio" name="bed" value="bed4" /> Other</li>
              </ul>
          <h3>How many times did you wake up to wee?</h3>
            <ul>
              <li><input type="radio" name="wee" value="wee1" /> 0</li>
              <li><input type="radio" name="wee" value="wee2" /> 1</li>
              <li><input type="radio" name="wee" value="wee3" /> 2</li>
              <li><input type="radio" name="wee" value="wee4" /> 3+</li>
            </ul>
          <input type="submit" value="Submit"/>
        </form>
      <button onClick={routeChange}>Back</button>
    </div>
  )
}


export default SquareInfo;
