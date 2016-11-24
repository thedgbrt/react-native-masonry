// @flow
import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import { ScrollView, Text, View } from 'react-native';
import Masonry from '../lib/Masonry';
import MasonryItem from '../lib/MasonryItem';

describe('<Masonry />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Masonry />);
  });

  it('Renders children', () => {
    const wrapper = shallow(
      <Masonry>
        <Text>Hello</Text>
      </Masonry>
    );
    expect(wrapper.children().length).toBe(1);
  });

  it('Wrap each child in MasonryItem', () => {
    const wrapper = shallow(
      <Masonry>
        <Text>Hello</Text>
        <Text>How are you doing today?</Text>
      </Masonry>
    );
    wrapper.children().map((child) => {
      expect(child.is(MasonryItem)).toBe(true);
    });
  });
});
