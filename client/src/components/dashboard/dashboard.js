import React from 'react';
import { Row, Col } from 'reactstrap';
import Calander from './calander/calander';
import Card from '../ui/card/card';

import classes from './dashboard.module.css';

const Dashboard = (props) => {
    return (
         <div style={{margin:'2%'}}>
             <Row>
                 <Col lg="4" md="4" className={classes.Profile}>
                    <Row className={classes.ProfileTop}>
                        <Col>
                            <Row>
                                <div className={classes.firstDiv}>
                                    <i className="fas fa-user-circle"></i>
                                </div>       
                            </Row>
                            <Row>
                                <Col>
                                    <Row>
                                        <p className={classes.secondDiv}>Chester C. Bracken</p>
                                    </Row>
                                    <Row>
                                        <p className={classes.secondDiv}>HR Manager</p>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{width : '100%' , paddingTop : '10%'}}>
                            <h2 style={{textAlign : 'center'}}>Welcome Back</h2>
                            <h4 style={{textAlign : 'center'}}>{props.date}</h4>
                        </Col>
                    </Row>
                 </Col>
                 <Col lg="8" md="8">
                    <Col>
                        <Row style={{borderBottom: '1px solid #C9C8C9'}}>
                            <Col lg="4" md="6" sm="12" style={{margin:'2% 0'}}>
                                <Card 
                                    color="#40A4C8"
                                    icon="fas fa-users"
                                    value="010"
                                    text="Total"
                                />
                            </Col>
                            <Col lg="4" md="6" sm="12" style={{margin:'2% 0'}}>
                                <Card 
                                    color="#00A65A"
                                    icon="fas fa-user-friends"
                                    value="008"
                                    text="Present"
                                />
                            </Col>
                            <Col lg="4" md="12" sm="12" style={{margin:'2% 0'}} >
                                <Card 
                                    color="#F4543C"
                                    icon="fas fa-paper-plane"
                                    value="002"
                                    text="Absent"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Calander />
                            </Col>
                        </Row>
                    </Col>                
                 </Col>
             </Row>
         </div>
    )
}

export default Dashboard;