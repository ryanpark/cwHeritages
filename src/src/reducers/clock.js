import { createReducer } from 'utils';
import moment from 'moment';

export default createReducer({now: moment()}, {
  CLOCK_TICK: () => ({now: moment()})
});
