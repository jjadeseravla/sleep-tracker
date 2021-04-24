import React, { useState, useEffect } from 'react';
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
    return { day: ++x, colour: "black-box"} //, note: ''
  }); //[1, 2, 3, ..] ++ infront of x so it doesnt return x before its plusd it
  // console.log(result);
  return result;
}

function App() {

  const [gridCells, setGridCells] = useState(createMonthLength(MONTH_LENGTH));
  // const [squareColour, setSquareColour] = useState("black-box");

  const changeColour = (id) => {
    // e.preventDefault();
    const updateColour = gridCells.map((row) => {
      return row.map((cell) => {
        console.log(cell.day === id);
        if (cell.day === id) {
          return changeCellColour(cell);
        }
        return cell;
      })
    })
    console.log('updateColour', updateColour);
    setGridCells(updateColour);
  }

  const changeCellColour = (cell) => {
    console.log('c1', cell.colour);
    // if (!cell.colour) {
    //   cell.colour = "black-box";
    // }
    if (cell.colour ==="black-box") {
      cell.colour = "green-box";
    }
    else if (cell.colour === "green-box") {
      cell.colour = "lime-box";
    }
    else if (cell.colour === "lime-box") {
      cell.colour = "yellow-box";
    }
    else if (cell.colour === "yellow-box") {
      cell.colour = "orange-box";
    }
    else if (cell.colour === "orange-box") {
      cell.colour = "red-box";
    }
    else if (cell.colour === "red-box") { 
      cell.colour = "black-box";
    }
    console.log('c2', cell.colour);
    return cell;
  }

  // //runs every time it renders
  // useEffect(() => {
  //   const data = localStorage.getItem('ble');
  //   console.log('*******************************************');
  //   if (data) {
  //     setSquareColour(data);
  //   }
  // }, [])
  //
  //
  // useEffect(() => {
  //   localStorage.setItem("ble", squareColour);
  // })

  const onSubmit = (e,formState, id) => {
       e.preventDefault();
       // update cell value with new info
       console.log('id', id);
       console.log('formState', formState);
       updateSquare(id, formState)
  }

  const updateSquare = (id, formState) => {
    //console.log('squareColour', squareColour);
    const newState = gridCells.map((row) => {
      return row.map((cell) => {
        if (String(cell.day) === id) {
          return {...cell, note: formState.note, hours: formState.hours, wee: formState.wee} //copy whats in there already and add note
        }
        //console.log('cell', cell);
        return cell;
      })
    })
     //console.log('newState', newState);
    setGridCells(newState);
  }

  useEffect(() => {
    const data = localStorage.getItem('gridCells');
    console.log('*******************************************');
    if (data) {
      setGridCells(JSON.parse(data));
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("gridCells", JSON.stringify(gridCells));
  })

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
                <Grid monthLength={MONTH_LENGTH} gridCells={gridCells} changeColour={changeColour}/>
              </Route>
            </Switch>
          </UserContext.Provider>
        </header>
      </div>
    </Router>
  );
}

export default App;
