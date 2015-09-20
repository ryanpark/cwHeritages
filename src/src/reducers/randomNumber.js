import { createReducer } from 'utils';

export default createReducer({loading: true}, {
  LOAD_RANDOM_NUMBER: () => ({loading: true}),
  LOAD_RANDOM_NUMBER__OK: (state, action) => ({loading: false, ...action.result}),
  LOAD_RANDOM_NUMBER__FAIL: (state, action) => ({loading: false, error: action.error})
});
