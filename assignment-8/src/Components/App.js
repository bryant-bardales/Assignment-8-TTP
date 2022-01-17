import React from 'react'
import Table from './Table'
import '../index.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numRows: 1,
      numColumns: 1,
      color: ""
    }
  }

    render() {
      return (
        <div>
          <button class = "add">Add Row</button>
          <button class = "add">Add Column</button>
          <button>Colors</button>
        <Table state = {this.state}/>
        </div>
      )
    }
}

export default App;
