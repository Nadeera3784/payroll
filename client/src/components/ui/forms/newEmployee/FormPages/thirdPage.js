import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../../../actions/index';
import { Field, reduxForm } from 'redux-form';
import validate from '../../validate';
import renderField from '../../renderField';
import DropdownList from 'react-widgets/lib/DropdownList'
import moment from 'moment'
import momentLocalizer from "react-widgets-moment";

import 'react-widgets/dist/css/react-widgets.css'
import { Label,Row, Col, Button } from 'reactstrap'

momentLocalizer(moment)

const renderDropDown = ({ input, data, label, valueField, textField, meta: { touched, error } }) => (
    <div>
        <Label>{label}</Label>
        {touched && error && <span style={{color:'red' , fontSize:'10px'}}> {error}</span>}
        <DropdownList {...input}
            data={data}
            valueField={valueField}
            textField={textField}
            onChange={input.onChange} />
    </div>

)

const ThirdPage = (props) => {
    const { handleSubmit, pristine, previousPage, submitting, employees } = props
    
    let dropDownDepartments= [];
    const flag = {
        value : ''
    }
    employees.forEach(employee => {
        if(flag.value !== employee.department){
            flag.value = employee.department
            dropDownDepartments.push(flag.value);
        }
    }) 

    return(
        <form onSubmit={handleSubmit}>
            <Field 
                name='basicSalary'
                type='text'
                component={renderField}
                label='basicSalary'
            />
            <Field 
                name='designation'
                type='text'
                component={renderField}
                label='designation'
            />
            <Field 
                name='department'
                data={dropDownDepartments}
                component={renderDropDown}
                label='Department'
                valueField="value"
                textField="value"
            />
            <Row>
                <Col>
                    <Button type="button"  onClick={previousPage} style={{marginTop: '10px'}}>
                    Previous
                    </Button>               
                </Col>
                <Col>
                    <Button type="submit"  disabled={pristine || submitting} style={{float:'right' , marginTop: '10px'}}>
                        Next
                    </Button>                
                </Col>
            </Row>                                   
        </form>
    )
}

function mapStateToProps(state){
    return {employees : state.employeeList.Employees}
}

export default compose(
   connect(mapStateToProps, actions),
   reduxForm({
    form: 'addEmployee',
    validate
   })
)(ThirdPage)