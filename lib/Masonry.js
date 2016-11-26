// @flow
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Grid from './Grid';
import type { NativeEvent } from './types';

class Masonry extends Component {
  state: { wrapperWidth: number };

  constructor() {
    super();
    this.state = {
      wrapperWidth: 0
    }
  }

  onLayout = (e: NativeEvent) => {
    this.setState({ wrapperWidth: e.nativeEvent.layout.width });
  }

  renderGrid = () => {
    if(this.state.wrapperWidth > 0) {
      return <Grid {...this.props} wrapperWidth={this.state.wrapperWidth}/>;
    }
    return null; // @todo : figure out if we display a loading indicator
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
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
