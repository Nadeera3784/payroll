import React from 'react';
import Aux from '../../../../hoc/aux/aux'
import { reduxForm, Field} from 'redux-form';
import { Form, FormGroup, Label, Input, Col, Row, Button} from 'reactstrap';

class newEmployee extends React.Component{
    onSubmit = formProps => {
        console.log('doneeeeeeeee')
    }
    DropDown = () => {
      return(
        <Input type="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </Input>
      )  
    }

    render(){
        const { handleSubmit } = this.props
        return(
            <Aux>
                <Form onSubmit={handleSubmit(this.onSubmit)}>
                    <Row>
                        <Col lg="6" md="6" xm="12">
                            <FormGroup>
                                <Label>First Name</Label>
                                <Field 
                                    name='firstName'
                                    type='text'
                                    component={Input}
                                    autoComplete='none'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Field 
                                    name='lastName'
                                    type='text'
                                    component={Input}
                                    autoComplete='none'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Surname</Label>
                                <Field 
                                    name='surname'
                                    type='text'
                                    component={Input}
                                    autoComplete='none'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Birthday</Label>
                                <Field 
                                    name='birthday'
                                    type='text'
                                    component={Input}
                                    autoComplete='none'
                                />
                            </FormGroup>
                        </Col>
                        <Col lg="6" md="6" xm="12">
                            <FormGroup>
                                <Label>Email</Label>
                                <Field 
                                    name='email'
                                    type='text'
                                    component={Input}
                                    autoComplete='none'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Joined Date</Label>
                                <Field 
                                    name='joinDate'
                                    type='text'
                                    component={Input}
                                    autoComplete='none'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Basic Salary</Label>
                                <Field 
                                    name='basicSalary'
                                    type='number'
                                    component={Input}
                                    autoComplete='none'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Departments</Label>
                                <Field 
                                    name='department'
                                    component={this.DropDown}
                                    autoComplete='none'
                                />
                            </FormGroup>                    
                        </Col>
                    </Row>
                </Form>                     
            </Aux>   
        )
    }

}

export default reduxForm( { form: 'addEmployee' } )(newEmployee);