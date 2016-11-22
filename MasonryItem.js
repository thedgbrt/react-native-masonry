// @flow
import React from 'react';
import { View } from 'react-native';

const MasonryItem = (props: { children?: React$Element<any> }) => (
  <View>
    {props.children}
  </View>
);

export default MasonryItem;
