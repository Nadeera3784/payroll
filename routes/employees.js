const mongoose = require('mongoose');
const Employee = mongoose.model('employee');
const Department = mongoose.model('department');

module.exports = (app) => {
    app.get('/employees' , async (req,res) => {
        const employees = await Employee.find({}).populate();

        const extendedEmployees = await Employee.aggregate([{
            $lookup : {
                from: 'departments',
                localField : '_id',
                foreignField : 'employees',
                as : 'department'
            }
        }]);
        res.send(employees);
    });

    app.post('/employees/new' , async (req,res) => {
        const department = await Department.findOne({name:req.body.department});

        const employee = new Employee(req.body);
        department.employees.push(employee);

        await department.save();
        employee.save();

        res.send(department.populate());

    })

    app.get('/employees/:id' , async (req,res) => {
        const employee  = await Employee.findById(req.params.id);
        res.send(employee);
    });

    app.put('/employees/:id' , async (req,res) =>{
        const employee = await Employee.findOneAndUpdate({_id :req.body.id} , 
            {$set:{ 
                    firstName : req.body.firstName,
                    lastName : req.body.lastName,
                    surname: req.body.surname,
                    birthday : req.body.birthday,
                    basicSalary : req.body.basicSalary,
                    email : req.body.email
                }
            },
            {new : true}
        );
        res.send(employee);
    });

    app.delete('/employee/:id' , async (req,res) => {
        await Employee.findByIdAndRemove(req.params.id);
        res.send('Successfully removed!');
    });
}
