import React from 'react';
import { Route, Redirect } from 'react-router';

import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

const routes = (
  <Route component={Layout}>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
