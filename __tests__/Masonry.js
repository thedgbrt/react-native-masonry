// @flow
import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import { Text, View } from 'react-native';
import Grid from '../lib/Grid';
import Masonry from '../lib/Masonry';

const mockProps = {
  columns: 3,
  data: [
    { text: "Hello" },
    { text: "GoodBye" }
  ]
};

describe('<Masonry />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Masonry {...mockProps} />);
  });

  it('Default state.width is 0', () => {
    const wrapper = shallow(<Masonry {...mockProps} />);
    expect(wrapper.state("width")).toBe(0);
  });

  it('Doesn\'t render children if state.width == 0', () => {
    const wrapper = shallow(
      <Masonry {...mockProps} />
    ).setState({ width: 0 });
    expect(wrapper.children().length).toBe(0);
  });

  it('Renders children if state.width > 0', () => {
    const wrapper = shallow(
      <Masonry {...mockProps} />
    ).setState({ width: 150 });
    expect(wrapper.children().length).toBeGreaterThan(0);
  });

  it('Updates state.width on layout event', () => {
    const wrapper = shallow(<Masonry {...mockProps} />);
    wrapper.first().simulate("layout", { nativeEvent: { layout: { width: 500 } } });
    expect(wrapper.state().width).toBe(500);
  });
});
