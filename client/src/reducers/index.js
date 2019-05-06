import { combineReducers } from 'redux';
import auth from './auth';
import sideDrawerAndAcitveLink from './interface';
import employeeList from './employees';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    auth,
    sideDrawerAndAcitveLink,
    employeeList,
    form: formReducer
});