/* Reducers */
import { intlReducer } from 'react-intl-redux';
import authReducer from './entities/auth/auth.reducer';

export default {
  intl: intlReducer,
  authState: authReducer,
};
