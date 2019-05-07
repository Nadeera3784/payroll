import React from 'react';
import { Input, Label} from 'reactstrap'
const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <Label>{label}</Label>
        {touched && error && <span style={{color:'red' , fontSize:'10px'}}> {error}</span>}
        <div>
            <Input {...input} placeholder={label} type={type}></Input>
        </div>
    </div>
)

export default renderField;