import React from 'react'
import '../App.css'

export default function Cell (props) {
    return (
        <div onClick={() => {props.updateScore(props.cellId, props.rowId)}} className="cell">
            {props.cellMark}
        </div>
    )
}