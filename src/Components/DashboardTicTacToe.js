import React from 'react'
import  {Table} from 'react-bootstrap';

export default function DashboardTicTacToe (props) {
    return (
        <div className="pageHeader">
            {props.round !== 0 ?
            (            
            <Table>
            <thead>
                <tr>
                    <th>Round</th>
                    <th>Winner</th>
                </tr>
            </thead>
            <tbody>
            {
                props.winData.map((obj) => {
                    return (
                        <tr key={obj.round}>
                            <td>{obj.round}</td>
                            <td>{obj.winner}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </Table>
            ) :
            (            
            <Table>
            <thead>
                <tr>
                    <th>Round</th>
                    <th>Winner</th>
                </tr>
            </thead>
            </Table>
            ) 
            }
        </div>
    )
}


// map over the winData Array, and for each Element, create a <tr> and fill in 2 <td's> with that element's round and winner

// <tr>
// <td>{props.round}</td>
// <td>{props.winner}</td>
// </tr>