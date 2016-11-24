/**
 * Masonry demo app
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';
import Masonry from 'react-native-masonry';

const demo  = () => (
  <Masonry>
    <Text>Hello</Text>
    <Text>GoodBye</Text>
  </Masonry>
);

AppRegistry.registerComponent('demo', () => demo);
