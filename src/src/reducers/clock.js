import { createReducer } from 'utils';
import moment from 'moment';

export default createReducer({}, {
  CLOCK_TICK: () => ({now: moment()})
});
