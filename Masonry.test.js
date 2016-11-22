// @flow
import React from 'react';
import 'react-native';
import { Text } from 'react-native';
import { shallow } from 'enzyme';

import Masonry from './Masonry';

describe('<Masonry />', () => {
  it('Renders correctly', () => {
    const tree = shallow(<Masonry />);
  });

  it('Renders its children', () => {
    const tree = shallow(
      <Masonry>
        <Text>Hello</Text>
      </Masonry>
    );
    expect(tree.contains(<Text>Hello</Text>)).toBe(true);
  });
});
