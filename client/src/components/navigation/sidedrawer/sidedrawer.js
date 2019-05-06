import React from 'react';
import Aux from '../../../hoc/aux/aux';
import Backdrop from '../../ui/backdrop/backdrop'
import classes from './sidedrawer.module.css';
import Navigationitems from '../navigationItems/navigationitems';
import { NavbarBrand } from 'reactstrap';

const sideDrawer = (props) => {
    let attachedClasses = [ classes.SideDrawer , classes.Close ]
    if(props.slider){
        attachedClasses = [ classes.SideDrawer , classes.Open ]
    }
    return(

        <Aux>
              <Backdrop show = {props.slider} toggle = {props.toggle} />
              <ul className={attachedClasses.join(' ')} style={{overflow:'scroll'}}>
                <NavbarBrand style={{fontSize:'250%'}}>Payroll</NavbarBrand>
                <hr />
                <div style={{width:'100%', textAlign: 'center'}}>
                    <i className="fas fa-user-circle" style={{fontSize:'250%' }}></i>
                    <h4>Hello Admin</h4>
                    <p style={{fontWeight:'400'}}>Welcome Back</p>
                </div>
                <Navigationitems />
              </ul>
        </Aux>
    )
} 


export default sideDrawer;