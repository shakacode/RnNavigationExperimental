// @flow

import React, { Component, PropTypes } from 'react';
import { View, NavigationExperimental } from 'react-native';

import type { PropsWithNavigate } from '../../../types/propTypes';
import YourTab from './YourTab';
import createAppNavigationContainer from '../hocs/createAppNavigationContainer';
import styles from '../styles';

const {
  PropTypes: NavigationPropTypes,
} = NavigationExperimental;

const YourTabs = createAppNavigationContainer(class extends Component {
  props: PropsWithNavigate;
  static propTypes = {
    navigationState: NavigationPropTypes.navigationState.isRequired,
    navigate: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.tabs}>
        {this.props.navigationState.routes.map(this.renderTab, this)}
      </View>
    );
  }

  renderTab(route: Object, index: number) {
    return (
      <YourTab
        key={route.key}
        route={route}
        selected={this.props.navigationState.index === index}
      />
    );
  }
});

export default YourTabs;
