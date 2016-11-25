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

  it('Wraps each given child element in MasonryItem', () => {
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

  it('Gives the same width to each child', () => {
    const wrapper = shallow(
      <Masonry>
        <View></View>
        <Text>How are you doing today?</Text>
        <View></View>
        <Text>How are you doing today?</Text>
      </Masonry>
    );
    wrapper.children().map((child) => {
      expect(child.prop("width")).toBeDefined();
    });
  });

  it('Updates state.width on layout event', () => {
    const wrapper = shallow(<Masonry/>);
    wrapper.first().simulate("layout", { nativeEvent: { layout: { width: 500 } } });
    expect(wrapper.state().width).toBe(500);
  });
});
