// @flow
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import type { NativeEvent } from './types';

class Cell extends Component {
  props: {
    children?: React$Element<any>,
    storeCellHeight?: (h: number) => boolean,
    width: number
  };

  onLayout = (e: NativeEvent) => {
    this.props.storeCellHeight && this.props.storeCellHeight(e.nativeEvent.layout.height);
  }

  render() {
    const computedStyle = [styles.wrapper, {width: this.props.width}];
    return (
      <View style={computedStyle} onLayout={(e) => this.onLayout(e)}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 50,
    left: 50
  }
});

export default Cell;
