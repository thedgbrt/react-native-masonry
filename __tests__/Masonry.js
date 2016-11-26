// @flow
import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import { Text, View } from 'react-native';
import Masonry from '../lib/Masonry';

const mockData = [
  { text: "Hello" },
  { text: "GoodBye" }
];

describe('<Masonry />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Masonry columns={1} data={mockData} />);
  });

  it('Default state.wrapperWidth is 0', () => {
    const wrapper = shallow(<Masonry columns={2} data={mockData} />);
    expect(wrapper.state("wrapperWidth")).toBe(0);
  });

  it('Doesn\'t render children if state.wrapperWidth == 0', () => {
    const wrapper = shallow(
      <Masonry columns={2} data={mockData}/>
    ).setState({ wrapperWidth: 0 });
    expect(wrapper.children().length).toBe(0);
  });

  it('Renders children if state.wrapperWidth > 0', () => {
    const wrapper = shallow(
      <Masonry columns={3} data={mockData}/>
    ).setState({ wrapperWidth: 150 });
    expect(wrapper.children().length).toBeGreaterThan(0);
  });

  it('Updates state.wrapperWidth on layout event', () => {
    const wrapper = shallow(<Masonry columns={6} data={mockData}/>);
    wrapper.first().simulate("layout", { nativeEvent: { layout: { width: 500 } } });
    expect(wrapper.state().wrapperWidth).toBe(500);
  });
});
