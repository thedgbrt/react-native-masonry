// @flow
import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import * as _ from 'lodash';
import { Text } from 'react-native';
import MasonryItem from '../lib/MasonryItem';

describe('<MasonryItem />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<MasonryItem width={10} />);
  });

  it('Renders children', () => {
    const wrapper = shallow(
      <MasonryItem width={100}>
        <Text>Hello</Text>
      </MasonryItem>
    );
    expect(wrapper.children().length).toBe(1);
  });

  it('Sets the width style property based on props', () => {
    const wrapper = shallow(<MasonryItem width={200} />);
    const styleDef = _.find(wrapper.prop("style"), "width");
    expect(styleDef.width).toBe(200);
  });

  // it('Only renders if width > 0', () => {
  //   return null;
  // });
});
