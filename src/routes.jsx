import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Auth/Login';

const routes = (
  <Switch>
    <Route path="/login" component={Login} />
    <Layout>
      <Switch>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Switch>
);

export default routes;
