// @flow
import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import * as _ from 'lodash';
import { Text } from 'react-native';
import Cell from '../lib/Cell';

describe('<Cell />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Cell width={10} />);
  });

  it('Renders children', () => {
    const wrapper = shallow(
      <Cell width={100}>
        <Text>Hello</Text>
      </Cell>
    );
    expect(wrapper.children().length).toBe(1);
  });

  it('Sets the width style property based on props', () => {
    const wrapper = shallow(<Cell width={200} />);
    const styleDef = _.find(wrapper.prop("style"), "width");
    expect(styleDef.width).toBe(200);
  });
});
