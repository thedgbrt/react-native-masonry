/**
 * Masonry demo app
 * @flow
 */

import React from 'react';
import { Text } from 'react-native';
import Masonry from '../lib/Masonry';

const MasonryExample  = () => (
  <Masonry columns={3}>
    <Text>Hello</Text>
    <Text>GoodBye</Text>
    <Text>Hello</Text>
    <Text>GoodBye</Text>
  </Masonry>
);

export default MasonryExample;
