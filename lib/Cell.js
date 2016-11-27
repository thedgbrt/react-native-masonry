// @flow
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NativeEvent } from './types';

class Cell extends Component {
  props: {
    afterLayout?: () => boolean,
    position: {x:number, y:number},
    storeCellHeight: (h: number) => boolean,
    text: string,
    width: number
  };

  onLayout = (e: NativeEvent) => {
    e && this.props.storeCellHeight && this.props.storeCellHeight(e.nativeEvent.layout.height);
    this.props.afterLayout && this.props.afterLayout();
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
