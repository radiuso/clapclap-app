import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Auth/Login';

import subjectsRoutes from './pages/Subjects/routes';

const routes = (
  <Switch>
    <Route path="/login" component={Login} />
    <Layout>
      <Switch>
        {subjectsRoutes}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Switch>
);

export default routes;
