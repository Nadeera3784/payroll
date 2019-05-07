import React from 'react';
import Datepicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import { Label } from 'reactstrap'
import momentLocalizer from "react-widgets-moment";

import 'react-widgets/dist/css/react-widgets.css'
momentLocalizer(moment)

const renderDatePicker = ({input: {onChange, value}, showTime, label,  meta: {touched, error} }) => (
    <div>
          <Label>{label}</Label>
          {touched && error && <span style={{color:'red' , fontSize:'10px'}}> {error}</span>}
          <Datepicker 
            onChange={onChange}
            format="DD MM YYYY"
            time={showTime}
            value={!value ? null : new Date(value)}
          />
    </div>
  );

  export default renderDatePicker;