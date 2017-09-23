import React from 'react';
import { Route } from 'react-router';

import IdeasContainer from './IdeasContainer';
import IdeaList from './IdeaList';
import IdeaEdit from './IdeaEdit';

const routes = (
  <IdeasContainer>
    <Route path="/ideas" exact component={IdeaList} />
    <Route path="/ideas/:id" component={IdeaEdit} />
  </IdeasContainer>
);

export default routes;
