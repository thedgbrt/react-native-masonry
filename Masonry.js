// @flow
import React from 'react';
import { ScrollView } from 'react-native';

const Masonry = (props: {children?: React$Element<any>}) => (
  <ScrollView>
    {props.children}
  </ScrollView>
);

export default Masonry;
