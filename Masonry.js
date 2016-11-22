// @flow
import React, { Children, Component } from 'react';
import { ScrollView, View } from 'react-native';

class Masonry extends Component {
  props: {
    children?: React$Element<any>
  };

  renderChildren = () => (
    Children.map(this.props.children, (el) => (
      <View>
        {el}
      </View>
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
