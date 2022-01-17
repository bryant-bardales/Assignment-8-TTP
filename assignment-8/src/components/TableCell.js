import React from "react";

const TableCell = (props) => {
  return (
    
    <td className="grid-cell"
      onMouseDown={props.mouseDown}
      onMouseUp={props.mouseUp}
      onMouseEnter={props.mouseEnter}
      onClick={props.changeToColor}
    >
    </td>
   
  );
}

export default TableCell;