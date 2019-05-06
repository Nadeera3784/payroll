const mongoose = require('mongoose');
const { Schema } = mongoose;

const departmentSchema = new Schema({
    name: String,
    description: String,
    employees : [{ type: Schema.Types.ObjectId , ref: 'employee'}]
});

mongoose.model('department' , departmentSchema);