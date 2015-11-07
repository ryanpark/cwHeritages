import axios from 'axios';

export const randomNumber = () => ({
  type: 'LOAD_RANDOM_NUMBER',
  promise: () => axios.get('http://putsreq.com/yhD2GkTsWafkgl8oYk0g')
});

export const clock = () => dispatch => dispatch({ type: 'CLOCK_TICK' });
