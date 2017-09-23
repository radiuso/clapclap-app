import update from 'react-addons-update';
import { APP_TITLE_CHANGE, LOCATION_CHANGE } from './app.types';

const initialState = {
  app_title: 'clapclap',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_TITLE_CHANGE:
      return update(state, {
        app_title: { $set: `${action.data.title} - ${initialState.app_title}` },
      });
    case LOCATION_CHANGE:
      return initialState;
    default:
      return state;
  }
};
