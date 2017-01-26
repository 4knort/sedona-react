import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { throttle } from 'lodash';
import rootReducer from 'modules';

const routingMiddleware = routerMiddleware(hashHistory);

const middlewares = [
  thunkMiddleware,
  routingMiddleware,
];

function loadState() {
  try {
    const serializedState = JSON.parse(localStorage.getItem('state'));
    if (serializedState === null) { return undefined; }
    return serializedState;
  } catch (e) {
    return undefined;
  }
}

const configureStore = (initialState = loadState()) => {
  // Prevent redux devTools initialization in production
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension && process.env.NODE_ENV === 'development'
      ? window.devToolsExtension()
      : f => f
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules', () => {
      const nextRootReducer = require('./modules/index');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
