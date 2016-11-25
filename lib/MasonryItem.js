// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class MasonryItem extends Component {
  props: {
    children?: React$Element<any>,
    width: number
  };

  render() {
    const computedStyle = [styles.wrapper, {width: this.props.width}];
    return (
      <View style={computedStyle}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  }
});

export default MasonryItem;
