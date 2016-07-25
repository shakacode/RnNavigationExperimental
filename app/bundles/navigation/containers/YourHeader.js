// @flow

import React, { Component, PropTypes } from 'react';
import { NavigationExperimental } from 'react-native';

const {
  Header: NavigationHeader,
  PropTypes: NavigationPropTypes,
} = NavigationExperimental;


import type { PropsWithNavigateType } from '../../../types/propTypes';
import createAppNavigationContainer from '../hocs/createAppNavigationContainer';


const YourHeader = createAppNavigationContainer(class extends Component {
  props: PropsWithNavigateType;
  back: Function;
  renderTitleComponent: Function

  static propTypes = {
    ...NavigationPropTypes.SceneRendererProps,
    navigate: PropTypes.func.isRequired,
  };

  constructor(props: Object, context: any) {
    super(props, context);
    this.back = this.back.bind(this);
    this.renderTitleComponent = this.renderTitleComponent.bind(this);
  }

  render() {
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this.renderTitleComponent}
        onNavigateBack={this.back}
      />
    );
  }

  back(): void {
    this.props.navigate({ type: 'pop' });
  }

  renderTitleComponent() {
    return (
      <NavigationHeader.Title>
        {this.props.scene.route.key}
      </NavigationHeader.Title>
    );
  }
});

export default YourHeader;
