import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import './Login.scss';
import LoginForm from '../../../components/LoginForm';

const handleSubmit = (data) => {
  console.log(data);
};

const Login = () => (
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
          onValidSubmit={handleSubmit}
          isLoading={false}
          className="login--form"
        />
      </div>
    </div>
  </div>
);

export default Login;
