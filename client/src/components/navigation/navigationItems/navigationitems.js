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
                    active = {props.activeLinkId=== '1' ? true : false} 
                    name="Dashboard"/>
                <Navigationitem 
                    id='2' 
                    link="/employees"  
                    active = {props.activeLinkId === '2' ? true : false} 
                    name="Employees" />
                <Navigationitem 
                    id='3' 
                    link="/payments"  
                    active = {props.activeLinkId === '3' ? true : false} 
                    name="Payments" />
                <Navigationitem 
                    id='4' 
                    link="/leaves" 
                    active = {props.activeLinkId === '4' ? true : false} 
                    name="Leaves" />
            </ul>
        )
}
function mapStateToProps(state){
    return {activeLinkId : state.sideDrawerAndAcitveLink.activeLink}
}
export default connect(mapStateToProps)(Navitems)
