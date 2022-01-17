import React from 'react'
import '../index.css'
import TableRow from './TableRow.js'

let rows = []
class Table extends React.Component {
        constructor(props) {
            super(props)
            rows = []
            for (let i = 0; i < props.state.numRows; i++) {
                rows.push(<TableRow columns = {props.state.numColumns}/>)
            }
        }
    render() {
        return (
            <table>
                <tbody>
                {rows}
                </tbody>
            </table>
        )
    }
}

export default Table;