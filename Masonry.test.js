// @flow
import React from 'react';
import 'react-native';
import { ScrollView, Text, View } from 'react-native';
import { shallow } from 'enzyme';

import Masonry from './Masonry';

describe('<Masonry />', () => {
  it('Renders correctly', () => {
    const wrapper = shallow(<Masonry />);
  });

  it('Is scrollable', () => {
    const wrapper = shallow(
      <Masonry />
    );
    expect(wrapper.equals(<ScrollView />)).toBe(true);
  });

  it('Renders children', () => {
    const wrapper = shallow(
      <Masonry>
        <Text>Hello</Text>
      </Masonry>
    );
    expect(wrapper.contains(<Text>Hello</Text>)).toBe(true);
  });

  it('Each child gets wrapped in a View', () => {
    const wrapper = shallow(
      <Masonry>
        <Text>Hello</Text>
        <Text>How are you doing today?</Text>
      </Masonry>
    );
    wrapper.children().map((child) => {
      expect(child.is(View)).toBe(true);
    });
  });
  
});
