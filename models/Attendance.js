const mongoose = require('mongoose');
const { Schema } = mongoose;

const attendanceSchema = new Schema({
    attendanceDate : String,
});

mongoose.model('attendance' , attendanceSchema);
