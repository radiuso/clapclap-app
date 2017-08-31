import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Redirect } from 'react-router';

import routes from './routes';
import store, { history } from './store';

import Layout from './pages/Layout';
import NotFound from './pages/NotFound';


const App = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Route path="*" component={NotFound} />
      </Layout>
    </ConnectedRouter>
  </Provider>
);

export default App;
