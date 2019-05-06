const mongoose = require('mongoose');
const Payment = mongoose.model('payment');
const Allownance = mongoose.model('allownance');
const Deduction = mongoose.model('deduction');
const Employee = mongoose.model('employee');

module.exports = (app) => {
    app.get('/payments' , async (req,res) => {
        try{
            const payments = await Payment.find({});
            res.json(payments);
        }catch(err){
            res.send(err);
        }
    });

    app.post('/payments/new' , async (req,res) => {
        try{
            // user id should send via post request to find basic salary
            const employee = await Employee.findById(req.body.employeeId);
            const {basicSalary}  = employee;
            let totalAllowance = 0;
            let totalDedcution = 0;

            const payment = new Payment({
                month : req.body.month,
                year : req.body.year,
            });
            if(req.body.allowances){
                req.body.allowances.forEach(async allowance => {
                    const newAllowance = new Allownance({
                        type : allowance.type,
                        value : allowance.value
                    })
                    payment.allowances.push(newAllowance);
                    console.log(newAllowance);
                    totalAllowance += allowance.value;
                    await newAllowance.save();
                });
            }
            if(req.body.deductions){
                req.body.deductions.forEach(async deduction => {
                    const newDeduction = new Deduction({
                        type : deduction.type,
                        value : deduction.value
                    })
                    payment.deductions.push(newDeduction._id);
                    totalDedcution += deduction.value
                    await newDeduction.save();
                });
            }

            const finalSalary = basicSalary + totalAllowance - totalDedcution;
            payment.payment = finalSalary;

            await payment.save();
            console.log(payment);
            employee.payment.push(payment);
            await employee.save();
            res.send(payment);

        }catch(err){
            res.send(err);
        }
    });

    app.get('/payments/:id' , async (req,res) => {
        try{
            const payment = await Payment.findById(req.params.id).populate();
            res.json(payment)
        }catch(err){
            res.send(err);
        }
    });

    // Payments are not editable so no PUT routes

    app.delete('/payments/:id' , async (req,res) => {
        try{
            await Payment.findByIdAndDelete(req.params.id , (err, doc) => {
                if(err){
                    res.json(err)
                }else{
                    res.json(doc);
                }    
            });
        }catch(err){
            res.send(err);
        }
    })
}
