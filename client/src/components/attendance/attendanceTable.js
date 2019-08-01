import React from 'react';
import {Col, Row, Container} from 'reactstrap'


import classes from './attendanceTable.module.css'


const AttendanceTable = (props) => {
    const renderDates = () => {
        const newDate = new Date();
        const thisMonth = newDate.getMonth();
        const thisYear = newDate.getFullYear();

        const totalDates = getDaysInMonth(thisMonth, thisYear);
        const datesTorender = [];
        for(let i=1; i < totalDates+1 ; i++){
            datesTorender.push(<Col lg='0.9' style={{display:'flex' , justifyContent:'space-between'}} key={i} >{i}</Col>)
        }
        return datesTorender;
    }

    const getDaysInMonth = (month, year) => new Date(year, month, 0).getDate();

    return(
       <Container>
            <Row>
                <Col lg='1'>Employee Name</Col>
                <Col lg='11'><Row>{renderDates()}</Row></Col>
            </Row>
       </Container> 

    )
}

export default AttendanceTable;