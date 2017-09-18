import React, { PropTypes } from 'react';

const SubjectContainer = ({ children }) => (
  <div className="subjects">
    {children}
  </div>
);

SubjectContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubjectContainer;
