import React, { PropTypes } from 'react';

const IdeasContainer = ({ children }) => (
  <div className="ideas">
    {children}
  </div>
);

IdeasContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IdeasContainer;
