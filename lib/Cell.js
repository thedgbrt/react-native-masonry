// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NativeEvent } from './types';

class Cell extends Component {
  props: {
    storeCellHeight?: (h: number) => boolean,
    text: string,
    width: number
  };

  onLayout = (e: NativeEvent) => {
    this.props.storeCellHeight && this.props.storeCellHeight(e.nativeEvent.layout.height);
  }

  render() {
    const computedStyle = [styles.wrapper, {width: this.props.width}];
    return (
      <View style={computedStyle} onLayout={(e) => this.onLayout(e)}>
        <Text>{this.props.text}</Text>
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
