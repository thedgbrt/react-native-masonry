// @flow
import React from 'react';
import 'react-native';
import { ScrollView, Text } from 'react-native';
import { shallow } from 'enzyme';

import Masonry from './Masonry';

describe('<Masonry />', () => {
  it('Renders correctly', () => {
    const tree = shallow(<Masonry />);
  });

  it('Is scrollable', () => {
    const tree = shallow(
      <Masonry />
    );
    expect(tree.equals(<ScrollView />)).toBe(true);
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
