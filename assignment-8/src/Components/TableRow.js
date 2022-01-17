import React from 'react'
import TableCell from './TableCell.js'

let columns = []
class TableRow extends React.Component {
    constructor(props) {
        super()
        columns = []
        for (let i = 0; i < props.columns; i++) {
            columns.push(<TableCell />)
        }
    }
    render() {
        return(
            <tr key = {5}>
                {columns}
            </tr>
        )
    }
}

export default TableRow;