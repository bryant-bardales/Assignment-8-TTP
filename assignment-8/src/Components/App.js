import React from 'react'
import Table from './Table'
import '../index.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numRows: 3,
      numColumns: 3,
      color: ""
    }
  }
    addRow = (e) => {
      e.preventDefault()
      this.setState({numRows: this.state.numRows + 1})
    };

    addColumn = (e) => {
      e.preventDefault()
      this.setState({numColumns: this.state.numColumns + 1})
    };

    render() {
      return (
        <div>
          <button onClick = {this.addRow} className = "add">Add Row</button>
          <button onClick = {this.addColumn} className = "add">Add Column</button>
          <button type = "dropdown">Colors</button>
        <Table state = {this.state}/>
        </div>
      )
    }
}

export default App;
