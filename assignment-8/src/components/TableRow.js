import React from "react";
import TableCell from "./TableCell.js";

const TableRow = (props) => {
  let tableCells = [];
  //let cells = 0; Attempted to solve warnings in console, and it did, but messes with addRow() and removeRow()

  for (let i = 0; i < props.numColumns; i++) {
    tableCells.push(
      <TableCell
        //key={cells++} Attempted to solve warnings in console, and it did, but messes with addRow() and removeRow()    
        mouseDown={props.mouseDown}
        mouseUp={props.mouseUp}
        mouseEnter={props.mouseEnter}
        selectedColor={props.selectedColor}
        changeToColor={props.changeToColor}
      />
    );
  }
  return <tr className="grid-row">{tableCells}</tr>
  
};

export default TableRow;