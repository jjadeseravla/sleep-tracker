import React, { useState } from 'react';
import './grid.css';
import Square from './Square';
import { useHistory } from "react-router-dom";

 const monthNames = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
 ];

 const Grid = ({monthLength, gridCells}) => {

//console.log('gridCells', gridCells)
  let history = useHistory();

  function routeChange(id) {
    history.push(`/info/${id}`);
  }
//
//   const [gridCells, setGridCells] = useState(createMonthLength(MONTH_LENGTH));
  return (
    <div>
        <h1>{monthNames[new Date().getMonth()]}</h1>
        <h2>Days: {monthLength}</h2>
        <div className="container">
          {gridCells.map((row, rowIndex) => {
            return row.map((cell, cellIndex) => {
              return <Square key={cellIndex} clickNotes={routeChange} id={cell.day}/>;
            })
          })}
        </div>
    </div>
  )
}
//
// const createMonthLength = (MONTH_LENGTH) => {
//   const newArr = getDaysInMonth(new Date().getMonth()+1, new Date().getFullYear());
//   const gridCells = chunkArray(newArr, 7);
//   return gridCells;
// }
//
// const chunkArray = (array, size) => {
//    if(array.length <= size) {
//        return [array]
//    }
//    return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
// }
//
// const getDaysInMonth = (month, year) => {
//   const daysInMonth = new Date(year, month, 0).getDate();
//   const daysArr = [...Array(daysInMonth).keys()].map((x) => ++x); //[1, 2, 3, ..] ++ infront of x so it doesnt return x before its plusd it
//   return daysArr;
// }



export default Grid;

//the colours disappear when you go to another page
