import React, { PropTypes } from 'react';

const Layout = ({ children }) => (
  <div className="not-found">
    hey hey
    { children }
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
