import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button , Row, Col} from 'reactstrap';
import validate from '../../validate';
import renderField from '../../renderField';
import renderDatePicker from '../../renderDatepicker';


const SecondPage = (props) => {
    const { handleSubmit, previousPage } = props

    return(
        <form onSubmit={handleSubmit}>

            <Field 
                name='birthday'
                type='text'
                component={renderDatePicker}
                label='birthday'
            />
            <Field 
                name='email'
                type='text'
                component={renderField}
                label='email'
            />
            <Field 
                name='joinDate'
                type='text'
                component={renderDatePicker}
                label='joinDate'
            />               
            <Row>
                <Col>
                    <Button type="button"  onClick={previousPage} style={{marginTop: '10px'}}>
                    Previous
                    </Button>               
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
})(SecondPage);