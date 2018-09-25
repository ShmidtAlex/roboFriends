import { CHANGE_SEARCHFIELD } from './constants';
//import './actions.js';

const initialStateSearch = {
  //searchRobots: {
    searchField: '',
  //}
}

export const searchRobots = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCHFIELD: 
    //because of second Redux principle
      return Object.assign({}, state, {searchField: action.payload });
    default:
      return state;
  }
}