const mongoose = require('mongoose');
const { Schema } = mongoose;

const pendingSchema = new Schema({
    dateCreate : Date,
    leaveStartDate : Date,
    leaveEndDate : Date,
});

mongoose.model('pendingLeave' , pendingSchema);
