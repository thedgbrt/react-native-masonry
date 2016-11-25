// @flow
import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import { ScrollView, Text, View } from 'react-native';
import Masonry from '../lib/Masonry';
import MasonryItem from '../lib/MasonryItem';

describe('<Masonry />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Masonry columns={3} />);
  });

  it('Doesn\'t render children if state.width == 0', () => {
    const wrapper = shallow(
      <Masonry columns={3}>
        <Text>Hello</Text>
      </Masonry>
    );
    wrapper.setState({ width: 0 });
    expect(wrapper.children().length).toBe(0);
  });

  it('Renders children if state.width > 0', () => {
    const wrapper = shallow(
      <Masonry columns={3}>
        <Text>Hello</Text>
      </Masonry>
    );
    wrapper.setState({ width: 150 });
    expect(wrapper.children().length).toBe(1);
  });

  it('Wraps each given child in MasonryItem', () => {
    const wrapper = shallow(
      <Masonry columns={3}>
        <Text>Hello</Text>
        <Text>How are you doing today?</Text>
      </Masonry>
    );
    wrapper.setState({ width: 400 });
    wrapper.children().map((child) => {
      expect(child.is(MasonryItem)).toBe(true);
    });
  });

  it('Gives the same width to each child', () => {
    const wrapper = shallow(
      <Masonry columns={3}>
        <View></View>
        <Text>How are you doing today?</Text>
        <View></View>
        <Text>How are you doing today?</Text>
      </Masonry>
    );
    wrapper.setState({ width: 300 });
    wrapper.children().map((child) => {
      expect(child.prop("width")).toBeDefined();
    });
  });

  it('Updates state.width on layout event', () => {
    const wrapper = shallow(<Masonry columns={3}/>);
    wrapper.first().simulate("layout", { nativeEvent: { layout: { width: 500 } } });
    expect(wrapper.state().width).toBe(500);
  });

  it('Child width is computed from state.width and props.columns', () => {
    const wrapper = shallow(
      <Masonry columns={3}>
        <Text>I am a child component</Text>
      </Masonry>
    );
    const child = wrapper.children().first();

    const width1 = wrapper.children().first().prop("width");
    wrapper.setState({ width: 400 });
    const width2 = wrapper.children().first().prop("width");
    wrapper.setProps({ columns: 2 });
    const width3 = wrapper.children().first().prop("width");

    expect(width2).not.toBe(width1);
    expect(width3).not.toBe(width2);
  });
});
