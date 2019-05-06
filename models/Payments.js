const mongoose = require('mongoose');
const { Schema } = mongoose;

const paymentSchema = new Schema({
    month : String,
    year : String,
    allowances : [{type : Schema.Types.ObjectId , ref: 'allownace'}],
    deductions : [{type : Schema.Types.ObjectId , ref: 'deduction'}], 
    payment : Number  // allowances - deduction + basicSalary
});

mongoose.model('payment' , paymentSchema);
