// @flow
import React, { Children, Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import MasonryItem from './MasonryItem';
import { computeWidth } from './utils';

interface event {
  nativeEvent: {
    layout: {
      width: number
    }
  }
}

class Masonry extends Component {
  props: {
    children?: React$Element<any>,
    columns: number
  };

  state: {
    width: number
  };

  constructor() {
    super();
    this.state = {
      width: 0
    }
  }

  onLayout = (e: event) => {
    this.setState({ width: e.nativeEvent.layout.width });
  }

  renderChildren = () => (
    Children.map(this.props.children, (element) => (
      <MasonryItem width={computeWidth(this.state.width, this.props.columns)}>
        {element}
      </MasonryItem>
    ))
  );

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        onLayout={(e) => this.onLayout(e)}
      >
        {this.renderChildren()}
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

export default Masonry;
