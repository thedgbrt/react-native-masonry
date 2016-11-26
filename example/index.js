/**
 * Masonry demo app
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Masonry from '../lib/Masonry';

const data = [
  { text: "Hello" },
  { text: "GoodBye" },
  { text: "How are you doing today? I'm fine thank you" },
  { text: "Who's a good boy?" }
];

let lotsOfData = [];

for (let i = 0; i < 30; i++) {
  lotsOfData.push(...data);
}

const MasonryExample  = () => (
  <Masonry
    columns={3}
    data={lotsOfData}
  />
);

export default MasonryExample;
