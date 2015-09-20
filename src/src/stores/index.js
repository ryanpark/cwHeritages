import { compose, createStore, applyMiddleware } from 'redux';
import { devTools } from 'redux-devtools';
import rootReducer from 'reducers';
import promiseMiddleware from './promiseMiddleware';

let createStoreWithMiddleware;

if (__DEBUG__) {
  createStoreWithMiddleware = compose(applyMiddleware(promiseMiddleware()), devTools())(createStore);
} else {
  createStoreWithMiddleware = compose(applyMiddleware(promiseMiddleware()))(createStore);
}

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
