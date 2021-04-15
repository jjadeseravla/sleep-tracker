import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../UserContext';
import { useHistory, useParams } from "react-router-dom";
import './squareInfo.css';

const SquareInfo = () => {

  const params = useParams();

  const [formValues, setFormValues] = useLocalStorage(params.id);
  console.log(1, formValues);

  let history = useHistory();

  function routeChange() {
    history.push(`/`);
  }

  const {value, setValue} = useContext(UserContext);

  function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

  const onSubmit = (e) => {
    console.log(4, formValues);
    e.preventDefault();
    //function
    setFormValues(e.target.notes.value)
  }

  const onChange = (e) => {
    setFormValues(e.target.value);
    console.log(3, 'formValues', formValues);
  };

  return (
    <div className="myform">
      <h1>Notes:</h1>
        <h4>useContext: {value}</h4>
        <h4>this is the id: {params.id}</h4>
        <form action="" method="post" onSubmit={onSubmit}>
          <input type="text" id="notes" name="notes" placeholder="write notes here..."  value={formValues} onChange={onChange}/>
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
