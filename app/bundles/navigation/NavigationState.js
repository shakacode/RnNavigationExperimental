// @flow

import { NavigationExperimental } from 'react-native';

/**
 * Basic example that shows how to use <NavigationCardStack /> to build
 * an app with composite navigation system.
 */

const { StateUtils: NavigationStateUtils } = NavigationExperimental;


// Define what app navigation state will look like.
const createAppNavigationState = () => ({
    // Three tabs.
  tabs: {
    index: 0,
    routes: [
        { key: 'apple' },
        { key: 'banana' },
        { key: 'orange' },
    ],
  },
    // Scenes for the `apple` tab.
  apple: {
    index: 0,
    routes: [{ key: 'Apple Home' }],
  },
    // Scenes for the `banana` tab.
  banana: {
    index: 0,
    routes: [{ key: 'Banana Home' }],
  },
    // Scenes for the `orange` tab.
  orange: {
    index: 0,
    routes: [{ key: 'Orange Home' }],
  },
});

// Define what app navigation state shall be updated.
const updateAppNavigationState = ((state: Object, action: Object): Object => {
  let { type } = action;
  if (type === 'BackAction') {
    type = 'pop';
  }

  switch (type) {
    case 'push': {
      // Push a route into the scenes stack.
      const route: Object = action.route;
      const { tabs } = state;
      const tabKey = tabs.routes[tabs.index].key;
      const scenes = state[tabKey];
      const nextScenes = NavigationStateUtils.push(scenes, route);
      if (scenes !== nextScenes) {
        return {
          ...state,
          [tabKey]: nextScenes,
        };
      }
      break;
    }

    case 'pop': {
      // Pops a route from the scenes stack.
      const { tabs } = state;
      const tabKey = tabs.routes[tabs.index].key;
      const scenes = state[tabKey];
      const nextScenes = NavigationStateUtils.pop(scenes);
      if (scenes !== nextScenes) {
        return {
          ...state,
          [tabKey]: nextScenes,
        };
      }
      break;
    }

    case 'selectTab': {
      // Switches the tab.
      const tabKey: string = action.tabKey;
      const tabs = NavigationStateUtils.jumpTo(state.tabs, tabKey);
      if (tabs !== state.tabs) {
        return {
          ...state,
          tabs,
        };
      }
      break;
    }

    default: {
      throw new Error(`Unexpected value for type ${type}`);
    }
  }
  return state;
});

export { createAppNavigationState, updateAppNavigationState };
