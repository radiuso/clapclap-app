import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Container } from 'semantic-ui-react';
import Navbar from '../../components/Navbar';

const Layout = ({ children, app }) => (
  <div>
    <Helmet>
      <title>{ app.app_title }</title>
    </Helmet>
    <Navbar />
    <Container className="app-content">
      { children }
    </Container>
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
