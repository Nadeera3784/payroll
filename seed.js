const mongoose = require('mongoose');

const ApprovedLeaves = mongoose.model('approvedLeave');
const Attendance = mongoose.model('attendance');
const Department = mongoose.model('department');
const Employee = mongoose.model('employee');
const Payment = mongoose.model('payment');
const PendingLeave = mongoose.model('pendingLeave');

const employee = [
    {
        firstName : 'Bell',
        lastName : 'Bashirian',
        surname : 'Bashirian',
        birthday : 'February 24, 1978',
        basicSalary : 20000,
        email : 'bell@abcd.com'  
    },
    {
        firstName : 'Jaunita',
        lastName : 'Kassulke',
        surname : 'Kassulke',
        birthday : 'December 28, 1977',
        basicSalary : 30000,
        email : 'Jaunita@abcd.com'  
    },
    {
        firstName : 'Bellyy',
        lastName : 'Bashiriansds',
        surname : 'Bashir',
        birthday : 'February 24, 1978',
        basicSalary : 50000,
        email : 'bell23@abcd.com'  
    },
    {
        firstName : 'Jaunitafd',
        lastName : 'Kassadsaulke',
        surname : 'Kass',
        birthday : 'December 28, 1977',
        basicSalary : 15000,
        email : 'Jaunit12a@abcd.com'  
    },    
]

const departments = [
    {
        name:'Management',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name:'Dolor Sit Amet',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name:'Labore Et Dolore',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name:'Perspiciatis Unde',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },            
]


module.exports = async () =>{
    await Department.remove({});
    await Employee.remove({});

    for(let i=0 ; i<departments.length ; i++){
        const dep = new Department({
            name: departments[i].name,
            description: departments[i].description
        });
        
        const emp = new Employee({
            firstName : employee[i].firstName,
            lastName : employee[i].lastName,
            surname : employee[i].surname,
            birthday : employee[i].birthday,
            basicSalary : employee[i].basicSalary,
            email : employee[i].email
        });
        dep.employees.push(emp);
        dep.save();
        emp.save();
    }
}
