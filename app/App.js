// @flow
/*
 * Once you put in react-redux
 */
/*
import React from 'react';
import { Provider } from 'react-redux';

import createStore from './libs/store/store';
import Navigation from './bundles/navigation/Navigation';

export default () => {
  const store = createStore();
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
*/

import React from 'react';
import Navigation from './bundles/navigation/Navigation';

export default () => (
  <Navigation />
);

