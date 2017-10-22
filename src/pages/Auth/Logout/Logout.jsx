import React, { Component, PropTypes } from 'react';
import { logout } from '../../../entities/auth/auth.actions';

class Logout extends Component {
  componentDidMount() {
    setTimeout(() => {
      logout();
      this.props.history.push('/');
    }, 1000);
  }

  render() {
    return (
      <span>
        Log out...
      </span>
    );
  }
}

Logout.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Logout;
