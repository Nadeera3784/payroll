const mongoose = require('mongoose');
const { Schema } = mongoose;

const deductionSchema = new Schema({
    type : String,
    value : Number
});

mongoose.model('deduction' , deductionSchema);