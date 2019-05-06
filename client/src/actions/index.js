import axios from 'axios';
import { AUTH_USER, AUTH_ERROR, TOGGLE_SIDEDRAWER, CHANGE_ACTIVE_LINK, FETCH_EMPLOYEE, FETCH_EMPLOYEE_ERROR,TOGGLE_MODAL } from './types';

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:9000/signup',
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:9000/signin',
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
};
//=========================== Interface =================
export const toggle = () => {
  return ({
    type: TOGGLE_SIDEDRAWER
  })
}

export const activeLink = (id) => {
  return ({
    type: CHANGE_ACTIVE_LINK,
    payload: id
  })
}

export const toggleModal = () => {
  return ({
    type: TOGGLE_MODAL
  })
}


//========================== Employee =====================

export const fetchEmployees = () => async dispatch => {
  try{
    axios.defaults.headers.common['authorization'] = localStorage.getItem('token')
    const employees = await axios.get('http://localhost:9000/departments');
    dispatch({
      type: FETCH_EMPLOYEE,
      payload : employees.data
    })
  }catch(err){
    dispatch({
      type : FETCH_EMPLOYEE_ERROR,
      payload : err
    })
  }  

}