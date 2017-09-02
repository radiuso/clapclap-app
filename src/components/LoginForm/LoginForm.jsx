import React, { PropTypes } from 'react';
import { Label, Button } from 'semantic-ui-react';
import {
  Form,
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
      placeholder="ex: test@example.com"
      validations="isEmail"
      validationErrors={{
        isDefaultRequiredValue: 'How can I authenticate you without this?',
        isEmail: 'Email not valid',
      }}
      errorLabel={errorLabel}
      required
      {...rest}
    />

    <Form.Input
      type="password"
      name="password"
      label="Password"
      errorLabel={errorLabel}
      validationErrors={{ isDefaultRequiredValue: 'How can I authenticate you without this?' }}
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
