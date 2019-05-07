import React from 'react';
import Aux from '../../../hoc/aux/aux';

import classes from './employee.module.css'

const Employee = (props) => {
    return (
        <Aux>
            <tr className={classes.Head}>
                <td>{props.id}</td>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.department}</td>
                <td>{props.email}</td>
                <td>{props.active ? 'active' : 'Not Active'}</td>
            </tr>
        </Aux>
    )
}

export default Employee;