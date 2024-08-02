import React from 'react';
import { Button } from "react-bootstrap";

// Load all items which ordered
const LoadItemOrdered = (props) => {
    return (
        <>
            <tr className="itemsOrder">
                <td>
                    {props.admin?props.qty:
                    <input className="inputStyle text-center" type='number' autoComplete="on" name="name" value={props.qty} onChange={(e) => { props.handleChange(props.index, e.target.value) }} />}
                </td>
                <td>{props.size}</td>
                <td>{props.name}</td>
                <td>${(props.price / 100).toFixed(2)}</td>
                <td>
                    {props.admin ? null:<Button className="delBtn text-center" type="delete" variant="danger" size="sm" onClick={(e) => props.onDelete(e, props.index)}>
                        x </Button>}
                </td>
            </tr>

        </>
    )
}

export default LoadItemOrdered;