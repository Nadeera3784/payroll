const mongoose = require('mongoose');
const { Schema } = mongoose;

const empolyeeSchema = new Schema({
    firstName: String,
    lastName: String,
    surname: String,
    photo: String,
    birthday: String,
    email : String,
    department : String,
    designation : String,
    joinDate : String,
    basicSalary : Number,
    attendance : [{ type : Schema.Types.ObjectId , ref:'attendance'}],
    pendingLeaves : [{ type:Schema.Types.ObjectId ,  ref:'pendingLeave' }],
    approvedLeaves : [{ type : Schema.Types.ObjectId ,  ref:'approvedLeave' }],
    payment : [{ type: Schema.Types.ObjectId ,  ref:'payment' }]
});

mongoose.model('employee' , empolyeeSchema);
