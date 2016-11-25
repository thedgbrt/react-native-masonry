// @flow
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Masonry from './Masonry';

class MasonryWrapper extends Component {
  state: { wrapperWidth: number };

  constructor() {
    super();
    this.state = {
      wrapperWidth: 0
    }
  }

  onLayout = (e: { nativeEvent: { layout: { width: number }}}) => {
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
      <ScrollView onLayout={(e) => this.onLayout(e)}>
        {this.renderMasonry()}
      </ScrollView>
    );
  }
}

export default MasonryWrapper;
