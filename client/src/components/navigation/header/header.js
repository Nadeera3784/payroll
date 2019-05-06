import React from 'react';
import classes from './header.module.css';
import Navigationitems from '../navigationItems/navigationitems';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

    const Header = (props) => {
            return(
                <div className='clearfix'>
                    <Navbar color="light" light expand="md" style={{boxShadow : '0px 2px 5px gray'}}>
                        <NavbarBrand>Payroll</NavbarBrand>
                        <NavbarToggler onClick={props.toggle}/>
                        <Collapse navbar>
                            <Nav className="ml-auto" navbar>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        <i className="fas fa-user-circle" style={{fontSize:'150%'}}></i>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Option 1
                                        </DropdownItem>
                                        <DropdownItem>
                                            Option 2
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Reset
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav> 
                        </Collapse>
                    </Navbar>
                    <div className = {classes.Header}>
                        <Navbar color="dark" className={classes.desktop} style = {{height : '35px' , boxShadow : '0px 2px 5px gray'}} light expand="md">
                                <Nav >
                                        <Navigationitems />
                                </Nav>                       
                        </Navbar>
                    </div>
                </div>
            )
     }

    export default Header;