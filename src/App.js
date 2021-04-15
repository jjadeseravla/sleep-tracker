import React, { useState } from 'react';
import Grid from './components/Grid.js';
import './App.css';
import { BrowserRouter as Router,
        Switch,
        Route,
        useHistory
        } from 'react-router-dom';
import SquareInfo from './components/SquareInfo.js';
import { UserContext } from './UserContext';




const MONTH_LENGTH = new Date(new Date().getFullYear(),new Date().getMonth()+1, 0).getDate();

const createMonthLength = (MONTH_LENGTH) => {
  const newArr = getDaysInMonth(new Date().getMonth()+1, new Date().getFullYear());
  const gridCells = chunkArray(newArr, 7);
  return gridCells;
}

const chunkArray = (array, size) => {
  if(array.length <= size) {
    return [array]
  }
  return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
}

const getDaysInMonth = (month, year) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  const daysArr = [...Array(daysInMonth).keys()];
  console.log("daysArr", daysArr);
  const result = daysArr.map((x) => {
    return { day: ++x }
  }); //[1, 2, 3, ..] ++ infront of x so it doesnt return x before its plusd it
  console.log("result", result);
  return result;
}

function App() {

  const [gridCells, setGridCells] = useState(createMonthLength(MONTH_LENGTH));
console.log('---------------', gridCells)

  const onSubmit = (e, formState, id) => {
      console.log(4, formState, id);
       e.preventDefault();
       // update cell value with new infor
      //function
       //setFormValues(e.target.notes.value)
       updateSquare(id, formState)
    console.log('I will submit my ChildForm Input State: ' + formState);
  }

  const updateSquare = (id, formState) => {
    console.log(gridCells);
    const newState = gridCells.map((row) => {
      return row.map((cell) => {
        if (cell.id === id) {
          return {...cell, note: formState.note} //copy whats in there already and add note
        }
      })
    })
    console.log(newState);
    setGridCells(newState);
  }

  const [value, setValue] = useState('hello from cccccontext');

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <UserContext.Provider value={{value, setValue}}>
            <Switch>
              <Route path='/info/:id'>
                <SquareInfo onSubmit={onSubmit}/>
              </Route>
              <Route path='/'>
                <Grid monthLength={MONTH_LENGTH} gridCells={gridCells}/>
              </Route>
            </Switch>
          </UserContext.Provider>
        </header>
      </div>
    </Router>
  );
}

export default App;
