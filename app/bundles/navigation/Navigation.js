import React, { Component } from 'react';

import Navigator from './containers/Navigator';

import { createAppNavigationState, updateAppNavigationState } from './NavigationState';

// Define a component for your application that owns the navigation state.
class Navigation extends Component {

  // This sets up the initial navigation state.
  constructor(props: {}, context: {}) {
    super(props, context);

    // This sets up the initial navigation state.
    this.state = createAppNavigationState();
    this.navigate = this.navigate.bind(this);
  }

  render() {
    // User your own navigator (see next step).
    return (
      <Navigator
        appNavigationState={this.state}
        navigate={this.navigate}
      />
    );
  }

  // This handles the navigation state changes. You're free and responsible
  // to define the API that changes that navigation state. In this exmaple,
  // we'd simply use a `updateAppNavigationState` to update the navigation
  // state.
  navigate(action: {}): void {
    const state = updateAppNavigationState(
      this.state,
      action,
    );

    // `updateAppNavigationState` (which uses NavigationStateUtils) gives you
    // back the same `state` if nothing has changed. You could use
    // that to avoid redundant re-rendering.
    if (this.state !== state) {
      this.setState(state);
    }
  }
}

export default Navigation;
