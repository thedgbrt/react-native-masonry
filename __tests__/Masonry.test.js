// @flow
import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import { Text, View } from 'react-native';
import Masonry from '../lib/Masonry';
import MasonryItem from '../lib/MasonryItem';

describe('<Masonry />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Masonry columns={1} wrapperWidth={200} />);
  });

  it('Wraps each child in MasonryItem', () => {
    const wrapper = shallow(
      <Masonry columns={4} wrapperWidth={300}>
        <Text>Hello</Text>
        <Text>How are you doing today?</Text>
      </Masonry>
    );
    expect(wrapper.childAt(0).is(MasonryItem)).toBe(true);
    expect(wrapper.childAt(1).is(MasonryItem)).toBe(true);
  });

  it('Gives children a width prop', () => {
    const wrapper = shallow(
      <Masonry columns={1} wrapperWidth={400}>
        <View></View>
      </Masonry>
    );
    expect(wrapper.childAt(0).prop("width")).toBeGreaterThan(-1);
  });

  it('Gives the same width to each child', () => {
    const wrapper = shallow(
      <Masonry columns={5} wrapperWidth={500}>
        <View></View>
        <Text>I am a long sentence. My purpose is to vary the kind of content that is tested.</Text>
      </Masonry>
    );
    expect(wrapper.childAt(0).prop("width")).toEqual(wrapper.childAt(1).prop("width"));
  });

  it('Child width is computed from props width and columns', () => {
    const wrapper = shallow(
      <Masonry columns={7} wrapperWidth={600}>
        <Text>I am a child component</Text>
      </Masonry>
    );
    const child = wrapper.children().first();

    const width1 = wrapper.children().first().prop("width");
    wrapper.setProps({ wrapperWidth: 400 });
    const width2 = wrapper.children().first().prop("width");
    wrapper.setProps({ columns: 2 });
    const width3 = wrapper.children().first().prop("width");

    expect(width2).not.toBe(width1);
    expect(width3).not.toBe(width2);
  });
});
