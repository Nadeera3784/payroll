const validate = values => {
    const errors = {}
    if(!values.firstName){
        errors.firstName = 'Required'
    }
    if(!values.lastName){
        errors.lastName = 'Required'
    }
    if(!values.surname){
        errors.surname = 'Required'
    }
    if(!values.birthday){
        errors.birthday = 'Required'
    }
    if(!values.email){
        errors.email = 'Required'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address'
    }
    if(!values.joinDate){
        errors.joinDate = 'Required'

    }if(!values.basicSalary){
        errors.basicSalary = 'Required'
    }else if(!typeof(values.basicSalary) === Number){
        errors.basicSalary = 'Use only numbers'
    }
    if(!values.department){
        errors.department = 'Required'
    }

    return errors;
}

export default validate;