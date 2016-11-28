// @flow
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Grid from './Grid';
import type { NativeEvent } from './types';

class Masonry extends Component {
  state: {
    height: number,
    width: number
  };

  constructor() {
    super();
    this.state = {
      height: 0,
      width: 0
    }
  }

  _afterLayout = (height: number) => {
    this.setState({
      height: height
    });
    return true;
  }

  onLayout = (e: NativeEvent) => {
    this.setState({ width: e.nativeEvent.layout.width });
  }

  renderGrid = () => {
    if(this.state.width > 0) {
      return <Grid
        {...this.props}
        afterLayout={(h) => this._afterLayout(h)}
        wrapperWidth={this.state.width}
      />;
    }
    return null; // @todo : figure out if we display a loading indicator
  }

  render() {
    const computedStyles = [styles.container, { height: this.state.height }];
    return (
      <ScrollView
        contentContainerStyle={computedStyles}
        onLayout={(e) => this.onLayout(e)}
      >
        {this.renderGrid()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Masonry;
