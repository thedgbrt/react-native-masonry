// @flow
import React, { Children, Component } from 'react';
import { ScrollView, View } from 'react-native';
import MasonryItem from './MasonryItem';

class Masonry extends Component {
  props: {
    children?: React$Element<any>
  };

  renderChildren = () => (
    Children.map(this.props.children, (element) => (
      <MasonryItem>
        {element}
      </MasonryItem>
    ))
  );

  render() {
    return (
      <ScrollView>
        {this.renderChildren()}
      </ScrollView>
    );
  }
};

export default Masonry;
