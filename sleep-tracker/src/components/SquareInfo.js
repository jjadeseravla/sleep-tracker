import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import { useHistory, useParams } from "react-router-dom";
import './squareInfo.css';

const SquareInfo = ({onSubmit}) => {

   const { id } = useParams();

  const [formValues, setFormValues] = useState({ note: '' , hours: 0, wee: 0});

  let history = useHistory();

  function routeChange() {
    history.push(`/`);
  }

  const {ovalue, setOvalue} = useContext(UserContext);


  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="myform">
      <h1>Notes:</h1>
        <h4>useContext: {ovalue}</h4>
        <form action="" method="post" onSubmit={(e) => {onSubmit(e, formValues, id)}}>
          <input
          value={formValues.note}
          type="text"
          id="note"
          name="note"
          placeholder="write notes here..."
          onChange={handleChange}
          value={formValues.note}/>

          <h3>Hours asleep?</h3>
          <input
          value={formValues.hours}
          type="text"
          id="hours"
          name="hours"
          step="any"
          onChange={handleChange}/>

          <h3>How many times did you wake up to wee?</h3>
          <input
          value={formValues.wee}
          type="text"
          id="wee"
          name="wee"
          onChange={handleChange}/>

          <input type="submit" value="Submit"/>
        </form>
      <button onClick={routeChange}>Back</button>
    </div>
  )
}

// <ul>
// <li><input type="radio" name="wee" value="wee1" /> 0</li>
// <li><input type="radio" name="wee" value="wee2" /> 1</li>
// <li><input type="radio" name="wee" value="wee3" /> 2</li>
// <li><input type="radio" name="wee" value="wee4" /> 3+</li>
// </ul>
// <h3>Where did you sleep last night?</h3>
// <ul>
// <li><input type="radio" name="bed" value="bed1" /> 31 Kirkstall Gardens</li>
// <li><input type="radio" name="bed" value="bed2" /> Flat 8A Landor Road</li>
// <li><input type="radio" name="bed" value="bed3" /> 81 Acre Lane</li>
// <li><input type="radio" name="bed" value="bed4" /> Other</li>
// </ul>

//   function useLocalStorage(key, initialValue) {
//   // State to store our value
//   // Pass initial state function to useState so logic is only executed once
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       // Get from local storage by key
//       const item = window.localStorage.getItem(key);
//       // Parse stored json or if none return initialValue
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       // If error also return initialValue
//       console.log(error);
//       return initialValue;
//     }
//   });
//   // Return a wrapped version of useState's setter function that ...
//   // ... persists the new value to localStorage.
//   const setValue = (value) => {
//     try {
//       // Allow value to be a function so we have same API as useState
//       const valueToStore =
//         value instanceof Function ? value(storedValue) : value;
//       // Save state
//       setStoredValue(valueToStore);
//       // Save to local storage
//       window.localStorage.setItem(key, JSON.stringify(valueToStore));
//     } catch (error) {
//       // A more advanced implementation would handle the error case
//       console.log(error);
//     }
//   };
//   return [storedValue, setValue];
// }
export default SquareInfo;
