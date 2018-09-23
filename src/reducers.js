import { CHANGE_SEARCHFIELD } from './constants.js';
//import './actions.js';

const initialState = {
  searchField: 'boom',
}

export const searchRobots = (state=initialState, action={}) => {
  console.log(action.type);
  switch(action.type) {
    case CHANGE_SEARCHFIELD: 
    //because of second Redux principle
    console.log("it works")
      return Object.assign({}, state, { searchField: action.payload } );
    default:
      return state;
  }
}