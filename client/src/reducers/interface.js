import { TOGGLE_SIDEDRAWER, CHANGE_ACTIVE_LINK, TOGGLE_MODAL } from '../actions/types';

const INITIAL_STATE = {
    slider: false,
    modal:false,
    activeLink: '1'
  };
  
export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case TOGGLE_SIDEDRAWER: 
        return { ...state, slider : !state.slider };
      case TOGGLE_MODAL:
        return { ...state, modal : !state.modal }  
      case CHANGE_ACTIVE_LINK:
        return { ...state, activeLink: action.payload };
      default:
        return state;
    }
  }