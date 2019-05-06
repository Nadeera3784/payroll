const mongoose = require('mongoose');
const { Schema } = mongoose;

const allownaceSchema = new Schema({
    type : String,
    value : Number
});

mongoose.model('allownance' , allownaceSchema);