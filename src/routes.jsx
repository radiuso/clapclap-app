import React from 'react';
import { Route, Switch } from 'react-router';

import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Auth/Login';

import Subjects from './pages/Subjects';

const routes = (
  <Switch>
    <Route path="/login" component={Login} />
    <Layout>
      <Switch>
        <Route path="/subjects" component={Subjects} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </Switch>
);

export default routes;
