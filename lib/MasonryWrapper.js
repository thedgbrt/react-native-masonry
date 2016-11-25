// @flow
import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Masonry from './Masonry';
import type { NativeEvent } from './types';

class MasonryWrapper extends Component {
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

  renderMasonry = () => {
    if(this.state.wrapperWidth > 0) {
      return <Masonry {...this.props} wrapperWidth={this.state.wrapperWidth}/>;
    }
    return null; // @todo : figure out if we display a loading indicator
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        onLayout={(e) => this.onLayout(e)}
      >
        {this.renderMasonry()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default MasonryWrapper;
