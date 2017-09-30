import React from 'react';
import PropTypes from 'prop-types';

const IdeasContainer = ({ children }) => (
  <div className="ideas">
    {children}
  </div>
);

IdeasContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IdeasContainer;
