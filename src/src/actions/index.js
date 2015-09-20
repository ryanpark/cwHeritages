import axios from 'axios';

export const randomNumber = () => ({
  type: 'LOAD_RANDOM_NUMBER',
  promise: () => axios.get('http://putsreq.com/5KK4IN8NYbvKyMMy13hX')
});

export const clock = () => dispatch => dispatch({ type: 'CLOCK_TICK' });
