// @flow
import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import { Text, View } from 'react-native';
import Grid from '../lib/Grid';
import Cell from '../lib/Cell';

const mockData = [
  { text: "Hello" },
  { text: "GoodBye" }
];

describe('<Grid />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Grid columns={1} data={mockData} wrapperWidth={200} />);
  });

  it('Renders a Cell for each data item', () => {
    const wrapper = shallow(<Grid columns={4} wrapperWidth={300} data={mockData} />);
    expect(wrapper.childAt(0).is(Cell)).toBe(true);
    expect(wrapper.childAt(1).is(Cell)).toBe(true);
  });

  it('Gives cells a width prop', () => {
    const wrapper = shallow(<Grid columns={1} wrapperWidth={400} data={mockData} />);
    expect(wrapper.childAt(0).prop("width")).toBeGreaterThan(-1);
  });

  it('Gives the same width to each cell', () => {
    const wrapper = shallow(<Grid columns={5} wrapperWidth={500} data={mockData} />);
    expect(wrapper.childAt(0).prop("width")).toEqual(wrapper.childAt(1).prop("width"));
  });

  it('Cell width is computed from props width and columns', () => {
    const wrapper = shallow(<Grid columns={7} wrapperWidth={600} data={mockData} />);
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
