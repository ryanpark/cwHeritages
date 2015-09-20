import { combineReducers } from 'redux';
import randomNumber from './randomNumber';
import clock from './clock';

export default combineReducers({
  randomNumber,
  clock
});
