import React from 'react';
import { Container , Button} from 'reactstrap'
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Employee from './employee/employee';
import Modal from '../ui/modal/modal';
import EmployeeForm from '../ui/forms/newEmployee/addEmployee'
import classes from './employees.module.css';

const Employees = (props) => {
    const renderEmployees = () =>{
        switch(props.data){
            case null:
                return <tr><td>No Data to Show</td></tr>
            default : 
                const elements = []
                props.data.map(emp => {
                    const id = emp._id.substr(18,6);
                    const firstName = emp.firstName;
                    const lastName = emp.lastName;
                    const department = emp.department
                    const email = emp.email
                    elements.push(<Employee key={id} id={id} firstName={firstName} lastName={lastName} department={department} email ={email} active = {true} />)
                }) 
                return elements;      
        }
    } 
    // This is the argument pass to handlesubmit on third Page of the wizard new employee page
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    const handleSubmit = async (formProps) => {
        //toggleModal  newEmployee
        await sleep(500); // simulate server latency
        await props.newEmployee(formProps, () => {
            props.toggleModal();
        })
    }
    
    return (
        // add condition for return model children (set value in store spinerr = false if(!spiner ? <EmployeeForm /> : <Spinner />))
        <Container>
            <Modal title="New Employee">
                <EmployeeForm onSubmit={handleSubmit} />
            </Modal>
            <Button className={classes.addNew} color="success" onClick={props.toggleModal}> + Add New Employee</Button>
            <div className={classes.bodyContainer}>
                <table className={classes.table} style={{overflowX:'auto'}}>
                    <tbody>
                        <tr className={classes.Head}>
                            <td>Employee Id</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Department/Designation</td>
                            <td>Email</td>
                            <td>Status</td>
                        </tr>
                        {renderEmployees()} 
                    </tbody>
                </table> 
            </div>
        
        </Container>
    )
}

export default connect(null, actions)(Employees);