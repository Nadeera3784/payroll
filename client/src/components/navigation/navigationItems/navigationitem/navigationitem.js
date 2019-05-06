import React from 'react';
import { Link } from 'react-router-dom'
import { NavItem } from 'reactstrap'
import classes from './navigationitem.module.css';
import * as actions from '../../../../actions';
import { connect } from 'react-redux';

const navitem = (props) => {
    return(
        <NavItem className={classes.NavigationItem } onClick={() => props.activeLink(props.id)}>
            <hr/>
            <Link className={props.active ? classes.active : null} to={props.link} >{props.name}</Link>
        </NavItem>
    )

}

export default connect(null, actions)(navitem);