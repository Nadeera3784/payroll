import React from 'react';
import Navigationitem from './navigationitem/navigationitem';
import { connect } from 'react-redux';
import classes from './navigationitems.module.css';

const Navitems = (props) => {
        return (
            <ul className={classes.NavigationItems}>
                <Navigationitem 
                    id='1' 
                    link="/dashboard" 
                    active = {window.location.pathname === '/dashboard' ? true : false} 
                    name="Dashboard"/>
                <Navigationitem 
                    id='2' 
                    link="/employees"  
                    active = {window.location.pathname === '/employees' ? true : false} 
                    name="Employees" />
                <Navigationitem 
                    id='3' 
                    link="/attendance"  
                    active = {window.location.pathname === '/attendance' ? true : false} 
                    name="Attendance" />                    
                <Navigationitem 
                    id='4' 
                    link="/payments"  
                    active = {props.activeLinkId === '4' ? true : false} 
                    name="Payments" />
                <Navigationitem 
                    id='5' 
                    link="/leaves" 
                    active = {props.activeLinkId === '5' ? true : false} 
                    name="Leaves" />
            </ul>
        )
}
function mapStateToProps(state){
    return {activeLinkId : state.sideDrawerAndAcitveLink.activeLink}
}
export default connect(mapStateToProps)(Navitems)
