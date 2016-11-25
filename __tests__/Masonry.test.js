// @flow
import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import { ScrollView, Text, View } from 'react-native';
import Masonry from '../lib/Masonry';
import MasonryItem from '../lib/MasonryItem';

describe('<Masonry />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Masonry columns={1} />);
  });

  it('Default state.containerWidth is 0', () => {
    const wrapper = shallow(
      <Masonry columns={2}>
        <Text>Hello</Text>
      </Masonry>
    );
    expect(wrapper.state("containerWidth")).toBe(0);
  });

  it('Doesn\'t render children if state.width == 0', () => {
    const wrapper = shallow(
      <Masonry columns={2}>
        <Text>Hello</Text>
      </Masonry>
    ).setState({ containerWidth: 0 });
    expect(wrapper.children().length).toBe(0);
  });

  it('Renders children if state.width > 0', () => {
    const wrapper = shallow(
      <Masonry columns={3}>
        <Text>Hello</Text>
      </Masonry>
    ).setState({ containerWidth: 150 });
    expect(wrapper.children().length).toBe(1);
  });

  it('Wraps each given child in MasonryItem', () => {
    const wrapper = shallow(
      <Masonry columns={4}>
        <Text>Hello</Text>
        <Text>How are you doing today?</Text>
      </Masonry>
    ).setState({ containerWidth: 400 });
    expect(wrapper.childAt(0).is(MasonryItem)).toBe(true);
    expect(wrapper.childAt(1).is(MasonryItem)).toBe(true);
  });

  it('Gives children a width prop', () => {
    const wrapper = shallow(
      <Masonry columns={1}>
        <View></View>
      </Masonry>
    ).setState({ containerWidth: 200 });
    expect(wrapper.childAt(0).prop("width")).toBeGreaterThan(-1);
  });

  it('Gives the same width to each child', () => {
    const wrapper = shallow(
      <Masonry columns={5}>
        <View></View>
        <Text>I am a long sentence. My purpose is to vary the kind of content that is tested.</Text>
      </Masonry>
    ).setState({ containerWidth: 300 });
    expect(wrapper.childAt(0).prop("width")).toEqual(wrapper.childAt(1).prop("width"));
  });

  it('Updates state.width on layout event', () => {
    const wrapper = shallow(<Masonry columns={6}/>);
    wrapper.first().simulate("layout", { nativeEvent: { layout: { width: 500 } } });
    expect(wrapper.state().containerWidth).toBe(500);
  });

  it('Child width is computed from state.width and props.columns', () => {
    const wrapper = shallow(
      <Masonry columns={7}>
        <Text>I am a child component</Text>
      </Masonry>
    );
    const child = wrapper.children().first();

    const width1 = wrapper.children().first().prop("width");
    wrapper.setState({ containerWidth: 400 });
    const width2 = wrapper.children().first().prop("width");
    wrapper.setProps({ columns: 2 });
    const width3 = wrapper.children().first().prop("width");

    expect(width2).not.toBe(width1);
    expect(width3).not.toBe(width2);
  });
});
