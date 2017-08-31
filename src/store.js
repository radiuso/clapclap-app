import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

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

export default store;

export {
  history,
};
