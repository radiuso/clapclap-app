import store from '../../store';

import { APP_TITLE_CHANGE } from './app.types';

export function setTitle(title) {
  store.dispatch({
    type: APP_TITLE_CHANGE,
    data: {
      title,
    },
  });

  return this;
}

export default {
  setTitle,
};
