import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Auth/Login';
import Logout from './pages/Auth/Logout';

import ideasRoutes from './pages/Ideas/routes';

const routes = (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />
    <Layout>
      <Switch>
        {ideasRoutes}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Switch>
);

export default routes;
