import React, { useState } from 'react';
import './grid.css';
import Square from './Square';
import SquareInfo from './SquareInfo';
import { useHistory } from "react-router-dom";

const MONTH_LENGTH = new Date(new Date().getFullYear(),new Date().getMonth()+1, 0).getDate();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Grid = () => {

  let history = useHistory();

  function routeChange() {
    history.push(`/info`);
  }

  const [gridCells, setGridCells] = useState(createMonthLength(MONTH_LENGTH));

  return (
    <div>
        <h1>{monthNames[new Date().getMonth()]}</h1>
        <h2>Days: {MONTH_LENGTH}</h2>
        <div className="container">
          {gridCells.map((row, rowIndex) => {
            return row.map((cell, cellIndex) => {
              console.log('cell', cell);
              return <Square key={cellIndex} clickNotes={routeChange} id={cell}/>;
            })
          })}
        </div>
    </div>
  )
}

const createMonthLength = (MONTH_LENGTH) => {
  const newArr = getDaysInMonth(new Date().getMonth()+1, new Date().getFullYear());
  const gridCells = chunkArray(newArr, 7);
  //console.log(gridCells);
   //console.log('gridCells[0][0]', gridCells[0][0], 'gridCells', gridCells); //saying today is may 1?!
  // console.log("date", new Date().getDate() +1 ); //todays date
  return gridCells;
}

const chunkArray = (array, size) => {
   if(array.length <= size) {
       return [array]
   }
   return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
}

//const getDaysInMonth = (month, year) => {
  //const date = new Date(year, month, 1);
  //let days = []; //arr of Objects
  // while (date.getMonth() === month) {
  //   days = [...days,   {
  //       "theDate": new Date(date),
  //       "id": (new Date(date)).toISOString()
  //     }]

    // days.push(
    //   {
    //     "theDate": new Date(date),
    //     "id": (new Date(date)).toISOString()
    //   }
    // );  do a for loop of each month and populate array 1-30 etc
   //date.setDate(date.getDate() +1);
//   }
//   return days;
// }

const getDaysInMonth = (month, year) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  const daysArr = [...Array(daysInMonth).keys()].map((x) => ++x); //[1, 2, 3, ..] ++ infront of x so it doesnt return x before its plusd it
  return daysArr;
}



export default Grid;

//the colours disappear when you go to another page
