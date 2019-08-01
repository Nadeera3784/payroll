const mongoose = require('mongoose');
const Employee = mongoose.model('employee');
const Department = mongoose.model('department');
const passport = require('passport');


const requireAuth =  passport.authenticate('jwt', { session: false })

module.exports = (app) => {
    app.get('/employees' , requireAuth , async (req,res) => {
        const employees = await Employee.find({}).populate('attendance');

       /* const extendedEmployees = await Employee.aggregate([{
            $lookup : {
                from: 'departments',
                localField : '_id',
                foreignField : 'employees',
                as : 'department'
            }
        }]); */
        res.send(employees);
    });

    app.post('/employees/new' , async (req,res) => {
        const department = await Department.findOne({name:req.body.department});

        const employee = new Employee({
            firstName : req.body.firstName,
            lastName: req.body.lastName,
            surname: req.body.surname,
            birthday: req.body.birthday,
            email : req.body.email,
            department : req.body.department,
            designation: req.body.designation,
            joinDate : req.body.joinDate,
            basicSalary : req.body.basicSalary,
        });

        department.employees.push(employee._id);
        await department.save();
        await employee.save();
        const allEmployee = await Employee.find({}).populate();
        res.send(allEmployee)

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
