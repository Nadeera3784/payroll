import React from 'react';
import Employees from '../../components/employees/employees';
import { connect }  from 'react-redux';
import  * as actions from '../../actions/index';

class EmployeesList extends React.Component{
    componentDidMount(){
        this.props.fetchEmployees();
    }
    render(){
     //   this.props.fetchEmployees();
        return (
            <Employees data={this.props.employeeList} />
        )      
    }
}
function mapStateToProps(state){
    // let employeeList = [];
    //  state.employeeList.Employees.forEach(employee => {
    //     employeeList.push(employee);
    // })

    return {employeeList:state.employeeList.Employees};
}
export default connect(mapStateToProps , actions)(EmployeesList);