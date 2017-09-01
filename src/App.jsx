import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect, Switch } from 'react-router';

import routes from './routes';
import store, { history } from './store';

import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Auth/Login';

const App = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>
);

export default App;
