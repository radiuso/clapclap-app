import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Sidenav from '../../components/Sidenav';
import Navbar from '../../components/Navbar';

const Layout = ({ children, app }) => (
  <div>
    <Helmet>
      <title>{ app.app_title }</title>
    </Helmet>
    <Navbar />
    <Sidenav />
    { children }
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  app: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.authState,
  app: state.appState,
});

export default connect(
  mapStateToProps,
)(Layout);
