import React, { useState } from 'react';
import Grid from './components/Grid.js';
import './App.css';
import { BrowserRouter as Router,
        Switch,
        Route
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
  const result = daysArr.map((x) => {
    return { day: ++x } //, note: ''
  }); //[1, 2, 3, ..] ++ infront of x so it doesnt return x before its plusd it
  // console.log(result);
  return result;
}

function App() {

  const [gridCells, setGridCells] = useState(createMonthLength(MONTH_LENGTH));

  const onSubmit = (e,formState, id) => {
       e.preventDefault();
       // update cell value with new info
       console.log('id', id);
       console.log('formState', formState);
       updateSquare(id, formState)
  }

  const updateSquare = (id, formState) => {
    const newState = gridCells.map((row) => {
      return row.map((cell) => {
        if (String(cell.day) === id) {
          return {...cell, note: formState.note, hours: formState.hours, wee: formState.wee} //copy whats in there already and add note
        }
        return cell;
      })
    })
    // console.log('newState', newState);
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
