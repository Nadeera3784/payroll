import React from 'react';
import AttendanceTable from '../../components/attendance/attendanceTable';

class AttendanceContainer extends React.Component{
    render(){
       return(
           <div>
               <AttendanceTable />
           </div>
       ) 
    }
}

export default AttendanceContainer;