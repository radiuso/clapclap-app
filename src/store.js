import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import isUndefined from 'lodash/isUndefined';

import reducers from './reducers';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);


// Combine Reducers
const mergedReducers = {
  ...reducers,
  routing: routerReducer,
};

const initialState = {
};

// TODO remove devtool in prod
const store = createStore(
  combineReducers(mergedReducers),
  initialState,
  composeWithDevTools(),
  applyMiddleware(middleware),
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

store.dispatchAsync = (promise, options, payload) => {
  const { request, success, failure } = options;
  // dispatch pending request
  if (!isUndefined(request)) {
    store.dispatch({
      type: request,
      payload: Object.assign({}, payload),
    });
  }
  // dispatch success response
  return promise
    .then((response) => {
      store.dispatch({
        type: success,
        payload: Object.assign({}, payload, { response }),
      });

      return response;
    })
    .catch((error) => {
      // dispatch error reducer action if set
      if (!isUndefined(failure)) {
        store.dispatch({
          type: failure,
          payload: Object.assign({}, payload, { error }),
        });
      }
      // throw error to be able to add another catch
      throw error;
    });
};

export default store;

export {
  history,
};
