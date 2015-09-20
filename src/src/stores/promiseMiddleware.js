export default () => ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  const { promise, type, ...rest } = action;
  if (!promise) {
    return next(action);
  }
  next({ ...rest, type });
  return promise().then(r => r.data).then(result => {
    next({ ...rest, result, type: `${type}__OK` });
  }).catch((error) => next({...rest, error, type: `${type}__FAIL`}));
};
