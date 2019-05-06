const mongoose = require('mongoose');
const { Schema } = mongoose;

const attendanceSchema = new Schema({
    attendanceDate : Date,
});

mongoose.model('attendance' , attendanceSchema);
