import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Label, Button } from 'semantic-ui-react';
import { Form } from 'formsy-semantic-ui-react';

const errorLabel = <Label color="red" pointing />;

const LoginForm = ({ intl, onValidSubmit, isLoading, ...rest }) => (
  <Form
    onValidSubmit={onValidSubmit}
    loading={isLoading}
  >
    <Form.Input
      name="login"
      label={intl.formatMessage({ id: 'label.login' })}
      placeholder={intl.formatMessage({ id: 'placeholder.login' })}
      validations="isEmail"
      validationErrors={{
        isDefaultRequiredValue: intl.formatMessage({ id: 'validation.auth.required' }),
        isEmail: intl.formatMessage({ id: 'validation.email.format' }),
      }}
      errorLabel={errorLabel}
      required
      autoFocus
      {...rest}
    />

    <Form.Input
      type="password"
      name="password"
      label={intl.formatMessage({ id: 'label.password' })}
      errorLabel={errorLabel}
      validationErrors={{
        isDefaultRequiredValue: intl.formatMessage({ id: 'validation.auth.required' }),
      }}
      required
    />

    <Button><FormattedMessage id="action.login" /></Button>
  </Form>
);

LoginForm.propTypes = {
  intl: intlShape.isRequired,
  onValidSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

LoginForm.defaultProps = {
  isLoading: false,
};

export default injectIntl(LoginForm);
