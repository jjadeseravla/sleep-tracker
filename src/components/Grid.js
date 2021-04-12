import React, { useState } from 'react';
import './grid.css';

const MONTH_LENGTH = new Date(new Date().getFullYear(),new Date().getMonth()+1, 0).getDate();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const Grid = () => {
  const [monthLength, setMonthLength] = useState(createMonthLength(MONTH_LENGTH));
  //const [sqColour, setSqColour] =

  return (
    <div>
      <h1>{monthNames[new Date().getMonth()]}</h1>
      <h2>Days: {MONTH_LENGTH}</h2>
      <div className="container">
        {monthLength.map((sq, sqIndex) => {
          return <div key={sqIndex} className="square"></div>;
        })}
      </div>
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
