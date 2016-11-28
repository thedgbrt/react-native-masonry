// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { CellPosition, NativeEvent } from './types';

type Props = {
  afterLayout: (h: number) => boolean,
  position: CellPosition,
  text: string,
  width: number
}

class Cell extends Component {
  props: Props;

  onLayout = (e: NativeEvent) => {
    this.props.afterLayout && this.props.afterLayout(e.nativeEvent.layout.height);
  }

  render() {
    const computedStyle = [
      styles.wrapper,
      {
        left: this.props.position.x,
        top: this.props.position.y,
        width: this.props.width
      }
    ];
    return (
      <View style={computedStyle} onLayout={(e) => this.onLayout(e)}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "black",
    borderWidth: 1,
    position: "absolute"
  }
});

export default Cell;
