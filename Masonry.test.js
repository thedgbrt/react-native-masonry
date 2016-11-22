// @flow
import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';

import Masonry from './Masonry';

it('Renders correctly', () => {
  const tree = renderer.create(
    <Masonry />
  );
});
