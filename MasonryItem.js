// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';

const MasonryItem = (props: { children?: React$Element<any> }) => (
  <View style={styles.wrapper}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    width: 50
  }
});

export default MasonryItem;
