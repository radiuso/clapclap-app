import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header, Icon } from 'semantic-ui-react';

import './Login.scss';
import LoginForm from '../../../components/LoginForm';
import { login } from '../../../entities/auth/auth.actions';

class Login extends Component {
  componentWillReceiveProps(newProps) {
    if (newProps.auth.isAuthenticated) {
      newProps.history.push('/');
    }
  }

  render() {
    const { auth } = this.props;
    return (
      <div className="login">
        <div className="login--shape" />
        <div className="login--container">
          <Header as="h1" icon textAlign="center">
            <Icon className="app--icon" name="hand peace" circular />
            <Header.Content>
              <span className="app--title">ClapClap</span>
            </Header.Content>
          </Header>
          <div>
            <LoginForm
              onValidSubmit={login}
              isLoading={auth.isLoading}
              className="login--form"
            />
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.authState,
});

export default connect(
  mapStateToProps,
)(Login);
