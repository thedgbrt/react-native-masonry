// @flow
import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import { ScrollView, Text, View } from 'react-native';
import Masonry from './Masonry';
import MasonryItem from './MasonryItem';

describe('<Masonry />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Masonry />);
  });

  it('Is scrollable', () => {
    const wrapper = shallow(
      <Masonry />
    );
    expect(wrapper.equals(<ScrollView />)).toBe(true);
  });

  it('Renders children', () => {
    const wrapper = shallow(
      <Masonry>
        <Text>Hello</Text>
      </Masonry>
    );
    expect(wrapper.children().length).toBe(1);
  });

  it('Each child gets wrapped in MasonryItem', () => {
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
