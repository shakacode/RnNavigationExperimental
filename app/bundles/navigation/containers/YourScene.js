// @flow

import React, { Component, PropTypes } from 'react';
import { NavigationExperimental, ScrollView } from 'react-native';

import type { PropsWithNavigateType } from '../../../types/propTypes';
import createAppNavigationContainer from '../hocs/createAppNavigationContainer';
import NavigationExampleRow from './NavigationExampleRow/NavigationExampleRow';
import styles from '../styles';

const {
  PropTypes: NavigationPropTypes,
} = NavigationExperimental;

const YourScene = createAppNavigationContainer(class extends Component {
  props: PropsWithNavigateType;
  popRoute: Function;
  pushRoute: Function;

  static propTypes = {
    ...NavigationPropTypes.SceneRendererProps,
    navigate: PropTypes.func.isRequired,
  };

  constructor(props: Object, context: any) {
    super(props, context);
    this.popRoute = this.popRoute.bind(this);
    this.pushRoute = this.pushRoute.bind(this);
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <NavigationExampleRow
          text="Push Route"
          onPress={this.pushRoute}
        />
        <NavigationExampleRow
          text="Pop Route"
          onPress={this.popRoute}
        />
      </ScrollView>
    );
  }

  pushRoute(): void {
    // Just push a route with a new unique key.
    const route = { key: `[${this.props.scenes.length}]-${Date.now()}` };
    this.props.navigate({ type: 'push', route });
  }

  popRoute(): void {
    this.props.navigate({ type: 'pop' });
  }

});

export default YourScene;
