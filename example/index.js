/**
 * Masonry demo app
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Masonry from '../lib/Masonry';

const sentences = [
  "Hello",
  "GoodBye",
  "How are you doing today? I'm fine thank you",
  "Who's a good boy?"
];

let lotOfSentences = [];

for (let i = 0; i < 30; i++) {
  lotOfSentences.push(...sentences);
}

const MasonryExample  = () => (
  <Masonry columns={3}>
    {lotOfSentences.map((text, i) => (
      <View style={styles.cell} key={i}>
        <Text>{text}</Text>
      </View>
    ))}
  </Masonry>
);


const styles = StyleSheet.create({
  cell: {
    borderColor: "black",
    borderWidth: 1
  }
});

export default MasonryExample;
