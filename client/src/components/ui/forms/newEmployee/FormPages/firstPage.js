import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../../validate';
import renderField from '../../renderField';
import { Button, Col, Row } from 'reactstrap'

const FirstPage = (props) => {
    const { handleSubmit } = props

    return(
        <form onSubmit={handleSubmit}>
            <Field 
                name='firstName'
                type='text'
                component={renderField}
                label='First Name'
            />
            <Field 
                name='lastName'
                type='text'
                component={renderField}
                label='Last Name'
            />
            <Field 
                name='surname'
                type='text'
                component={renderField}
                label='surname'
            /> 
            <Row>
                <Col>
         
                </Col>
                <Col>
                    <Button type="submit" style={{float:'right' , marginTop: '10px'}}>
                        Next
                    </Button>                
                </Col>
            </Row>                     
        </form>
    )
}

export default reduxForm({
    form: 'addEmployee',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(FirstPage);