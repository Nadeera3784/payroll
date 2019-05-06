import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/navigation/header/header'
import Slider from '../../components/navigation/sidedrawer/sidedrawer';
import Aux from '../aux/aux';
import * as actions from '../../actions';
import { connect } from 'react-redux';

import Dashboard from '../../containers/dashboard/dashboardContainer';
import Employee from '../../containers/employees/employeeContainer';
const Payment = () => <div id='3'>Paymenst</div>
const Leaving = () => <div id='4'>Leaving</div>

class Layout extends React.Component {

    render(){
        return(
            <Aux>
                <Header toggle = {this.props.toggle} />
                <Slider slider = {this.props.slider} toggle = {this.props.toggle} />
                <main style={{marginTop : '20px'}}>
                    <Route path="/dashboard" exact render={() => <Dashboard />} />
                    <Route path="/employees" exact render={() => <Employee />} />
                    <Route path="/payments" exact render={() => <Payment />} />
                    <Route path="/leaves"exact render={() => <Leaving />} />
                </main>
            </Aux>
        )
    }
}
function mapSatateToProps(state){
    return { slider : state.sideDrawerAndAcitveLink.slider }
}
export default connect(mapSatateToProps, actions)(Layout);