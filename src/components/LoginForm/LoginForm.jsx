import React, { PropTypes } from 'react';
import { Label, Button } from 'semantic-ui-react';
import {
  Form, Input,
} from 'formsy-semantic-ui-react';

const errorLabel = <Label color="red" pointing />;

const LoginForm = ({ onValidSubmit, isLoading, ...rest }) => (
  <Form
    onValidSubmit={onValidSubmit}
    loading={isLoading}
  >
    <Form.Input
      name="login"
      label="Email"
      validations="isEmail"
      validationErrors={{ isEmail: 'Email not valid' }}
      errorLabel={errorLabel}
      {...rest}
    />

    <Form.Input
      name="password"
      label="Password"
      errorLabel={errorLabel}
      required
    />

    <Button>Login</Button>
  </Form>
);

LoginForm.propTypes = {
  onValidSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

LoginForm.defaultProps = {
  isLoading: false,
};

export default LoginForm;
