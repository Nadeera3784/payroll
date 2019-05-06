const mongoose = require('mongoose');
const { Schema } = mongoose;

const approvedSchema = new Schema({
    dateCreate : Date,
    leaveStartDate : Date,
    leaveEndDate : Date,
});

mongoose.model('approvedLeave' , approvedSchema);
