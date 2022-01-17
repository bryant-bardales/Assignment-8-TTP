import React from "react";
import "./index.css"
import TableRow from "./components/TableRow";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      rows: 1,
      columns: 1,
      color: "red",
      color_in: false,
    };
  }

  addRow = (e) => {
    e.preventDefault();
    this.setState({ rows: this.state.rows + 1 });
  };

  removeRow = (e) => {
    e.preventDefault();
    if (this.state.rows > 1)
      this.setState({ rows: this.state.rows - 1 });
  };

  addColumn = (e) => {
    e.preventDefault();
    this.setState({ columns: this.state.columns + 1 });
  };

  removeColumn = (e) => {
    e.preventDefault();
    if (this.state.columns > 1)
      this.setState({ columns: this.state.columns - 1 });
  };

  pickColor = (e) => {
    e.preventDefault();
    this.setState({ color: e.target.value });
  };

  changeToColor = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = this.state.color;
  };

  mouseDown = (e) => {
    e.preventDefault();
    this.setState({ color_in: true });
  };

  mouseUp = (e) => {
    e.preventDefault();
    this.setState({ color_in: false });
  };

  mouseEnter = (e) => {
    e.preventDefault();
    if (this.state.color_in === true) {
      e.target.style.backgroundColor = this.state.color;
    }
  };

  fillAll = (e) => {
    e.preventDefault();
    const cells = document.getElementsByClassName("grid-cell");
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = this.state.color;
    }
  };

  fillRest = (e) => {
    e.preventDefault();
    const cells = document.getElementsByClassName("grid-cell");
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].style.backgroundColor === "") {
        cells[i].style.backgroundColor = this.state.color;
      }
    }
  };

  clrAll = (e) => {
    e.preventDefault();
    let cells = document.getElementsByClassName("grid-cell");
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = null;
    }

  };

  render() {

    <h1>Assignment 8: ReactJS DOM III</h1>
    let tableRows = [];

    for (let i = 0; i < this.state.rows; i++) {
      tableRows.push(
        <TableRow
          key={this.state.rows}
          mouseDown={this.mouseDown}
          mouseUp={this.mouseUp}
          mouseEnter={this.mouseEnter}
          numColumns={this.state.columns}
          selectedColor={this.state.color}
          changeToColor={this.changeToColor}
        />
      );
    }

    return (
      <div>

          <header>
            <h1>Assignment 8: ReactJS DOM III</h1>
            <nav>
              <button onClick={this.addRow}>Add Row</button>
              <span></span>
              <button onClick={this.removeRow}>Delete Row</button>
              <span></span>
              <button onClick={this.addColumn}>Add Column</button>
              <span></span>
              <button onClick={this.removeColumn}>Delete Column</button>
              <span></span>

              <label htmlFor="pick">Pick a color: </label>
              <select name="pick" onChange={this.pickColor}>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>

              <span></span>
              <button onClick={this.fillAll}>Fill All Cells</button>
              <span></span>
              <button onClick={this.fillRest}>Fill Uncolored Cells</button>
              <span></span>
              <button onClick={this.clrAll}>Clear All Cells</button>
            </nav>
          </header>
          <span></span>

        <section>
          
          <table className="grid"><tbody>{tableRows}</tbody></table>
          
        </section>
        
      </div>
    );
  }
}

export default App;