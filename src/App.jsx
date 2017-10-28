import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';
import routes from './routes';

const App = (
  <Provider store={store}>
    <IntlProvider>
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
    </IntlProvider>
  </Provider>
);

export default App;
