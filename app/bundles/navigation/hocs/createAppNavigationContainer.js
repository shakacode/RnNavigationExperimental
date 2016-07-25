// @flow
// Defines a helper function that creates a HOC (higher-order-component)
// which provides a function `navigate` through component props. The
// `navigate` function will be used to invoke navigation changes.
// This serves a convenient way for a component to navigate.

// Note the use of context here

import React, { PropTypes } from 'react';
import type { PropsWithNavigateType } from '../../../types/propTypes';

function createAppNavigationContainer(ComponentClass: ReactClass<{}>
  ): ReactClass<PropsWithNavigateType> {
  const key = '_navigationContainerNavigateCall';

  class Container extends React.Component {
    props: PropsWithNavigateType;

    static contextTypes = {
      [key]: PropTypes.func,
    };

    static childContextTypes = {
      [key]: PropTypes.func.isRequired,
    };

    static propTypes = {
      navigate: PropTypes.func,
    };

    getChildContext(): Object {
      return {
        [key]: this.context[key] || this.props.navigate,
      };
    }

    render(): React.Element<any> {
      const navigate = this.context[key] || this.props.navigate;
      return <ComponentClass {...this.props} navigate={navigate} />;
    }
  }

  return Container;
}

export default createAppNavigationContainer;
