import React from "react";
import TableCell from "./TableCell.js";

const TableRow = (props) => {
  let tableCells = [];
  let cells = 0;

  for (let i = 0; i < props.numColumns; i++) {
    tableCells.push(
      <TableCell
        key={cells++}      
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