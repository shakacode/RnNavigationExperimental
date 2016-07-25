// Temp file demonstrating a simple view
// TODO: replace with real view

import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import styles from './NavigationExampleRowStyle';

const NavigationExampleRow = (props: any) => {
  if (props.onPress) {
    return (
      <TouchableHighlight
        style={styles.row}
        underlayColor="#D0D0D0"
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>
          {props.text}
        </Text>
      </TouchableHighlight>
    );
  }

  return (
    <View style={styles.row}>
      <Text style={styles.rowText}>
        {props.text}
      </Text>
    </View>
  );
};

export default NavigationExampleRow;
