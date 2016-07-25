// @flow

import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity, NavigationExperimental } from 'react-native';

import type { PropsWithNavigateType } from '../../../types/propTypes';
import createAppNavigationContainer from '../hocs/createAppNavigationContainer';
import styles from '../styles';

const {
  PropTypes: NavigationPropTypes,
} = NavigationExperimental;

const YourTab = createAppNavigationContainer(class extends Component {
  props: PropsWithNavigateType;
  onPress: Function;

  static propTypes = {
    navigate: PropTypes.func.isRequired,
    route: NavigationPropTypes.navigationRoute.isRequired,
    selected: PropTypes.bool.isRequired,
  };

  constructor(props: Object, context: any) {
    super(props, context);
    this.onPress = this.onPress.bind(this);
  }

  render() {
    const style = [styles.tabText];
    if (this.props.selected) {
      style.push(styles.tabSelected);
    }

    return (
      <TouchableOpacity style={styles.tab} onPress={this.onPress}>
        <Text style={style}>
          {this.props.route.key}
        </Text>
      </TouchableOpacity>
    );
  }

  onPress() {
    this.props.navigate({ type: 'selectTab', tabKey: this.props.route.key });
  }
});

export default YourTab;
