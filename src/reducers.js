/* Reducers */
import { intlReducer } from 'react-intl-redux';
import authReducer from './entities/auth/auth.reducer';
import appReducer from './entities/app/app.reducer';
import ideasReducer from './entities/ideas/ideas.reducer';

export default {
  intl: intlReducer,
  authState: authReducer,
  appState: appReducer,
  ideasState: ideasReducer,
};
