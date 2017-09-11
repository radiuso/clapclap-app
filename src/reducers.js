/* Reducers */
import { intlReducer } from 'react-intl-redux';
import authReducer from './entities/auth/auth.reducer';
import appReducer from './entities/app/app.reducer';
import subjectsReducer from './entities/subjects/subjects.reducer';

export default {
  intl: intlReducer,
  authState: authReducer,
  appState: appReducer,
  subjectsState: subjectsReducer,
};
