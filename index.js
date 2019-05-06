const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({
    extended: true
  }));

require('./models/User');  
require('./models/Attendance');
require('./models/Departments');
require('./models/Employees');
require('./models/Payments');
require('./models/PendingLeaves');
require('./models/ApprovedLeaves');
require('./models/Allownance');
require('./models/Deduction');

require('./seed')();

mongoose.connect('mongodb://localhost:27017/payrollDev', {useNewUrlParser: true});

require('./services/passport')
require('./routes/auth')(app);
require('./routes/departments')(app);
require('./routes/employees')(app);
require('./routes/payments')(app);

const port = process.env.PORT || 9000
app.listen(port , ()=> console.log('Server is litening on ' + port));
