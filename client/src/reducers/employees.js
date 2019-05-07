import { FETCH_EMPLOYEE , FETCH_EMPLOYEE_ERROR , NEW_EMPLOYEE , NEW_EMPLOYEE_ERROR} from '../actions/types';

const INITIAL_STATE = {
    Employees : null,
    Error : null
}

export default function(state = INITIAL_STATE , action){
    switch(action.type){
        case FETCH_EMPLOYEE:
            return { ...state , Employees  : action.payload}
        case NEW_EMPLOYEE:
            return { ...state , Employees : action.payload }
        case NEW_EMPLOYEE_ERROR:
            return { ...state , Error : action.payload}
        case FETCH_EMPLOYEE_ERROR:
            return { ...state , Error : action.payload}
        default:
            return { ...state }    

        }
    }        