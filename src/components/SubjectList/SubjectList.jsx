import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

const SubjectList = ({ subjects, ...rest }) => (
  <Header
    as="h3"
    dividing
    {...rest}
  >
    test
  </Header>
);

SubjectList.propTypes = {
  subjects: PropTypes.array.isRequired,
};

export default SubjectList;
