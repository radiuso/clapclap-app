import React, { PropTypes } from 'react';
import Navbar from '../../components/Navbar';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    { children }
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
