// @flow
import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import { Text, View } from 'react-native';
import Grid from '../lib/Grid';
import Cell from '../lib/Cell';

const mockData = [
  { text: "Hello" },
  { text: "Have a nice day!" },
  { text: "GoodBye" }
];

const mockProps = {
  columns:3,
  wrapperWidth:300,
  data:mockData
};

describe('<Grid />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Grid {...mockProps} />);
  });

  it('Renders a Cell for each data item', () => {
    const wrapper = shallow(<Grid {...mockProps} />);
    expect(wrapper.childAt(0).is(Cell)).toBe(true);
    expect(wrapper.childAt(1).is(Cell)).toBe(true);
    expect(wrapper.childAt(2).is(Cell)).toBe(true);
  });

  it('Gives cells a width prop', () => {
    const wrapper = shallow(<Grid {...mockProps} />);
    expect(wrapper.childAt(0).prop("width")).toBeGreaterThan(-1);
  });

  it('Gives the same width to each cell', () => {
    const wrapper = shallow(<Grid {...mockProps} />);
    expect(wrapper.childAt(0).prop("width")).toEqual(wrapper.childAt(1).prop("width"));
  });

  it('Cell width is computed from props width and columns', () => {
    const wrapper = shallow(<Grid {...mockProps} />);
    const child = wrapper.children().first();

    const width1 = wrapper.children().first().prop("width");
    wrapper.setProps({ wrapperWidth: 400 });
    const width2 = wrapper.children().first().prop("width");
    wrapper.setProps({ columns: 2 });
    const width3 = wrapper.children().first().prop("width");

    expect(width2).not.toBe(width1);
    expect(width3).not.toBe(width2);
  });

  // it('Updates cells position on last _onLayoutCells')
});
