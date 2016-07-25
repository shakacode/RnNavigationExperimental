// @flow

import React, { Component, PropTypes } from 'react';
import { NavigationExperimental, View } from 'react-native';
import type { PropsWithNavigate } from '../../../types/propTypes';

import createAppNavigationContainer from '../hocs/createAppNavigationContainer';
import YourTabs from './YourTabs';
import YourHeader from './YourHeader';
import YourScene from './YourScene';
import styles from '../styles';
const {
  CardStack: NavigationCardStack,
  PropTypes: NavigationPropTypes,
} = NavigationExperimental;

// Define your own controlled navigator.
const Navigator = createAppNavigationContainer(class extends Component {
  props: PropsWithNavigate;
  back: Function;
  renderHeader: Function;
  renderScene: Function;

  static propTypes = {
    appNavigationState: PropTypes.shape({
      apple: NavigationPropTypes.navigationState.isRequired,
      banana: NavigationPropTypes.navigationState.isRequired,
      orange: NavigationPropTypes.navigationState.isRequired,
      tabs: NavigationPropTypes.navigationState.isRequired,
    }),
    navigate: PropTypes.func.isRequired,
  };

  // This sets up the methods (e.g. Pop, Push) for navigation.
  constructor(props: any, context: any) {
    super(props, context);
    this.back = this.back.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  // Now use the `NavigationCardStack` to render the scenes.
  render() {
    const { appNavigationState } = this.props;
    const { tabs } = appNavigationState;
    const tabKey = tabs.routes[tabs.index].key;
    const scenes = appNavigationState[tabKey];

    return (
      <View style={styles.navigator}>
        <NavigationCardStack
          key={`stack_${tabKey}`}
          onNavigateBack={this.back}
          navigationState={scenes}
          renderOverlay={this.renderHeader}
          renderScene={this.renderScene}
          style={styles.navigatorCardStack}
        />
        <YourTabs
          navigationState={tabs}
        />
      </View>
    );
  }

  // Render the header.
  // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
  // as type `NavigationSceneRendererProps`.
  renderHeader(sceneProps: Object) {
    return (
      <YourHeader
        {...sceneProps}
      />
    );
  }

  // Render a scene for route.
  // The detailed spec of `sceneProps` is defined at `NavigationTypeDefinition`
  // as type `NavigationSceneRendererProps`.
  renderScene(sceneProps: Object) {
    return (
      <YourScene
        {...sceneProps}
      />
    );
  }

  back() {
    this.props.navigate({ type: 'pop' });
  }
});

export default Navigator;
