// @flow
import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import * as _ from 'lodash';
import { Text } from 'react-native';
import Cell from '../lib/Cell';

const mockProps = {
  position: {x:0, y:0},
  storeCellHeight: jest.fn(),
  text: "hello",
  width: 100
};

describe('<Cell />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Cell {...mockProps} />);
  });

  it('Renders text data', () => {
    const wrapper = shallow(<Cell {...mockProps} />);
    expect(wrapper.childAt(0).is(Text)).toBe(true);
  });

  it('Sets the width style property based on props', () => {
    const wrapper = shallow(<Cell {...mockProps} />);
    const styleDef = _.find(wrapper.prop("style"), "width");
    expect(styleDef.width).toBe(100);
  });

  it('Layout event triggers props.afterLayout()', () => {
    const afterLayoutFunc = jest.fn();
    const wrapper = shallow(
      <Cell {...mockProps} afterLayout={() => afterLayoutFunc(true) } />);
    wrapper.first().simulate("layout");
    expect(afterLayoutFunc).toHaveBeenCalled();
  })
});
