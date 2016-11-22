// @flow
import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import { Text } from 'react-native';
import MasonryItem from './MasonryItem';

describe('<MasonryItem />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<MasonryItem />);
  });

  it('Renders children', () => {
    const wrapper = shallow(
      <MasonryItem>
        <Text>Hello</Text>
      </MasonryItem>
    );
    expect(wrapper.children().length).toBe(1);
  });

});
