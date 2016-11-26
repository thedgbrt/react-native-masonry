// @flow
import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import * as _ from 'lodash';
import { Text } from 'react-native';
import Cell from '../lib/Cell';

describe('<Cell />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Cell width={10} text="hello" />);
  });

  it('Renders text data', () => {
    const wrapper = shallow(<Cell width={100} text="hello" />);
    expect(wrapper.childAt(0).is(Text)).toBe(true);
  });

  it('Sets the width style property based on props', () => {
    const wrapper = shallow(<Cell width={200} text="hello" />);
    const styleDef = _.find(wrapper.prop("style"), "width");
    expect(styleDef.width).toBe(200);
  });
});
