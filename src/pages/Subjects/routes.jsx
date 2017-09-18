import React from 'react';
import { Route } from 'react-router';

import SubjectsContainer from './SubjectsContainer';
import SubjectList from './SubjectList';
import SubjectEdit from './SubjectEdit';

const routes = (
  <SubjectsContainer>
    <Route path="/subjects" exact component={SubjectList} />
    {/* <Route path="/subjects/new" component={OrderCreate} /> */}
    <Route path="/subjects/:id" component={SubjectEdit} />
  </SubjectsContainer>
);

export default routes;
