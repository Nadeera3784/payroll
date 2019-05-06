import React from 'react';
import { Col , Row , Container , Button} from 'reactstrap'
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Employee from './employee/employee';
import Aux from '../../hoc/aux/aux';
import Modal from '../ui/modal/modal';
import EmployeeForm from '../ui/forms/newEmployee/newEmployee';
import classes from './employees.module.css';

const Employees = (props) => {
    const renderEmployees = () =>{
        switch(props.data){
            case null:
                return <div>No Data to Show</div>
                break;
            default : 
                const elements = []
                props.data.map(employee => {
                    employee.employees.map(emp => {
                        const id = emp._id.substr(18,6);
                        const firstName = emp.firstName;
                        const lastName = emp.lastName;
                        const department = employee.name

                        elements.push(<Employee key={id} id={id} firstName={firstName} lastName={lastName} department={department} email = "abcd@abcd.com" active = {true} />)
                    })
                }) 
                return elements;      
        }
    }    
    return (
        
        <Container>
            <Modal>
                <EmployeeForm />
            </Modal>
            <Button className={classes.addNew} color="success" onClick={props.toggleModal}> + Add New Employee</Button>
            <table style={{overflowX:'auto'}}>
                <tr className={classes.Head}>
                    <td>Employee Id</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Department/Designation</td>
                    <td>Email</td>
                    <td>Status</td>
                </tr>
                    {renderEmployees()} 
            </table>         
        </Container>
    )
}

export default connect(null, actions)(Employees);