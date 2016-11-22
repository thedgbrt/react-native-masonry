// @flow
import React from 'react';
import 'react-native';
import { View } from 'react-native';
import { shallow } from 'enzyme';

import Masonry from './Masonry';

it('Renders correctly', () => {
  const tree = shallow(<Masonry />);
});
