import React, { useState } from 'react';
import './grid.css';

const MONTH_LENGTH = 30;

export const Grid = () => {
  const [monthLength, setMonthLength] = useState(createMonthLength(MONTH_LENGTH));

  return (
    <div>
      <h1>Month</h1>
      <div className="container">
        {monthLength.map((sq, sqIndex) => {
          return <div key={sqIndex} className="square"></div>;
        })}
      </div>
      <h2>Days: {MONTH_LENGTH}</h2>
    </div>
  )
}


const createMonthLength = (MONTH_LENGTH) => {
  let counter = 1;
  const board = [];
  for (let row = 0; row < MONTH_LENGTH; row ++) {
    const currentRow = [];
    for (let col = 0; col < MONTH_LENGTH; col ++) {
      currentRow.push(counter++);
    }
    board.push(currentRow);
  }
  return board;
}

export default Grid;

// return (
//   <div>
//     <h1>Month</h1>
//     <div className="board">
//       {monthLength.map((row, rowIndex) => (
//         <div key={rowIndex} className="row">
//           {row.map((cellValue, cellIndex) => {
//             return <div key={cellIndex}
//                     className={cellValue}></div>;
//           })}
//         </div>
//       ))}
//     </div>
//   </div>
// )
// }
