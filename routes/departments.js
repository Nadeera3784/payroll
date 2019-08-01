const mongoose = require('mongoose');
const Department = mongoose.model('department');
const Employee = mongoose.model('employee');
const passport = require('passport');


const requireAuth =  passport.authenticate('jwt', { session: false })

module.exports = (app) => {
    app.get('/departments' /*, requireAuth */, async (req,res) => {
        const data = await Department.find({}).populate('employees');
        res.json(data);
    });

    app.post('/departments/new' , async (req,res) => {
        const department = new Department({
            name: req.body.name,
            description: req.body.description
        });
        console.log(req.body);
        if(req.body.employees){
            const employees = req.body.employees;
            employees.forEach(async employee => {
                const emp = new Employee({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    surname: employee.surname,
                    birthday: employee.birthday,
                    basicSalary: employee.basicSalary,
                    email : employee.email,
                });
                department.employees.push(emp);
                await emp.save();
            });
        }
        await department.save();
        res.send(department).populate
    });

    app.get('/departments/:id' , async (req,res) =>{
        try{
            const existingDepartment = await  Department.findById(req.params.id).populate('employees');
            res.json(existingDepartment);
        }catch(err){
            res.json(err);
        }
    });

    app.put('/departments/:id' , async (req, res) => {
        try{
            const id = null;
            if(req.body.employees){
                id = [];
                req.body.employees.forEach(async employee => {
                    const newEmployee = new Employee(employee);
                    id.push(newEmployee._id);              
                    await newEmployee.save();
                });
            }
            const updatedDepartment = await Department.findOneAndUpdate({_id : req.params.id} ,  
                                        {$set:{ name :req.body.name , description: req.body.description},
                                           $push:{ employees : id } 
                                        }, 
                                        {new:true}
                                    );
            res.json(updatedDepartment);
        }catch(err){
            res.json(err)
        }
    });

    app.delete('/departments/:id' , async (req,res) => {
        try{
            await Department.findByIdAndRemove(req.params.id);
            res.json('Successfully deleted!');
        }catch(err){
            res.json(err);
        }
    })

}
