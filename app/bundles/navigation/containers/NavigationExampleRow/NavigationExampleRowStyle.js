// @flow

import {
  PixelRatio,
  StyleSheet,
} from 'react-native';

const BACKGROUND_COLOR = 'white';
const BORDER_BOTTOM_COLOR = '#CDCDCD';

const styles = StyleSheet.create({
  row: {
    padding: 15,
    backgroundColor: BACKGROUND_COLOR,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: BORDER_BOTTOM_COLOR,
  },
  rowText: {
    fontSize: 17,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
});

export default styles;
