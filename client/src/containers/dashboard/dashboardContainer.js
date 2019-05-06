import React from 'react';
import Dashboard from '../../components/dashboard/dashboard';

class DashboardContainer extends React.Component{
    state = { date: null}
    componentDidMount(){
        const date = new Date().toDateString();
        this.setState({ date })
    }
    render(){
        return <Dashboard date={this.state.date}/>
    }
}

export default DashboardContainer;